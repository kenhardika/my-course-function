Technical Test 
Create Login - My Course - My Learning Page.

1. Penggunaan ReactJs **DONE**
2. Selesainya flow dari setiap page **DONE**
  
  a. Login page 
      - User dapat login ketika klik tombol login **DONE**
      - User tidak dapat login apabila email atau password salah **DONE**
   
   b. My Course Page
      - User dapat melihat course apa saja yang dimiliki **DONE**
      
      - User dapat mengklik tombol lanjut untuk navigasi ke halaman learning untuk melihat detail course **DONE**
  
  c. Learning Page
      - User dapat melihat setiap materi atau lesson.
      - User dapat mengklik tombol selanjutnya untuk melihat materi selanjutnya jika ada.
      - User dapat mengklik tombol seebelumnya untuk melihat materi seebelumnya jika ada.

3. Pengaplikasian API call untuk setiap page

   a. Login page
      - Sudah hit endpoint login saat user klik tombol masuk **DONE**
      - Apabila response dari API success login maka redirect ke halaman My Course dan tampilkan data user pada navbar **DONE**
   
   b. My Course Page
      - User dapat melihat course apa saja yang dimiliki berdasarkan response API course **DONE**
   
   c. Learning Page
      - User dapat melihat setiap materi atau lesson berdasarkan ID course yang dipilih dari halaman My course page. 


NOTE: 
Error pada saat login di github pages
Access to fetch at 'https://staging.komunitasmea.com/api/login' from origin 'https://kenhardika.github.io' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

Tidak ada error pada local machine saya, bisa dicek screenshotnya di folder Local Machine Screenshot
