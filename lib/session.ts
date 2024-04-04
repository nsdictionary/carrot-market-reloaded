import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import db from "./db";
import { redirect } from "next/navigation";

interface SessionContent {
  id?: number;
}

export const getSession = () => {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: process.env.COOKIE_NAME!,
    password: process.env.COOKIE_PASSWORD!,
  });
};

export const getUser = async () => {
  const session = await getSession();
  const user = session.id
    ? await db.user.findUnique({ where: { id: session.id } })
    : null;

  return user;
};

export const saveLoginSession = async (user: SessionContent) => {
  const session = await getSession();
  session.id = user.id;
  await session.save();
  return redirect("/profile");
};

export const logout = async () => {
  "use server";
  const session = await getSession();
  session.destroy();
  redirect("/");
};
