import { Resend } from "resend";

type QuoteRequestBody = {
  nombre: string;
  tlf: string;
  email: string;
};

function isQuoteRequestBody(value: unknown): value is QuoteRequestBody {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const body = value as Record<string, unknown>;
  return (
    typeof body.nombre === "string" &&
    typeof body.tlf === "string" &&
    typeof body.email === "string"
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "El cuerpo de la solicitud no es válido." },
      { status: 400 },
    );
  }

  if (!isQuoteRequestBody(body)) {
    return Response.json(
      { error: "Debes proporcionar nombre, teléfono y correo electrónico." },
      { status: 400 },
    );
  }

  const nombre = body.nombre.trim();
  const tlf = body.tlf.trim();
  const email = body.email.trim();

  if (!nombre || !tlf || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "El nombre, teléfono o correo electrónico no son válidos." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return Response.json(
      { error: "El servicio de correo no está configurado." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ?? "Cotizaciones <onboarding@resend.dev>",
      to: ["caigcada2303@gmail.com"],
      replyTo: email,
      subject: `🚚 Nueva Solicitud de Cotización - ${nombre}`,
      text: `Nueva solicitud de cotización\n\nNombre: ${nombre}\nTeléfono: ${tlf}\nCorreo electrónico: ${email}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva Cotización</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f4f4f5; padding: 40px 0;">
            <tr>
              <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">

                  <tr>
                    <td style="background-color: #0a0a0a; padding: 30px 40px; text-align: center;">
                      <h1 style="color: #34C759; margin: 0; font-size: 26px; text-transform: uppercase; letter-spacing: 1px;">Transportes Dios Es Bueno</h1>
                      <p style="color: #a1a1aa; margin: 5px 0 0 0; font-size: 14px;">Nueva solicitud de cotización recibida desde la web</p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 40px;">
                      <p style="font-size: 16px; color: #3f3f46; margin-top: 0;">Hola, <strong>Administrador</strong>. Has recibido una nueva solicitud de servicio con los siguientes datos:</p>
                      
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 25px 0; background-color: #fafafa; border-radius: 12px; border: 1px solid #e4e4e7;">
                        <tr>
                          <td style="padding: 20px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 15px; color: #71717a; width: 35%;"><strong>Nombre:</strong></td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 16px; color: #18181b;">${nombre}</td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 15px; color: #71717a;"><strong>Teléfono:</strong></td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 16px; color: #18181b;">
                                  <a href="tel:${tlf}" style="color: #34C759; text-decoration: none; font-weight: bold;">${tlf}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0; font-size: 15px; color: #71717a;"><strong>Correo:</strong></td>
                                <td style="padding: 10px 0; font-size: 16px; color: #18181b;">
                                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <p style="font-size: 14px; color: #71717a; line-height: 1.5; margin-bottom: 0;">
                        💡 <em>Tip: Puedes hacer clic directamente sobre el número de teléfono o el correo para contactar al cliente con rapidez.</em>
                      </p>
                    </td>
                  </tr>

                    <tr>
                    <td style="background-color: #fafafa; padding: 20px 40px; text-align: center; border-top: 1px solid #e4e4e7;">
                      <p style="font-size: 12px; color: #a1a1aa; margin: 0;">Este es un mensaje automático generado desde el sitio web de Transportes Dios Es Bueno C.A.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend failed to send a quote request:", error);
      return Response.json(
        { error: "No se pudo enviar la cotización. Inténtalo de nuevo." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Resend request failed:", error);
    return Response.json(
      { error: "No se pudo enviar la cotización. Inténtalo de nuevo." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Cotización enviada correctamente." });
}
