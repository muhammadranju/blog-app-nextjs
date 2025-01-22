import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();
  console.log(user);

  if (!isAuth) {
    return redirect(
      "https://mdranju.kinde.com/auth/cx/_:nav&m:login&psid:01948fad60ac09293ee307b31091dcec"
    );
  }
  if (!user) {
    return redirect(
      "https://mdranju.kinde.com/auth/cx/_:nav&m:login&psid:01948fad60ac09293ee307b31091dcec"
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <title>Profile | Blogs</title>
      <div className="border p-10 lg:px-28  py-20 rounded-xl shadow-lg">
        <h1 className="lg:text-7xl text-5xl font-bold text-center">Hey👋</h1>
        <p className="lg:text-3xl text-xl font-bold text-center">
          Welcome to your profile!
        </p>
        <div className="flex flex-col mt-10 gap-y-1 items-center justify-center">
          <Image
            width={100}
            height={100}
            src={user.picture || "https://picsum.photos/id/1009/200/300"}
            className="w-16 h-16 rounded-xl"
            alt="user-image"
          />
          <span className="lg:text-xl  font-bold">
            Name: {user.given_name} {user.family_name}
          </span>
          <span className="lg:text-xl   font-semibold">
            Email: {user.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
