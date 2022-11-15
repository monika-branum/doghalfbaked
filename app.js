import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async () => {
    const dogs = await getDogs();

    if (dogs.error) return;

    for (let dog of dogs.data) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
});
// fetch all dogs
// render and append all dog cards to the container
