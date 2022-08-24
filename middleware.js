const { NextResponse } = require("next/server");

const { SOME_ENV_VARIABLE = 0 } = process.env

export function middleware(req) {
  if (SOME_ENV_VARIABLE) return NextResponse.next()

  console.log("hit");
  console.log(req.nextUrl);

  return NextResponse.next();
}