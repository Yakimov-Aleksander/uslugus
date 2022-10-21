import {avatarController} from "./avatarController";
import {postData} from "./postData"
import {API_URL} from "./const"
import {createCard} from "./createCard"


export const signInController = () => {

};

export const signUpController = (callback) => {
  const form = document.querySelector('.form__sign-up');

  const crp = avatarController({
    inputFile: '.avatar__input',
    uploadResult: '.avatar__result',
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (form.password[0].value !== form.password[1].value) {
      console.log('Пароли не совпадают'); // todo обработка ошибки
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.avatar = await crp.result({
      type: 'base64',
      size: 'viewport',
    });

  //const dataResponse = await postData(`${API_URL}/api/service/signup`, data);

    // if(dataResponse.errors) {
    //   console.log(dataResponse.errors); // todo обработка ошибки
    //   return;
    // }

    const servicesList = document.querySelector('.services__list');
    //servicesList.append(createCard(dataResponse));

    form.reset();
    crp.hideAvatar();
    callback(e);
  });

};
