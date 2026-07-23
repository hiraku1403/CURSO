import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY,
);

export async function POST(
  request: Request,
) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          error:
            "Preencha todos os campos obrigatórios.",
        },
        {
          status: 400,
        },
      );
    }

    const emailResponse =
      await resend.emails.send({
        from:
          "Portfolio <onboarding@resend.dev>",

        to: [
          "sartorhenn@gmail.com",
        ],

        replyTo: email,

        subject: `[Portfolio] ${subject}`,

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 32px;">
            
            <h1 style="font-size: 24px; margin-bottom: 24px;">
              Nova mensagem do seu portfólio
            </h1>

            <div style="margin-bottom: 20px;">
              <strong>Nome:</strong>
              <p>${name}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <strong>E-mail:</strong>
              <p>${email}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <strong>Assunto:</strong>
              <p>${subject}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <strong>Mensagem:</strong>
              <p style="white-space: pre-line;">
                ${message}
              </p>
            </div>

          </div>
        `,
      });

    if (emailResponse.error) {
      return NextResponse.json(
        {
          error:
            "Não foi possível enviar a mensagem.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,

        message:
          "Mensagem enviada com sucesso!",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "CONTACT_FORM_ERROR:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "Ocorreu um erro ao enviar a mensagem.",
      },
      {
        status: 500,
      },
    );
  }
}