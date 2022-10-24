import {createElement} from "./createElement";
import {API_URL, directions} from "./const";
import {store} from "./store";

export const renderModal = (parent, data) => {
  parent.textContent = '';

  console.log(data);

  const body = createElement('div', {
    className: 'modal__body',
  }, parent);

  const container = createElement('div', {
    className: 'modal__container person',
  }, body);

  // service

  const service = createElement('div', {
    className: 'person__service service service_person',
  }, container);

  createElement('img', {
    src: `${API_URL}/${data.avatar}`,
    className: 'service__avatar',
    alt: `аватар ${data.name}`,
  }, service);

  const servicePresent = createElement('div', {
    className: 'service__present',
  }, service);

  createElement('h3', {
    className: 'service__title',
    textContent: store.category.find(item => item.title === data.category).rus,
  }, servicePresent);

  createElement('p', {
    className: 'service__name',
    textContent: `${data.name} ${data.surname[0]}.`,
  }, servicePresent);

  createElement('p', {
    className: 'service__price',
    textContent: `${directions[data.direction]} ${data.price} ₽`
  }, service);

  const serviceContacts = createElement('div', {
    className: 'service__contacts'
  }, service);

  createElement('a', {
    className: 'service__link service__link_phone',
    textContent: data.phone,
    href: `tel:${data.phone}`
  }, serviceContacts);

  createElement('a', {
    className: 'service__link service__link_email',
    textContent: data.email,
    href: `mailto:${data.email}`
  }, serviceContacts);

};































