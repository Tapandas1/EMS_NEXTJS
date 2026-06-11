import { NextResponse } from "next/server";
import { verifyTokenEdge } from "./lib/jwt-edge";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  const isProtected =
    req.nextUrl.pathname.startsWith("/departments") ||
    req.nextUrl.pathname.startsWith("/dashboard") ||
    req.nextUrl.pathname.startsWith("/employees");

  if (!isProtected) return NextResponse.next();

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const user = await verifyTokenEdge(token);

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/departments/:path*", "/dashboard/:path*", "/employees/:path*"],
};