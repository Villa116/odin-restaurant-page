import './style.css';
import createHomeTab from './home';

const content = document.querySelector('#content');
content.appendChild(createHomeTab());