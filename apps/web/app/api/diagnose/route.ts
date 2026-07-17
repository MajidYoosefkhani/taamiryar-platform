export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { device, problem, description } = body;

    if (!description) {
      return Response.json(
        {
          error: "توضیحات مشکل وارد نشده است",
        },
        {
          status: 400,
        }
      );
    }

    const response = await fetch(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",

        headers: {
          "content-type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY || "",
          "anthropic-version": "2023-06-01",
        },

        body: JSON.stringify({
          model: "claude-opus-4-6",

          max_tokens: 1000,

          system:
            "تو تعمیریار هستی؛ یک دستیار هوشمند برای تحلیل اولیه مشکلات دستگاه‌ها. پاسخ را به زبان فارسی، واضح، کاربردی و بدون ادعای تشخیص قطعی بده. همیشه احتمال خطا را در نظر بگیر و اگر خطر برق، گاز یا آسیب جدی وجود دارد، هشدار ایمنی بده.",

          messages: [
            {
              role: "user",
              content: `
دستگاه: ${device}

مشکل انتخاب‌شده: ${problem}

توضیحات کاربر:
${description}

لطفاً:
1. محتمل‌ترین علت‌ها را توضیح بده.
2. چند بررسی ساده و بی‌خطر پیشنهاد بده.
3. بگو آیا احتمالاً نیاز به تعمیرکار وجود دارد یا نه.
`,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        {
          error: data?.error?.message || "خطا در ارتباط با Claude",
        },
        {
          status: response.status,
        }
      );
    }

    const text =
      data?.content?.find(
        (item: { type: string }) => item.type === "text"
      )?.text || "پاسخی دریافت نشد.";

    return Response.json({
      result: text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "خطای داخلی سرور",
      },
      {
        status: 500,
      }
    );
  }
}