import { NextResponse } from "next/server";
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();
  const response = await cohere.chat({
    message: message,
  });

  console.log(response);
  return NextResponse.json(response);
}
