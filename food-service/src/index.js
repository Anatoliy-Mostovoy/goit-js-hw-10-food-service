import './styles.css';
import menu from './menu.json';
import menuTemplate from './menu.hbs'


const menuData = {
    menu: menu,
}

const menuHtml = menuTemplate(menuData);    

document.querySelector('.js-menu').innerHTML = menuHtml; 