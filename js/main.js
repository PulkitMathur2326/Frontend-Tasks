const cities = [
  {
    name: "Delhi",
    description: "Click to explore detailed travel plans for Delhi!",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi1-attr-hero?qlt=82&ts=1742170492880",
    buttonStyle: "primary"
  },
  {
    name: "Ahmedabad",
    description: "Click to explore detailed travel plans for Ahmedabad!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yI4eyH8TrZGPxAXvtG-OySSKSiUTi4JnTQ&s",
    buttonStyle: "secondary"
  },
  {
    name: "Bangalore",
    description: "Click to explore detailed travel plans for Bangalore!",
    image: "https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg?sharp=10&vib=20&w=1200&w=600&h=400",
    buttonStyle: "accent"
  },
  {
    name: "Hyderabad",
    description: "Click to explore detailed travel plans for Hyderabad!",
    image: "https://media.hitex.co.in/posts/2022/charminar-the-arc-de-triomphe-of-the-east.jpg?1658579435",
    buttonStyle: "primary"
  },
  {
    name: "Amritsar",
    description: "Click to explore detailed travel plans for Amritsar!",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/1200px-The_Golden_Temple_of_Amrithsar_7.jpg",
    buttonStyle: "secondary"
  },
  {
    name: "Agra",
    description: "Click to explore detailed travel plans for Agra!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTla3YEp5s70-XKTm_J6d_m0n6Be9f_QaOh6A&s",
    buttonStyle: "accent"
  }
]

const grid = document.querySelector(".card-grid");

cities.forEach(city => {
  const card = document.createElement("div");
  card.className = "card-grid__item";
  card.innerHTML = `
    <div class="card-grid__image-wrapper">
      <img src="${city.image}" alt="${city.name}" loading="lazy">
    </div>
    <div class="card-grid__content">
      <h3 class="card-grid__title">${city.name}</h3>
      <p class="card-grid__description">${city.description}</p>
      <a href="#" class="card-grid__button card-grid__button--${city.buttonStyle}">Explore</a>
    </div>
  `;
  grid.appendChild(card);
});
