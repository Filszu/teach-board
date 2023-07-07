//e.g. auth for entire website
export { default } from "next-auth/middleware"

// export const config = { matcher: ["/dashboard"] }
export const config = { matcher: ["/dashboard/:path*"] }

