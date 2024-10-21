// Funktion för att hämta och visa ett kort
function drawCard() {
    // URL för att dra ett kort
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

    // Skicka API-förfrågan
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // Hämta kortets bild-URL från API-datat
            const cardImageUrl = data.cards[0].image;

            // Hitta div där bilden ska visas
            const cardContainer = document.querySelector('#cardContainer');

            // Töm div-en för att nollställa tidigare kort
            cardContainer.innerHTML = "";

            // Skapa ett nytt img-element
            const imgElement = document.createElement('img');

            // Sätt src-attributet till kortets bild-URL
            imgElement.setAttribute('src', cardImageUrl);

            // Sätt alt-attribut för tillgänglighet (kortets värde och färg)
            imgElement.setAttribute('alt', `${data.cards[0].value} of ${data.cards[0].suit}`);

            // Lägg till img-elementet i div-en
            cardContainer.appendChild(imgElement);
        })
        .catch(err => {
            console.error("Error fetching card:", err);
        });
}

// Lägg till eventListener på knappen
document.querySelector('#drawButton').addEventListener('click', drawCard);
