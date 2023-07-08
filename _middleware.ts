//e.g. auth for entire website
export { default } from "next-auth/middleware"

// export const config = { matcher: ["/dashboard"] }
export const config = { matcher: ["/dashboard/:path*"] }

//idk why not working since added typeORM