document.addEventListener("DOMContentLoaded", function () {

    /* ROLE AUTO SWITCH */
    const roles = [
        "Full Stack Java Developer",
        "SQL Developer",
        "Web Developer"
    ];

    const roleText = document.getElementById("roleText");
    let index = 0;

    function changeRole() {
        roleText.textContent = roles[index];
        index = (index + 1) % roles.length;
    }

    roleText.textContent = roles[0];
    setInterval(changeRole, 3000);

    /* SKILLS */
    const skills = [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot & Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "DevSecOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { name: "AWS Basics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }

    ];

    const skillsContainer = document.getElementById("skillsContainer");

    skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="col-6 col-md-3">
                <div class="skill-card text-center">
                    <img src="${skill.icon}">
                    <h6>${skill.name}</h6>
                </div>
            </div>
        `;
    });

    /* SLIDER */
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    let current = 0;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    }

    next.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prev.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 4000);

});

const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

// Show top button when scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Scroll to top
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Scroll to bottom
scrollBottomBtn.addEventListener("click", function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#4ade80" },
    size: { value: 3 },
    move: { speed: 2 }
  }
});
