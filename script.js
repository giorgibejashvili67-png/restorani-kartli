document.addEventListener("DOMContentLoaded", () => {

    /* BOOKING FORM */
    const form = document.getElementById("booking-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("ჯავშანი წარმატებით გაიგზავნა!");
            form.reset();
        });
    }

    /* MOBILE MENU */
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("main-nav");

    if (toggle && nav) {

        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            nav.classList.toggle("active");
        });

        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });

        document.addEventListener("click", (e) => {
            if (!nav.contains(e.target) && !toggle.contains(e.target)) {
                nav.classList.remove("active");
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                nav.classList.remove("active");
            }
        });
    }

});