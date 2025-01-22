import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth({
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  },
});
