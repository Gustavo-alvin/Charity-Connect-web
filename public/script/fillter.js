
document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.querySelector('#filter');
    const interestsSelect = document.querySelector('#interestsSelect');
    const interestsSelectCity = document.querySelector('#interestsSelect-city');

    const cards = document.querySelectorAll('.items');

    filterInput.addEventListener('input', filterCards);
    interestsSelect.addEventListener('change', filterCards);
    interestsSelectCity.addEventListener('change', filterCards);

    function filterCards() {
        const filterText = filterInput.value.toLowerCase();
        const selectedInterest = interestsSelect.value.toLowerCase();
        const selectedCity = interestsSelectCity.value.toLowerCase();

        for (let card of cards) {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const interests = card.dataset.interests.toLowerCase();
            const city = card.dataset.city.toLowerCase();

            const titleMatches = title.includes(filterText);
            const interestsMatch = interests.includes(selectedInterest) || selectedInterest === '';
            const cityMatch = city === selectedCity || selectedCity === ''; // Verificar se a cidade do cartão é igual à cidade selecionada

            if (titleMatches && interestsMatch && cityMatch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        }
    }
});
