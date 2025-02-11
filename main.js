import { curiousFacts } from "./curiosities.js";

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const inner = card.querySelector('.card-inner');
        const back = card.querySelector('.card-back p');


        if (!inner.classList.contains('is-flipped')) {
            const randomFact = curiousFacts[Math.floor(Math.random() * curiousFacts.length)];
            if (back) {
                back.textContent = randomFact;
            } else {
                console.error("Back <p> element not found!");
            }
        }

        inner.classList.toggle('is-flipped');
    });
});
