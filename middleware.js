const { NextResponse } = require("next/server");

export function middleware(req) {
  console.log("hit");
  console.log(req.nextUrl);

  return NextResponse.next();
}

export const config = {
  matcher: [
    // eslint-disable-next-line prettier/prettier, no-useless-escape
    "/:path((?!c/|_next/?|o/|f/|location/?|rating/?|price/?|product/?|basket/?|things-to-do/?|experience-blog/?|sapling/?).*(?<!\\..*))"
  ]
};
