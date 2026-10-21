const createContactTab = () => {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Mission Control';

  // contact Image
  const contactImage = document.createElement('img');
  contactImage.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80';
  contactImage.alt = 'Deep space view of a galaxy';
  contactImage.classList.add('contact-image');

  const card = document.createElement('div');
  card.classList.add('contact-card');

  const address = document.createElement('p');
  address.innerHTML = '<strong>Coordinates:</strong> Sector 4, Orion Arm, Milky Way Galaxy';

  const phone = document.createElement('p');
  phone.innerHTML = '<strong>subspace Frequency:</strong> 1-800-COSMIC-CAFE';

  const commander = document.createElement('p');
  commander.innerHTML = '<strong>Captain on Duty:</strong> Commander Kalonzo Kalala';

  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(commander);

  contactDiv.appendChild(headline);
  contactDiv.appendChild(contactImage);
  contactDiv.appendChild(card);

  return contactDiv;
};

export default createContactTab;