document.addEventListener("DOMContentLoaded", function () {

    const headings = document.querySelectorAll(".side-heading");
    const startButton = document.getElementById("startButton");

    let currentIndex = 0;

    document.body.style.overflow = "hidden";

    const headingTimer = setInterval(function () {

        headings[currentIndex].classList.remove("active");

        currentIndex++;

        if (currentIndex < headings.length) {

            headings[currentIndex].classList.add("active");

        } else {

            clearInterval(headingTimer);

            startButton.style.display = "inline-block";
        }

    }, 1000);


    window.openPortfolio = function () {

        document.getElementById("welcomeScreen").style.display = "none";

        document.getElementById("portfolioContent").style.display = "block";

        document.body.style.overflow = "auto";

        window.scrollTo(0, 0);
    };

});
