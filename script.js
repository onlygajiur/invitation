/* =========================================================
   WEDDING INVITATION — SCRIPT.JS
========================================================= */


/* =========================================================
   1. PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);

});


/* =========================================================
   2. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    }
);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   3. GOLD PARTICLES
========================================================= */

const particleContainer =
    document.querySelector(".particles");

function createParticles() {

    if (!particleContainer) return;

    const screenWidth = window.innerWidth;

    let particleCount;

    if (screenWidth < 400) {
        particleCount = 20;
    } else if (screenWidth < 768) {
        particleCount = 30;
    } else {
        particleCount = 50;
    }

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        const size =
            1 + Math.random() * 3;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";

        particle.style.opacity =
            0.2 + Math.random() * 0.7;

        particleContainer.appendChild(particle);

    }

}

createParticles();


/* =========================================================
   4. FALLING FLOWER PETALS
========================================================= */

const petalsContainer =
    document.querySelector(".petals-container");

function createPetals() {

    if (!petalsContainer) return;

    const screenWidth = window.innerWidth;

    let petalCount;

    if (screenWidth < 400) {
        petalCount = 12;
    } else if (screenWidth < 768) {
        petalCount = 18;
    } else {
        petalCount = 30;
    }

    for (let i = 0; i < petalCount; i++) {

        const petal =
            document.createElement("span");

        petal.classList.add("petal");

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        petal.style.animationDelay =
            Math.random() * 12 + "s";

        const scale =
            0.5 + Math.random() * 1;

        petal.style.transform =
            `scale(${scale})`;

        petalsContainer.appendChild(petal);

    }

}

createPetals();


/* =========================================================
   5. RANDOM GOLDEN SPARKLES
========================================================= */

function createSparkle() {

    const sparkle =
        document.createElement("span");

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.width =
        Math.random() * 4 + 2 + "px";

    sparkle.style.height =
        sparkle.style.width;

    sparkle.style.borderRadius =
        "50%";

    sparkle.style.background =
        "#e7ce91";

    sparkle.style.boxShadow =
        "0 0 10px #e7ce91";

    sparkle.style.pointerEvents =
        "none";

    sparkle.style.zIndex = "19";

    sparkle.style.opacity = "0";

    sparkle.style.transition =
        "opacity 0.8s ease";

    document.body.appendChild(sparkle);


    requestAnimationFrame(() => {

        sparkle.style.opacity =
            "0.8";

    });


    setTimeout(() => {

        sparkle.style.opacity = "0";

    }, 700);


    setTimeout(() => {

        sparkle.remove();

    }, 1500);

}


/*
    A new sparkle appears occasionally.
*/

setInterval(() => {

    createSparkle();

}, 900);


/* =========================================================
   6. COUNTDOWN
========================================================= */

const weddingDate =
    new Date("October 17, 2026 00:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   7. SUBTLE SCROLL PARALLAX
========================================================= */

let ticking = false;


function updateParallax() {

    const scrollY =
        window.scrollY;

    const moon =
        document.querySelector(".moon");

    if (moon) {

        moon.style.transform =
            `translateY(${scrollY * 0.08}px)`;

    }


    const heroGlow =
        document.querySelector(".hero-glow");

    if (heroGlow) {

        heroGlow.style.transform =
            `translateY(${scrollY * 0.04}px)`;

    }


    ticking = false;

}


window.addEventListener(
    "scroll",
    () => {

        if (!ticking) {

            window.requestAnimationFrame(
                updateParallax
            );

            ticking = true;

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   8. MOUSE PARALLAX — DESKTOP ONLY
========================================================= */

const heroContent =
    document.querySelector(".hero-content");


if (
    heroContent &&
    window.matchMedia("(pointer: fine)").matches
) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5);

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5);


            heroContent.style.transform =
                `translate3d(
                    ${x * 8}px,
                    ${y * 8}px,
                    0
                )`;

        }
    );


    document.addEventListener(
        "mouseleave",
        () => {

            heroContent.style.transform =
                "translate3d(0,0,0)";

        }
    );

}


/* =========================================================
   9. FLOATING HEARTS
========================================================= */

function createHeart() {

    const heart =
        document.createElement("span");

    heart.textContent = "♡";

    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom =
        "-30px";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.color =
        "rgba(201,164,92,0.55)";

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex = "18";

    heart.style.transition =
        "transform 6s linear, opacity 6s linear";

    heart.style.opacity = "0";

    document.body.appendChild(heart);


    requestAnimationFrame(() => {

        heart.style.opacity = "0.7";

        heart.style.transform =
            `translate(
                ${(Math.random() - 0.5) * 150}px,
                -${window.innerHeight + 100}px
            ) rotate(${Math.random() * 180}deg)`;

    });


    setTimeout(() => {

        heart.remove();

    }, 6500);

}


/*
    Keep this subtle.
*/

setInterval(() => {

    createHeart();

}, 4500);


/* =========================================================
   10. SMOOTH LOCATION BUTTON
========================================================= */

const locationButtons =
    document.querySelectorAll(
        ".location-button"
    );


locationButtons.forEach((button) => {

    button.addEventListener(
        "click",
        (event) => {

            /*
                Replace this URL with
                your actual Google Maps link.
            */

            if (button.getAttribute("href") === "#") {

                event.preventDefault();

                alert(
                    "Google Maps location will be added here."
                );

            }

        }
    );

});


/* =========================================================
   11. CONTACT BUTTON
========================================================= */

const contactButtons =
    document.querySelectorAll(
        ".final-button"
    );


if (contactButtons.length > 1) {

    const contactButton =
        contactButtons[1];


    contactButton.addEventListener(
        "click",
        (event) => {

            if (
                contactButton.getAttribute("href")
                === "#"
            ) {

                event.preventDefault();

                alert(
                    "call: 98594 26868 | 78968 03833 | 70028 45240"
                );

            }

        }
    );

}


/* =========================================================
   12. PREVENT ANIMATION OVERLOAD ON LOW-END DEVICES
========================================================= */

const reduceAnimations =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (reduceAnimations.matches) {

    document
        .querySelectorAll(
            ".particles, .petals-container"
        )
        .forEach((element) => {

            element.style.display = "none";

        });

}


/* =========================================================
   13. PAGE VISIBILITY
   Pause heavy effects when tab is hidden
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            document.body.classList.add(
                "page-hidden"
            );

        } else {

            document.body.classList.remove(
                "page-hidden"
            );

        }

    }
);


/* =========================================================
   14. CONSOLE MESSAGE
========================================================= */

console.log(
    "%c💍 Wedding Invitation",
    "color:#c9a45c;font-size:20px;font-weight:bold;"
);

console.log(
    "%cMade with love ✨",
    "color:#7a263b;font-size:14px;"
);