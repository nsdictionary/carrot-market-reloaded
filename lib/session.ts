import { IronSession, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import db from "./db";
import { redirect } from "next/navigation";

interface SessionContent {
  id?: number;
}

export const getSession = (): Promise<IronSession<SessionContent>> => {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: process.env.COOKIE_NAME!,
    password: process.env.COOKIE_PASSWORD!,
  });
};

export const getUserSession = async () => {
  const session = await getSession();
  const user = session.id
    ? await db.user.findUnique({ where: { id: session.id } })
    : null;

  return user;
};

export const saveLoginSession = async (
  user: SessionContent,
  redirectPath: string | null = "/profile"
) => {
  const session = await getSession();
  session.id = user.id;
  await session.save();

  if (redirectPath) {
    return redirect(redirectPath);
  }
};
