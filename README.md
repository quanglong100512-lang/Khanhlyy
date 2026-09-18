# ❤️ Khánh Lyy ❤️
Một trang web nhỏ với hiệu ứng trái tim dành tặng **Khánh Lyy** 🌷
Trang web có màn hình mở đầu màu đen, người truy cập bấm **"Ấn vào đây nhé ❤️"** để mở nội dung bên trong.
---
## ✨ Tính năng
- 🖤 Màn hình mở đầu nền đen.
- ❤️ Nút **"Ấn vào đây nhé ❤️"**.
- ✨ Hiệu ứng fade khi mở trang.
- 💗 Hàng nghìn trái tim màu đỏ và hồng chuyển động.
- 💫 Các hạt sáng bay xung quanh.
- 💓 Trái tim có hiệu ứng đập và lơ lửng.
- 🌷 Nội dung lời nhắn ở giữa màn hình.
- 📱 Tối ưu cho điện thoại.
- 💻 Hoạt động trên máy tính.
- 🌐 Không cần thư viện bên ngoài.
- ⚡ Có thể chạy offline.
---
## 📁 Cấu trúc dự án
```text
Khánh-Lyy/
│
├── index.html
├── style.css
├── script.js
└── README.md

index.html

Chứa phần nội dung HTML của trang web.

style.css

Chứa toàn bộ giao diện:

* Nền
* Nút
* Chữ
* Hiệu ứng phát sáng
* Animation
* Responsive

script.js

Chứa hiệu ứng:

* Trái tim
* Hạt sáng
* Animation
* Hiệu ứng mở trang
* Canvas

README.md

Tài liệu giới thiệu dự án.

⸻

🚀 Cách chạy

Cách 1 — Mở trực tiếp

Tải toàn bộ project về máy rồi mở:

index.html

Trang web có thể hoạt động mà không cần Internet.

⸻

Cách 2 — GitHub Pages

1. Tạo một repository mới trên GitHub.
2. Upload:

index.html
style.css
script.js
README.md

3. Vào:

Settings
→ Pages

4. Chọn:

Deploy from a branch

5. Chọn branch:

main

6. Chọn thư mục:

/root

7. Nhấn Save.

Sau khi GitHub Pages hoàn tất, bạn sẽ có một đường dẫn dạng:

https://username.github.io/ten-repository/

⸻

📱 Chạy trên iPhone

Có thể chỉnh sửa project bằng các trình soạn thảo code trên iPhone.

Chỉ cần đảm bảo 3 file:

index.html
style.css
script.js

nằm cùng một thư mục.

⸻

🎨 Tùy chỉnh

Đổi tên

Trong index.html, tìm:

<span class="name">
    ❤️ Khánh Lyy ❤️
</span>

Có thể đổi thành tên khác.

⸻

Đổi lời nhắn

Tìm các phần:

<span class="message">
    ...
</span>

và thay nội dung bên trong.

⸻

Đổi màu trái tim

Trong script.js, màu trái tim được tạo bằng:

`hsl(
    ${h.hue},
    100%,
    65%
)`

Bạn có thể thay đổi hue để tạo các màu khác nhau.

⸻

Tăng hoặc giảm số lượng trái tim

Trong script.js:

const amount =
    mobile
        ? 5000
        : 8000;

Ví dụ muốn nhẹ hơn:

const amount =
    mobile
        ? 2000
        : 4000;

Muốn nhiều trái tim hơn:

const amount =
    mobile
        ? 7000
        : 12000;

⚠️ Số lượng quá lớn có thể làm giảm FPS trên điện thoại yếu.

⸻

💖 Hiệu ứng

Trang web sử dụng:

HTML
CSS
JavaScript
Canvas API

Không sử dụng framework hoặc thư viện JavaScript bên ngoài.

⸻

📜 License

Bạn có thể sử dụng, chỉnh sửa và tùy biến project này cho mục đích cá nhân.

⸻

❤️ Made with HTML, CSS & JavaScript

For Khánh Lyy 🌷

Một trang web nhỏ,
nhưng chứa rất nhiều trái tim. ❤️

Nếu đưa lên GitHub, file nên đặt tên **chính xác là `README.md`** và nằm ở thư mục gốc cùng `index.html`, `style.css`, `script.js`.
