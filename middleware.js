import { NextResponse } from "next/server"; 
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("myToken");
if(request.nextUrl.pathname.includes('/user/profile')){
  if (!jwt) ///nudo///
  return NextResponse.redirect(new URL("/login", request.url));
   
  try {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode("secret")
    );
    console.log( {payload});/////nudo//
    return NextResponse.next();
  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/login", request.url));
  };
  
}
}
  

/*
try {
   const { payload } = await jwtVerify(
     jwt,
     new TextEncoder().encode("secret")
   );
   console.log( {payload});/////nudo//
   return NextResponse.next();
 } catch (error) {
   return NextResponse.redirect(new URL("/login", request.url));
 };
 */