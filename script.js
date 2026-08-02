// Open the story
function startJourney() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("story").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHearts();
}

// Reveal sections while scrolling
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));


// ❤️ Floating hearts

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("span");

        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (15 + Math.random() * 30) + "px";

        heart.style.animationDuration = (8 + Math.random() * 6) + "s";

        document.querySelector(".hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 14000);

    }, 500);

}


// ❤️ Relationship Countdown
// Change the year if needed.

const relationshipDate = new Date("June 29, 2026 00:00:00");

function updateCountdown() {

    const now = new Date();

    const difference = now - relationshipDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);


// ❤️ Heartbeat title

setInterval(() => {

    const title = document.querySelector(".hero h1");

    title.style.transform = "scale(1.05)";

    setTimeout(() => {

        title.style.transform = "scale(1)";

    }, 400);

}, 1200);


// ✨ Sparkle effect

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.top = Math.random() * window.innerHeight + "px";

    sparkle.style.fontSize = (10 + Math.random() * 15) + "px";

    sparkle.style.opacity = "0.8";

    sparkle.style.pointerEvents = "none";

    sparkle.style.transition = "2s";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.opacity = "0";

        sparkle.style.transform = "translateY(-30px)";

    }, 50);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}, 800);
