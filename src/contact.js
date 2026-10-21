const createContactTab = () => {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Mission Control';

  const address = document.createElement('p');
  address.textContent = 'Coordinates: Sector 4, Orion Arm, Milky Way Galaxy';

  const phone = document.createElement('p');
  phone.textContent = 'subspace Frequency: 1-800-COSMIC-CAFE';

  const hours = document.createElement('p');
  hours.textContent = 'Captain on Duty: Commander Kalonzo Kalala';

  contactDiv.appendChild(headline);
  contactDiv.appendChild(address);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(hours);

  return contactDiv;
};

export default createContactTab;