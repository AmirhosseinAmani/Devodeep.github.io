function toggleLang() {
    const lang = document.documentElement.lang;
    if (lang === "en") {
      document.documentElement.lang = "fa";
      document.body.innerHTML = `
        <header class="hero">
          <div class="container">
            <h1>امیرحسین امانی</h1>
            <p>توسعه‌دهنده وب | دانشجوی مهندسی کامپیوتر</p>
            <button onclick="toggleLang()">English</button>
          </div>
        </header>
  
        <section id="about">
          <div class="container">
            <h2>درباره من</h2>
            <p>سلام! من امیرحسین هستم، دانشجوی مهندسی کامپیوتر و علاقه‌مند به طراحی وب و توسعه خلاقانه.</p>
          </div>
        </section>
  
        <section id="projects">
          <div class="container">
            <h2>پروژه‌ها</h2>
            <ul>
              <li>وب‌سایت هوشمند باشگاه</li>
              <li>تحلیل‌گر CAD/CAM دندان‌پزشکی</li>
            </ul>
          </div>
        </section>
  
        <section id="contact">
          <div class="container">
            <h2>تماس با من</h2>
            <p>ایمیل: amirhossein@example.com</p>
            <p>گیت‌هاب: github.com/amirhosseinamani</p>
          </div>
        </section>
  
        <footer>
          <p>© ۲۰۲۵ امیرحسین امانی</p>
        </footer>
      `;
    } else {
      location.reload();
    }
  }
  