import db from "@/lib/db";
import { saveLoginSession } from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getAccessToken, getGithubEmail, getGithubProfile } from "./utils";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }

  const token = await getAccessToken(code);
  const { id, avatar_url, login } = await getGithubProfile(token);
  const email = await getGithubEmail(token);

  const user = await db.user.findUnique({
    where: {
      github_id: id + "",
    },
    select: {
      id: true,
    },
  });
  user && (await saveLoginSession(user));

  const sameEmail = await db.user.findUnique({
    where: { username: email },
    select: { id: true },
  });
  if (sameEmail) {
    redirect("/login");
  }

  const sameUsername = await db.user.findUnique({
    where: { username: login },
    select: { id: true },
  });

  const newUser = await db.user.create({
    data: {
      username: sameUsername ? `${login}-gh)` : login,
      github_id: id + "",
      avatar: avatar_url,
      email,
    },
    select: {
      id: true,
    },
  });
  newUser && (await saveLoginSession(newUser));
}
