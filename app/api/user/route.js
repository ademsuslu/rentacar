import dbConnect from "@/app/util/dbConnet";
import User from "@/app/model/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await dbConnect();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
