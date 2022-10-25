import {store} from "./store";
import {API_URL} from "./const";

export const auth = (data) => {
  store.user.name = data.name
  store.user.category = data.category
  store.user.id = data.id
  store.user.avatar = data.avatar

  const headerAuth = document.querySelector('.header__auth');

  headerAuth.classList.add('auth');

  const categoryRus = store.category.find(
    item => item.title === store.user.category
  ).rus;

  headerAuth.innerHTML = `
    <img src="${API_URL}/${store.user.avatar}" alt="" class="auth__avatar">
    <p class="auth__name">${store.user.name}</p>
    <p class="auth__category">${categoryRus}</p>
    <button class="auth__btn-edit">Изменить услугу</button>
  `;
}

