import { getSession, getUserSession } from "@/lib/session";
import { notFound, redirect } from "next/navigation";

const logout = async () => {
  "use server";
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export default async function Profile() {
  const user = await getUserSession();
  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>Welcome! {user?.username}!</h1>
      <form action={logout}>
        <button>Log out</button>
      </form>
    </div>
  );
}
