import { auth } from "@/app/api/auth/[...nextauth]/route"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  // 🔐 Kiểm tra authentication
  const session = await auth()
  
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized - Bạn cần đăng nhập để thực hiện thao tác này" },
      { status: 401 }
    )
  }

  // ✅ Kiểm tra email có trong whitelist
  const allowedEmails = [
    "anhlq11002@gmail.com",
    "lamqanna@gmail.com"
  ]
  
  if (!allowedEmails.includes(session.user?.email || "")) {
    return NextResponse.json(
      { error: "Forbidden - Bạn không có quyền thực hiện thao tác này" },
      { status: 403 }
    )
  }

  // 📝 Xử lý request khi đã authenticated
  try {
    const data = await request.formData()
    const payload = Object.fromEntries(data.entries())
    
    console.info("✅ Contact form submission by:", session.user?.email)
    console.info("📋 Payload:", {
      ...payload,
      message: payload.message,
    })
    
    // TODO: Xử lý logic lưu database, gửi email, etc.
    
    return NextResponse.json({ 
      ok: true,
      submittedBy: session.user?.email 
    })
  } catch (error) {
    console.error("❌ Error processing contact form:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export function GET() {
  return NextResponse.json({ 
    message: "Contact API - Use POST to submit form",
    authenticated: false 
  })
}
