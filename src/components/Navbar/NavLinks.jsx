"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

const NavLinks = () => {
  const { user, isAuthenticated } = useKindeBrowserClient();
  console.log(user);
  return (
    <>
      <li>
        <Link
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/blogs"
          aria-label="Product pricing"
          title="Product pricing"
          className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Blogs
        </Link>
      </li>

      {isAuthenticated ? (
        <>
          <li>
            <Link
              href="/profile"
              aria-label="Our product"
              title="Our product"
              className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Profile
            </Link>
          </li>
          <li>
            <div className="w-11 h-11 border-2 rounded-full overflow-hidden">
              <Image
                width={100}
                height={100}
                src={user.picture || "https://picsum.photos/id/1009/200/300"}
                alt="user-image"
              />
            </div>
          </li>

          <li>
            <LogoutLink>
              <Button variant="destructive">Sign out</Button>
            </LogoutLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <LoginLink>
              <Button variant={"outline"}>Sign In</Button>
            </LoginLink>
          </li>
          <li>
            <RegisterLink>
              <Button>Sign Up</Button>
            </RegisterLink>
          </li>
        </>
      )}
    </>
  );
};

export default NavLinks;
