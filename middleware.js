const { NextResponse } = require("next/server");

export function middleware(req) {
  console.log("hit");
  console.log(req.nextUrl);

  return NextResponse.next();
}