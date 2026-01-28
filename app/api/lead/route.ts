import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone } = body;

    if (!phone) {
      return NextResponse.json(
        { error: "Telefon numarası gerekli" },
        { status: 400 }
      );
    }

    // Send quick lead notification
    await resend.emails.send({
      from: "AppOnay <bildirim@apponay.com>",
      to: ["destek@apponay.com"],
      subject: `📱 Yeni Lead: ${phone}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0071e3 0%, #00c7ff 100%); padding: 30px; border-radius: 16px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📱 Yeni Potansiyel Müşteri</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">
              Birisi Hero bölümünden telefon numarası bıraktı.
            </p>
          </div>
          
          <div style="background: #f5f5f7; padding: 30px; border-radius: 0 0 16px 16px; text-align: center;">
            <p style="font-size: 32px; font-weight: bold; color: #1d1d1f; margin: 0;">
              ${phone}
            </p>
            
            <div style="margin-top: 24px;">
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" 
                 style="display: inline-block; background: #25D366; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 16px;">
                💬 WhatsApp ile Ara
              </a>
              <a href="tel:${phone}" 
                 style="display: inline-block; background: #0071e3; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 16px; margin-left: 10px;">
                📞 Telefon ile Ara
              </a>
            </div>
          </div>
          
          <p style="text-align: center; color: #86868b; font-size: 12px; margin-top: 20px;">
            Bu lead apponay.com ana sayfasından geldi.
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
