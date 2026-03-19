/* =========================== UI INTERACTIONS =========================== */

/* ================= 1. TYPING EFFECT ================= */

const roles = [
    "Java Full Stack Developer",
    "SQL Developer",
    "Web Developer",
    "Open to Work"
];

let roleIndex = 0;
let charIndex = 0;

const roleText = document.getElementById("roleText");

function typeEffect() {
    if (!roleText) return;

    if (charIndex < roles[roleIndex].length) {
        roleText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (roles.length && roleText) {
        setTimeout(typeEffect, 800);
    }
});


/* ================= 2. HAMBURGER MENU ================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll("#nav-links a");
    const overlay = document.querySelector(".overlay");

    if (!menuToggle || !navMenu) return;

    // Toggle menu
    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (overlay) overlay.classList.toggle("active");

        menuToggle.innerHTML = navMenu.classList.contains("active") ? "✖" : "☰";
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            if (overlay) overlay.classList.remove("active");
            menuToggle.innerHTML = "☰";
        });
    });

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener("click", () => {
            navMenu.classList.remove("active");
            overlay.classList.remove("active");
            menuToggle.innerHTML = "☰";
        });
    }

});


/* ================= 3. PROJECT SLIDER ================= */

const slides = document.querySelectorAll(".project-slide");
const nextBtn = document.querySelector(".project-next");
const prevBtn = document.querySelector(".project-prev");
const slider = document.querySelector(".project-slider");

let index = 0;
let autoSlide;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    if (slides[i]) slides[i].classList.add("active");
}

if (slides.length && nextBtn && prevBtn && slider) {

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    function startAutoSlide(speed = 4000) {
        autoSlide = setInterval(() => {
            index = (index + 1) % slides.length;
            showSlide(index);
        }, speed);
    }

    startAutoSlide();

    slider.addEventListener("mouseenter", () => clearInterval(autoSlide));
    slider.addEventListener("mouseleave", () => startAutoSlide(3000));
}

/* ================= 4. CONTACT FORM ================= */

(function () {
    emailjs.init("9xmJApxbx1dgKhUIH"); 
})();

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");
const failMsg = document.getElementById("fail-message");

if (form) {

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_zddv5xr",
            "template_r7md73k",  
            this
        )
        .then(() => {

            successMsg.classList.add("show");

            setTimeout(() => {
                successMsg.classList.remove("show");
            }, 3000);

            form.reset();

        })
        .catch(() => {

            failMsg.classList.add("show");

            setTimeout(() => {
                failMsg.classList.remove("show");
            }, 3000);

        });

    });

}


/* ================= 5. LOADER ================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 400);
    }
});


/* ================= 6. SECTION REVEAL ================= */

const revealSections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

revealSections.forEach(section => {
    sectionObserver.observe(section);
});


/* ================= 7. SCROLL PROGRESS ================= */

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    const bar = document.getElementById("scrollProgress");
    if (bar) bar.style.width = progress + "%";
});


/* ================= 8. SCROLL TO TOP ================= */

const scrollBtn = document.getElementById("scrollBtn");

if (scrollBtn) {

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        scrollBtn.style.setProperty("--scroll", scrollPercent + "%");

        if (scrollTop > 200) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

}


/* ================= 9. TIMELINE ANIMATION ================= */

const timelineItems = document.querySelectorAll(".timeline-content");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => observer.observe(item));


/* ================= 10. PARTICLES ================= */

if (document.getElementById("particles-js")) {

    particlesJS("particles-js", {
        particles: {
            number: { value: 40 },   
            color: { value: "#a855f7" },

            shape: { type: "circle" },

            opacity: { value: 0.5 },

            size: { 
                value: 3, 
                random: true 
            },

            line_linked: {
                enable: true,
                distance: 140,
                color: "#ec4899",
                opacity: 0.3,
                width: 1
            },

            move: { 
                enable: true, 
                speed: 2.5,      
                out_mode: "out" 
            }
        },

        interactivity: {
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                grab: {
                    distance: 150,
                    line_linked: { opacity: 0.6 }
                },
                push: { particles_nb: 3 }
            }
        },

        retina_detect: true
    });

}

/* ================= 11. ACTIVE NAV LINK ================= */

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#nav-links a");

    function setActiveLink() {
        let current = "home"; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active-link");
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", setActiveLink);

    // Run once on load
    setActiveLink();

});
