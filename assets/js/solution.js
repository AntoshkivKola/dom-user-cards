'use strict';

// new URL('https://www.facebook.com/JasonStatham/');
// new Map()
//   .set('www.facebook.com', 'src_to_icon')
//   .set('www.facebook.com', 'src_to_icon')
//   .set('www.facebook.com', 'src_to_icon');

const SUPPORTED_SOCIA_NET = new Map();
SUPPORTED_SOCIA_NET.set('www.facebook.com', './assets/icons/facebook.svg');
SUPPORTED_SOCIA_NET.set('twitter.com', './assets/icons/instagram.svg');
SUPPORTED_SOCIA_NET.set('www.instagram.com', './assets/icons/twitter.svg');


const cardContainer = document.getElementById('root');

const cards = responseData.map((user) => createUserCards(user));
cardContainer.append(...cards);

function createUserCards(user) {

  const description = 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum  nibh, ut fermentum massa justo sit amet risus. Maecenas sed diameget risus varius blandit sit amet non magna. Nullam quis risuseget urna mollis ornare vel eu leo.';
  const p = createElement(
    'p',
    { classNames: ['cardDescription'] },
    document.createTextNode(description)
  );

  const h3 = createElement(
    'h3',
    { classNames: ['cardName'] },
    document.createTextNode(`${user.firstName} ${user.lastName}` || '')
  );

  const article = createElement(
    'article',
    { classNames: ['cardContainer'] },
    createImageWrapper(user),
    h3,
    p,
    createIconsWraprer(user, SUPPORTED_SOCIA_NET),
  );

  return createElement('section', { classNames: ['cardWrapper'] }, article);
}


function createIconsWraprer({ id, contacts }, SUPPORTED_SOCIA_NET) {

  const iconsWrapper = document.createElement('div');
  iconsWrapper.setAttribute('id', `icons${id}`);
  iconsWrapper.classList.add('iconsWrapper');

  for (const contact of [...contacts]) {
    const contactName = new URL(contact).hostname;

    if (contactName === 'www.facebook.com') {
      iconsWrapper.append(createIcon(contactName,SUPPORTED_SOCIA_NET.get(contactName), { className: 'icon' }));

    } else if (contactName === 'twitter.com') {
      iconsWrapper.append(createIcon(contactName,SUPPORTED_SOCIA_NET.get(contactName), { className: 'icon' }));

    } else if (contactName === 'www.instagram.com') {
      
      iconsWrapper.append(createIcon(contactName,SUPPORTED_SOCIA_NET.get(contactName), { className: 'icon' }));
    }
  }

  return iconsWrapper;
}

function createIcon(alt, src, { className }) {

  const icon = document.createElement('img');
  icon.setAttribute('alt', `${alt}`);
  icon.setAttribute('src', src);

  const iconLink = document.createElement('a');
  iconLink.classList.add(className);
  // iconLink.dataset.id = id;
  iconLink.append(icon)

  return iconLink;
}


function createImageWrapper(user) {
  const { firstName, lastName, id } = user;

  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('id', `wrapper${id}`);
  imageWrapper.classList.add('cardImageWrapper');
  imageWrapper.style.backgroundColor = stringToColour(firstName);

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(`${firstName.trim().charAt(0)}${lastName.trim().charAt(0)}` || ''));

  createImage(user, { className: 'cardImage' });

  imageWrapper.append(initials);
  return imageWrapper;
}

function createImage({ firstName, lastName, profilePicture, id }, { className }) {
  const img = document.createElement('img');
  img.classList.add(className);
  img.dataset.id = id;
  img.setAttribute('alt', `${firstName} ${lastName}`);
  img.setAttribute('src', profilePicture);
  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);
  return img;
}

/* 
  EVENT HANDLERS
*/

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}

/* 
  UTILS
*/

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

/* 

  LIB

*/
/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(type, { classNames, onClick }, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}