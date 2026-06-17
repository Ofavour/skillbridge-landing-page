// SLIDE CAN BE NEXTED AND CAN SLIDE ON IT ON 
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.partner-slide');
  const nextBtn = document.querySelector('.slide-nav.next');
  const prevBtn = document.querySelector('.slide-nav.prev');
  let currentIndex = 0;
  let autoSlideInterval;

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-label', 'Open menu');
      }
    });

    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll('.mobile-menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    showSlide(newIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000); 
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  
  // Initialize
  showSlide(0);
  startAutoSlide();
});


// NAVBAR CLOSES WHEN A LINK IS CLICKED
// Note: primary mobile menu behavior is handled inside DOMContentLoaded above.

// about page courses
   const courses = [
        {
          id: 1,
          title: "Full Bundle",
          desc: "HCA + HSC + Phlebotomy",
          oldPrice: 450000,
          newPrice: 380000,
          badge: "Best Value",
          msg: "Hi, I want to register for the All-in-One Bundle",
          image:
            "https://files.websitebuilder.prositehosting.co.uk/b7/2d/b72d8f44-ee72-4c65-9532-c2a5c7a54975.jpg",
          duration: "8 weeks",
          level: "Beginner to Advanced",
          projects: [
            "Clinical placement",
            "First aid certification",
            "Blood draw practicals",
          ],
          syllabus: [
            "Healthcare Assistant fundamentals",
            "Health & Social Care modules",
            "Phlebotomy techniques",
            "Infection control",
            "Patient care",
          ],
        },
        {
          id: 2,
          title: "Care Bundle",
          desc: "HCA + HSC",
          oldPrice: 300000,
          newPrice: 250000,
          badge: "Popular",
          msg: "Hi, I want to register for the Care Bundle",
          image:
            "https://clicollege.com/wp-content/uploads/2024/08/Untitled-design-6.png",
          duration: "6 weeks",
          level: "Beginner",
          projects: ["Care plan development", "Patient support simulation"],
          syllabus: [
            "Personal care",
            "Communication skills",
            "Safeguarding",
            "Health & safety",
            "Manual handling",
          ],
        },
        {
          id: 3,
          title: "Phlebotomy Only",
          desc: "Hands-on practicals included",
          oldPrice: 200000,
          newPrice: 150000,
          badge: "Save ₦50k",
          msg: "Hi, I want to register for Phlebotomy Only",
          image:"https://www.news-medical.net/image-handler/picture/2021/3/shutterstock_1216576462.jpg",
          duration: "3 weeks",
          level: "Intermediate",
          projects: ["Venipuncture practice", "Sample collection"],
          syllabus: [
            "Anatomy of veins",
            "Blood collection methods",
            "Lab safety",
            "Patient communication",
            "Documentation",
          ],
        },
        {
          id: 4,
          title: "Single Course",
          desc: "HCA Only or HSC Only",
          oldPrice: 250000,
          newPrice: 200000,
          badge: "Flexible",
          msg: "Hi, I want to register for HCA or HSC Only",
          
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5wr7j3etyJofWjnJ_zEzJbJLVePoM4emDw&s",
          duration: "4 weeks",
          level: "Beginner",
          projects: ["Care scenario roleplay"],
          syllabus: [
            ,
            "Ethics & confidentiality",
            "Basic life support",
            "Record keeping",
          ],
        },
        {
          id: 5,
          title: "Forklift Training",
          desc: "Accredited operator certification",
          oldPrice: 300000,
          newPrice: 250000,
          badge: "New",
          msg: "Hi, I want to register for Forklift Training",
          image:"data:image/jpeg;base64,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",

          level: "Beginner",
          projects: ["Practical driving test", "Safety inspection check"],
          syllabus: [
            "Forklift types & controls",
            "Load handling",
            "Safety regulations",
            "Pre-use checks",
            "Practical operation",
            "Theory exam",
          ],
        },
      ];
      // show detils of the about page
       const phone = "2348012345678"; // Replace with your WhatsApp number

      function formatPrice(n) {
        return "₦" + n.toLocaleString();
      }

      function renderList() {
        document.getElementById("price-list").innerHTML = courses
          .map((c) => {
            const save = c.oldPrice - c.newPrice;
            const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(c.msg)}`;
            return `
      <div class="card" style="background-image: url('${c.image}')">
        <span class="badge">${c.badge}</span>
        <h3 class="title">${c.title}</h3>
        <p class="desc">${c.desc}</p>
        <div class="price-wrap">
          <span class="old-price">${formatPrice(c.oldPrice)}</span>
          <div class="new-price">${formatPrice(c.newPrice)}</div>
          <div class="save">Save ${formatPrice(save)}</div>
        </div>
        <div class="btn-group">
          <a class="btn" href="${waLink}" target="_blank">Register</a>
          <a class="btn btn-secondary" href="../courses.html?course=${c.id}">View Details</a>
        </div>
      </div>
    `;
          })
          .join("");
      }

      function showDetail(id) {
        const c = courses.find((x) => x.id === id);
        document.getElementById("detail-view").innerHTML = `
    <span class="back" onclick="hideDetail()">← Back to courses</span>
    <h2>${c.title}</h2>
    <p>${c.desc}</p>
    <p><strong>Duration:</strong> ${c.duration} | <strong>Level:</strong> ${c.level}</p>
    <h3>What you’ll build / do</h3>
    <ul>${c.projects.map((p) => `<li>${p}</li>`).join("")}</ul>
    <h3>Syllabus</h3>
    <ul>${c.syllabus.map((s) => `<li>${s}</li>`).join("")}</ul>
    <p class="new-price">${formatPrice(c.newPrice)} <span class="old-price">${formatPrice(c.oldPrice)}</span></p>
    <a class="btn" href="https://wa.me/${phone}?text=${encodeURIComponent(c.msg)}" target="_blank" style="display:inline-block; margin-top:16px;">Register on WhatsApp</a>
  `;
        document.getElementById("main-content").style.display = "none";
        document.getElementById("detail-view").classList.add("active");
        window.scrollTo(0, 0);
      }

      function hideDetail() {
        document.getElementById("main-content").style.display = "block";
        document.getElementById("detail-view").classList.remove("active");
      }

      function scrollToCourse(courseId) {
        const card = document.querySelector(`.course-card[data-course-id="${courseId}"]`);
        if (!card) return;
        card.classList.add("highlight");
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => card.classList.remove("highlight"), 3000);
      }

      renderList();

      const params = new URLSearchParams(window.location.search);
      const selectedCourse = params.get("course");
      if (selectedCourse) {
        scrollToCourse(selectedCourse);
      }