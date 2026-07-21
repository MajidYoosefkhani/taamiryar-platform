import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const device = body.device;
    const problem = body.problem || body.description;

    if (!problem) {
      return NextResponse.json(
        {
          error: "توضیحات مشکل وارد نشده است",
        },
        {
          status: 400,
        }
      );
    }

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `
تو دستیار هوشمند سایت تعمیریار هستی.

دستگاه:
${device || "نامشخص"}

مشکل:
${problem}

لطفاً مشکل را به زبان فارسی تحلیل کن و پاسخ را در این ساختار بده:

1. احتمال اصلی خرابی
2. دلایل احتمالی
3. چند بررسی ساده که کاربر می‌تواند انجام دهد
4. آیا نیاز به تعمیرکار متخصص دارد یا نه

پاسخ واضح، کاربردی و قابل فهم باشد.
          `,
        },
      ],
    });

    const result =
      message.content[0].type === "text"
        ? message.content[0].text
        : "تحلیل انجام نشد.";

    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "خطا در اتصال به هوش مصنوعی",
      },
      {
        status: 500,
      }
    );
  }
}