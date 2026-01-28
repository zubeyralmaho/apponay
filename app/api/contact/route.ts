import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, problemType, message } = body;

    // Validate required fields
    if (!name || !email || !problemType || !message) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik" },
        { status: 400 }
      );
    }

    // Map problem types to readable labels
    const problemLabels: Record<string, string> = {
      payment: "Ödeme Sorunu (Payment Declined)",
      duns: "D-U-N-S Numarası / Kurumsal Hesap",
      rejection: "Uygulama Reddi",
      other: "Diğer",
    };

    const problemLabel = problemLabels[problemType] || problemType;

    // Send email to admin
    const { error } = await resend.emails.send({
      from: "AppOnay <bildirim@apponay.com>",
      to: ["destek@apponay.com"],
      replyTo: email,
      subject: `🆕 Yeni Destek Talebi: ${problemLabel} - ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0071e3 0%, #00c7ff 100%); padding: 30px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎯 Yeni Destek Talebi</h1>
          </div>
          
          <div style="background: #f5f5f7; padding: 30px; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                  <strong style="color: #86868b;">İsim:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #1d1d1f;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                  <strong style="color: #86868b;">E-posta:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                  <a href="mailto:${email}" style="color: #0071e3;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                  <strong style="color: #86868b;">Telefon:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #1d1d1f;">
                  ${phone || "Belirtilmedi"}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                  <strong style="color: #86868b;">Sorun Tipi:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                  <span style="background: #0071e3; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                    ${problemLabel}
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 20px 0 0 0;">
                  <strong style="color: #86868b;">Mesaj:</strong>
                  <div style="background: white; padding: 16px; border-radius: 8px; margin-top: 8px; color: #1d1d1f; line-height: 1.6;">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
              <a href="mailto:${email}?subject=Re: AppOnay Destek Talebi" 
                 style="display: inline-block; background: #0071e3; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500;">
                ✉️ Hemen Yanıtla
              </a>
              ${phone ? `
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" 
                 style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; margin-left: 8px;">
                💬 WhatsApp
              </a>
              ` : ""}
            </div>
          </div>
          
          <p style="text-align: center; color: #86868b; font-size: 12px; margin-top: 20px;">
            Bu e-posta apponay.com üzerinden gönderilmiştir.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-posta gönderilemedi" },
        { status: 500 }
      );
    }

    // Optionally send confirmation to customer
    await resend.emails.send({
      from: "AppOnay <bildirim@apponay.com>",
      to: [email],
      subject: "✅ Talebiniz Alındı - AppOnay",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; padding: 40px 20px;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #0071e3 0%, #00c7ff 100%); border-radius: 20px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 40px;">✓</span>
            </div>
            <h1 style="color: #1d1d1f; margin: 0 0 10px 0;">Talebiniz Alındı!</h1>
            <p style="color: #86868b; font-size: 16px; line-height: 1.6;">
              Merhaba ${name.split(" ")[0]},<br><br>
              Destek talebinizi aldık. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
          
          <div style="background: #f5f5f7; padding: 20px; border-radius: 12px; margin-top: 20px;">
            <p style="margin: 0; color: #1d1d1f;">
              <strong>Sorun Tipi:</strong> ${problemLabel}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #86868b; font-size: 14px;">
              Acil destek için:
            </p>
            <a href="https://wa.me/905016321664" 
               style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500;">
              💬 WhatsApp ile Ulaşın
            </a>
          </div>
          
          <p style="text-align: center; color: #86868b; font-size: 12px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            AppOnay - Apple Developer Hesap Açma Çözümleri<br>
            <a href="https://apponay.com" style="color: #0071e3;">apponay.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
