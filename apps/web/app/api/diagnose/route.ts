import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "ANTHROPIC_API_KEY is missing",
        },
        {
          status: 500,
        }
      );
    }

    const anthropic = new Anthropic({
      apiKey,
    });

    const body = await req.json();

    const device = body.device ?? "نامشخص";
    const problem = body.problem ?? body.description ?? "";

    if (!problem.trim()) {
      return NextResponse.json(
        {
          error: "توضیحات مشکل وارد نشده است",
        },
        {
          status: 400,
        }
      );
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 800,
      messages: [
        {
          role: "user",
          content: `
تو یک تعمیرکار حرفه‌ای هستی.

دستگاه:
${device}

شرح مشکل:
${problem}

به فارسی پاسخ بده و شامل موارد زیر باشد:

1- علت‌های احتمالی
2- روش‌های تست ساده
3- میزان خطر
4- آیا نیاز به تعمیرکار دارد؟
`,
        },
      ],
    });

    const text =
      response.content[0].type === "text"
        ? response.content[0].text
        : "پاسخی دریافت نشد.";

    return NextResponse.json({
      result: text,
    });
  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      {
        error: err?.message ?? String(err),
      },
      {
        status: 500,
      }
    );
  }
}