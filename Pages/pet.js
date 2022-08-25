let id = location.search.split('=')[1];
pets.forEach((el) => {
    let pet = document.querySelector(".pet-info")
    if(el.id == id){
        let img = document.querySelector(".pet-image");
        img.setAttribute("src", el.img);
        let name = document.createElement("h1");
        name.innerText = el.name;
        pet.appendChild(name);
        let breed = document.createElement("p");
        breed.innerText = `Ցեղատեսակ - ${el.breed}`;
        pet.appendChild(breed);
        let city = document.createElement("p");
        city.innerText = `Գտնվելու վայր - ${el.city}`;
        pet.appendChild(city);
        let age = document.createElement("p");
        age.innerText = `Տարիք - ${el.age}`;
        pet.appendChild(age);
        let health = document.createElement("p");
        health.innerText = `Առողջական վիճակ - ${el.health}`;
        pet.appendChild(health);
    }
});