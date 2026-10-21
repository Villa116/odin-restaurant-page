// import { javascript } from "webpack";

const createMenuTab = () => {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Out-of-This-World Menue';

  // Helper function to create a menu item card with an image
  const createMenuItem = (titleText, descText, imgSrc, imgAlt) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    img.classList.add('menu-img');

    const textContainer = document.createElement('div');
    textContainer.classList.add('menu-text');

    const title = document.createElement('h3');
    title.textContent = titleText;

    const desc = document.createElement('p');
    desc.textContent = descText;

    textContainer.appendChild(title);
    textContainer.appendChild(desc);

    itemDiv.appendChild(img);
    itemDiv.appendChild(textContainer);

    return itemDiv;
  };

  // Item 1: Pancakes
  const item1 = createMenuItem(
    'Zero-Gravity Pancakes',
    'Fluffy buttermilk pancakes drizzled with shimmering galaxy syrup. They might just float off your plate!',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80',
    'Stack of fluffy pancakes'
  );

  // Item 2: Burger
  const item2 = createMenuItem(
    'The Supernova Burger',
    'A juicy beef patty topped with spicy plasma sauce, meteor-charred bun, and melted cosmic cheddar.',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    'Juicy gourmet burger'
  );

  // Item 3: Milkshake
  const item3 = createMenuItem(
    'Nebula Milkshake',
    'Swirling purple blackberry ice cream topped with edible star-dust sprinkles and an anti-gravity cherry.',
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80',
    'Rich creamy milkshake'
  );
  
  menuDiv.appendChild(headline);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);
  menuDiv.appendChild(item3);

  return menuDiv;
};

export default createMenuTab;