document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded");


    const ramens = [
        { id: 2, name: "Miso Ramen", restaurant: "Ramen House B", image: "https://i.pinimg.com/236x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg", rating: 9, comment: "Rich miso flavor, must try!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen Spot C", image: "https://i.pinimg.com/736x/02/13/b1/0213b1f7c6e2bd5b99d4b78e15c0fecf.jpg", rating: 10, comment: "Best creamy pork broth ever!" },
        { id: 4, name: "Mulo", restaurant: "Mulo Kitchen", image: "https://i.pinimg.com/474x/c0/05/f1/c005f12867549656070006bf650579a2.jpg", rating: 7, comment: "Tasty but a bit salty." },
        { id: 5, name: "Mayai", restaurant: "Egg Delight", image: "https://i.pinimg.com/236x/10/9c/d2/109cd288493a97b4232a0ee7565660ba.jpg", rating: 6, comment: "Unique eggy twist!" },
        { id: 7, name: "Meat", restaurant: "Meat Lovers Ramen", image: "https://i.pinimg.com/236x/b1/cc/46/b1cc4674823b189c71b2083da1f75a6e.jpg", rating: 9, comment: "Great balance of flavors." }
    ];


    function displayRamenDetails(ramen) {
        console.log("Displaying ramen:", ramen.name);
        document.getElementById("selected-image").src = ramen.image;
        document.getElementById("selected-restaurant").textContent = `Restaurant: ${ramen.restaurant}`;
        document.getElementById("selected-rating").textContent = `Rating: ${ramen.rating}`;
        document.getElementById("selected-comment").textContent = `Comment: ${ramen.comment}`;
    }


    function displayRamens() {
        const imagesDiv = document.getElementById("images");
        imagesDiv.innerHTML = ""; // Clear previous images

        ramens.forEach((ramen) => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.dataset.id = ramen.id;


            img.addEventListener("click", () => {
                console.log(`Clicked on: ${ramen.name}`);
                displayRamenDetails(ramen);
            });

            imagesDiv.appendChild(img);
        });
    }


    function addSubmitListener() {
        const form = document.getElementById("ramen-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newRamen = {
                id: ramens.length + 1,
                name: event.target.name.value,
                restaurant: event.target.restaurant.value,
                image: event.target.image.value,
                rating: event.target.rating.value,
                comment: event.target.comment.value
            };

            console.log("New ramen added:", newRamen);
            ramens.push(newRamen);
            const img = document.createElement("img");
            img.src = newRamen.image;
            img.alt = newRamen.name;
            img.dataset.id = newRamen.id;


            img.addEventListener("click", () => {
                console.log(`Clicked on: ${newRamen.name}`);
                displayRamenDetails(newRamen);
            });

            document.getElementById("images").appendChild(img);
            form.reset();
        });
    }


    displayRamens();
    addSubmitListener();

    if (ramens.length > 0) {
        displayRamenDetails(ramens[0]);
    }
});
