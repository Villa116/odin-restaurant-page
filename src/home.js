const createHomeTab = () => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-content');

  // Headline
  const headline = document.createElement('h1');
  headline.textContent = 'Fuel for the Final Frontier';

  // Hero Image (Neon diner aesthetic)
  const heroImage = document.createElement('img');
  heroImage.src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80';
  heroImage.alt = 'Cosmic Cafe interior glowing with neon lights';
  heroImage.classList.add('hero-image');

  // Hero description container / card
  const card = document.createElement('div');
  card.classList.add('hero-card');

  const description1 = document.createElement('p');
  description1.textContent = 'Welcome to The Cosmic Cafe! Step into our retro-futuristic space diner where the milkshakes are stellar and the burgers are completely out of this world.';

  const description2 = document.createElement('p');
  description1.textContent = 'Established in 1955, serving travelers across the Milky Way and beyond. Grab a booth, watch the stars roll by, and enjoy a taste of home—no matter how many light-years away you are.';

  card.appendChild(description1);
  card.appendChild(description2);

  // Call to action / hours note
  const hoursNote = document.createElement('h3');
  hoursNote.textContent = 'Hours: Earth Standard Time (Open 24/7 across all solar systems)';

  homeDiv.appendChild(headline);
  homeDiv.appendChild(heroImage);
  homeDiv.appendChild(card);
  homeDiv.appendChild(hoursNote);

  return homeDiv;
};

export default createHomeTab;