import { getUser, logout } from "@/lib/session";
import { notFound } from "next/navigation";

export default async function Profile() {
  const user = await getUser();
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
