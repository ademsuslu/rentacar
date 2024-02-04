import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.nextUrl));
  }
}

// Protected routes
export const config = {
  matcher: [
    "/",
    "/about",
    "/prices",
    "/conditions",
    "/accounts",
    "/blog",
    "/sss",
    "/communication",
    "/admin",
  ],
};
