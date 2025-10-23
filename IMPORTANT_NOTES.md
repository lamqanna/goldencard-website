# 📌 NHỮNG ĐIỀU QUAN TRỌNG PHẢI NHỚ

## 🔴 CỰC KỲ QUAN TRỌNG - LÀM NGAY:

### 1️⃣ Setup Google OAuth (BẮT BUỘC trước khi chạy)

**Link:** https://console.cloud.google.com/

**Các bước:**
1. Tạo OAuth Client ID
2. Thêm redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://goldenenergy.vn/api/auth/callback/google`
3. Copy Client ID và Client Secret
4. Paste vào file `.env.local`:
   ```
   GOOGLE_CLIENT_ID=your_actual_client_id
   GOOGLE_CLIENT_SECRET=your_actual_secret
   ```

### 2️⃣ Setup Environment Variables trên Vercel

**Link:** https://vercel.com/lamqanna/goldencard-website/settings/environment-variables

**Thêm 4 biến:**
```
GOOGLE_CLIENT_ID = (từ Google Console)
GOOGLE_CLIENT_SECRET = (từ Google Console)
NEXTAUTH_URL = https://goldenenergy.vn
NEXTAUTH_SECRET = lC+WXLQBplUUCLKpPIvsIVTmFhOidK5UU3lyyEkQPgQ=
```

---

## ✅ Đã hoàn thành:

✅ Cài đặt NextAuth.js
✅ Tạo API authentication route
✅ Bảo vệ API `/api/contact` - chỉ 2 email được phép:
   - anhlq11002@gmail.com
   - lamqanna@gmail.com
✅ Tạo trang đăng nhập đẹp
✅ Tạo trang báo lỗi
✅ Tạo component AdminLoginButton
✅ Wrap app với SessionProvider
✅ Generate NEXTAUTH_SECRET: `lC+WXLQBplUUCLKpPIvsIVTmFhOidK5UU3lyyEkQPgQ=`

---

## 🎯 Workflow sử dụng:

1. **Local development:**
   ```bash
   npm run dev
   ```
   - Mở http://localhost:3000/auth/signin
   - Đăng nhập bằng Google
   - Chỉ 2 email của bạn mới login được

2. **Deploy lên production:**
   ```bash
   git push origin main
   ```
   - Vercel tự động deploy
   - Nhớ đã setup environment variables trên Vercel

3. **Thêm login button vào header:**
   ```tsx
   import AdminLoginButton from "@/components/AdminLoginButton"
   
   <AdminLoginButton />
   ```

---

## 🔒 Bảo mật đã thiết lập:

✅ Chỉ 2 email được whitelist
✅ API contact route yêu cầu authentication
✅ Session được quản lý bởi NextAuth.js
✅ NEXTAUTH_SECRET được generate ngẫu nhiên
✅ Environment variables không bị push lên Git
✅ Google OAuth redirect URI được giới hạn

---

## ⚠️ LƯU Ý:

- File `.env.local` đã tự động bị ignore (không push lên GitHub)
- Phải setup Google OAuth trước khi website hoạt động
- Production URL phải khớp với redirect URI
- Muốn thêm email mới: sửa trong file `app/api/auth/[...nextauth]/route.ts`

---

## 📞 Nếu có lỗi:

1. Check console trong browser (F12)
2. Check logs trên Vercel Dashboard
3. Verify environment variables đã setup đúng
4. Verify redirect URI trong Google Console khớp với domain

---

## 🚀 Next steps (tùy chọn):

- [ ] Thêm AdminLoginButton vào Header
- [ ] Tạo admin dashboard để quản lý content
- [ ] Thêm middleware để bảo vệ các routes khác
- [ ] Setup database để lưu submissions từ contact form
