import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const type = String(body.type || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone || !message) {
      return NextResponse.json({ ok: false, error: "Nama, telepon, dan pesan wajib diisi." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const EMAIL_FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";

    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
      return NextResponse.json({ ok: false, error: "Email service belum dikonfigurasi (RESEND_API_KEY/CONTACT_TO_EMAIL)." }, { status: 501 });
    }

    const resend = new Resend(RESEND_API_KEY);
    const subject = `Lead Portofolio Lapangan — ${name}`;
    const html = `
      <div style="font-family:Arial, sans-serif">
        <h2>Lead Baru: Portofolio Kontraktor Lapangan</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Telepon:</strong> ${phone}</p>
        <p><strong>Jenis Pekerjaan:</strong> ${type}</p>
        <p><strong>Pesan:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await resend.emails.send({
      from: EMAIL_FROM,
      to: CONTACT_TO_EMAIL,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
