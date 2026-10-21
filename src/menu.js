const createMenuTab = () => {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Out-of-This-World Menue';

  const item1 = document.createElement('div');
  item1.classList.add('menu-item');
  const title1 = document.createElement('h3');
  title1.textContent = 'Zero-Gravity Pancakes';
  const desc1 = document.createElement('p');
  desc1.textContent = 'Fluffy buttermilk pancakes drizzled with shimmering galaxy syrup. They might just float off your plate!';
  item1.appendChild(title1);
  item1.appendChild(desc1);

  const item2 = document.createElement('div');
  item1.classList.add('menu-item');
  const title2 = document.createElement('h3');
  title1.textContent = 'Zero-Gravity Pancakes';
  const desc2 = document.createElement('p');
  desc1.textContent = 'A juicy beef patty topped with spicy plasma sauce, meteor-charred bun, and melted cosmic cheddar.';
  item1.appendChild(title2);
  item1.appendChild(desc2);
  
  const item3 = document.createElement('div');
  item1.classList.add('menu-item');
  const title3 = document.createElement('h3');
  title1.textContent = 'Zero-Gravity Pancakes';
  const desc3 = document.createElement('p');
  desc1.textContent = 'Swirling purple blackberry ice cream topped with edible star-dust sprinkles and an anti-gravity cherry.';
  item1.appendChild(title3);
  item1.appendChild(desc3);
  
  menuDiv.appendChild(headline);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);
  menuDiv.appendChild(item3);

  return menuDiv;
};

export default createMenuTab;