// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";

const { SOME_ENV_VARIABLE = 0 } = process.env

export const makeMiddleware = () => (req) => {
    if (SOME_ENV_VARIABLE) return NextResponse.next()
  
    console.log("hit");
    console.log(req.nextUrl);
  
    return NextResponse.next();
  }