// Подключение функционала 
import { isMobile, removeClasses } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Обрабатываем клики по странице
document.addEventListener('click', function (e) {
   const targetElement = e.target;

   // Показываем строку поиска
   if (targetElement.classList.contains('search-form__toggle') || targetElement.closest('.header__search')) {
      targetElement.closest('.header__container').classList.add('_show-search');
   } else {
      document.querySelector('.header__container').classList.remove('_show-search');
   }

   // Показываем выпадающее меню при клике на стрелку
   if (window.innerWidth > 767.98) {
      if (targetElement.classList.contains('menu__arrow')) {
         targetElement.closest('.menu-item').classList.toggle('_hover');
      }
      if (!targetElement.closest('.menu-item') && document.querySelectorAll('.menu-item._hover').length > 0) {
         removeClasses(document.querySelectorAll('.menu-item._hover'), "_hover");
      }
   }

   if (targetElement.classList.contains('password__button')) {
      targetElement.closest('.password__input').classList.toggle('_show');

      if (targetElement.closest('.password__input').classList.contains('_show')) {
         document.querySelector('.password__input .form__input').type = 'text';
      } else {
         document.querySelector('.password__input .form__input').type = 'password';
      }
   }
})