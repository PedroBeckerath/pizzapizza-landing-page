import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const { nome, email, mensagem } = await request.json();

  try {
    await sgMail.send({
      to: "pedro.beckerath@ufba.br", 
      from: "pedro.beckerath@ufba.br", 
      subject: `Contato de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    });

    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}