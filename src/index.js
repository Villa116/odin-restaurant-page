import './style.css';
import createHomeTab from './home.js';
import createMenueTab from './menu.js';
import createContactTab from './contact.js';


// Function to build the page layout (Header + Nav + Dynamic Main Area)
const renderLayout = () => {
  const content = document.querySelector('#content');

  // Create Header / Nav Bar
  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.classList.add('nav-btn');
  homeBtn.id = 'home-btn';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.classList.add('nav-btn');
  menuBtn.id = 'menu-btn';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'contact';
  contactBtn.classList.add('nav-btn');
  contactBtn.id = 'contact-btn';

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  header.appendChild(nav);

  // Create Main Dynamic Content Container
  const mainContainer = document.createElement('main');
  mainContainer.id = 'main-content';

  // Append everything to #content
  content.appendChild(header);
  content.appendChild(mainContainer);

  // Load Home tab by default on initial page load
  mainContainer.appendChild(createHomeTab());

  // Helper function to switch tabs cleanly
  const switchTab = (tabContent) => {
    mainContainer.innerHTML = '';
    mainContainer.appendChild(tabContent);
  };

  // Event Listeners for buttons
  homeBtn.addEventListener('click', () => switchTab(createHomeTab()));
  menuBtn.addEventListener('click', () => switchTab(createMenueTab()));
  contactBtn.addEventListener('click', () => switchTab(createContactTab()));
};

// Run the layout builder on startup
renderLayout();