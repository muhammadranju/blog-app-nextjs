import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NavbarComponent } from "./NavbarComponent";

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();

  return (
    <NavbarComponent user={user} isAuthenticated={isAuth}></NavbarComponent>
  );
};

export default Navbar;
