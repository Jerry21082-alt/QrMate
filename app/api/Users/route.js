import User from "@/app/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.signInInputs;

    if (!signInIputs?.email || !signInInputs.password || signInInputs.userName) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        { status: 404 }
      );
    }

    const duplicate = await User.findOne({ email: signInInputs.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json(
        {
          message: "Duplicate Email",
        },
        { status: 409 }
      );
    }


    const hashedPassword = await bcrypt.hash(signInInputs.password, 10);
    signInInputs.password = hashedPassword;

    await User.create(userData);
    return NextResponse.json({ message: "User Created" }, { status: 201 })

  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
