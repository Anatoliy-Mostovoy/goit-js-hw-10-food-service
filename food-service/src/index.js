import './styles.css';
import menu from './menu.json';
import menuTemplate from './menu.hbs'


const menuData = {
    menu: menu,
}
const menuHtml = menuTemplate(menuData);    

document.querySelector('.js-menu').innerHTML = menuHtml; 


//todo делаю переключение тем

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const checkboxSwitcher = document.querySelector('#theme-switch-toggle') 
  const body = document.querySelector('body');
 
//   function switcherTheme(event){
//      if(!event.target.checked){
// lightTheme()
//      } darkTheme()
//   }

function switcherTheme(event){
    body.setAttribute('class', body.classList.contains(Theme.DARK)?Theme.LIGHT :Theme.DARK);
    // console.log(body.classList.contains(Theme.DARK))
    localStorage.setItem('theme', body.classList.value)
    // console.log(body.classList.value)
}

checkboxSwitcher.addEventListener('change', switcherTheme);

currentTheme()

function currentTheme(event){
    body.setAttribute('class', localStorage.getItem('theme')===null?Theme.LIGHT:localStorage.getItem('theme'));
    if(localStorage.getItem('theme')===Theme.DARK){checkboxSwitcher.checked = 'true'}
}


//   function lightTheme(event){
//     body.classList.add(Theme.LIGHT)
//     body.classList.remove(Theme.DARK)
//     localStorage.setItem('theme',Theme.DARK)
//     console.log('lightTheme')
    
// }

//   function darkTheme(event){
//       body.classList.add(Theme.DARK)
//       body.classList.remove(Theme.LIGHT)
//       localStorage.setItem('theme',Theme.DARK)
//       console.log('darkTheme')
//   }


  
