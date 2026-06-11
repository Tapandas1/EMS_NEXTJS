import { cookies } from "next/headers";

// Set token in cookie
export function setAuthCookie(token) {
  cookies().set("token", token, {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "lax",
    path: "/",
  });
}

// Get token from cookie
export function getAuthCookie() {
  return cookies().get("token")?.value;
}

// Remove cookie (logout)
export function removeAuthCookie() {
  cookies().delete("token");
}