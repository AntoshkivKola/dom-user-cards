'use strict';

const cardContainer = document.getElementById('root');
const activeCardsId = [];

/*
fetch('http://192.168.1.148:3000/users')

*/
const userIdName = []
fetch('./assets/js/data/users.json')
  .then((response) => response.json())
  .then((data) => {
    const cards = data.map((user) => {
      userIdName.push({id: user.id, name: user.firstName});
      return createUserCards(user)
    });
    cardContainer.append(...cards);
  })

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
    document.createTextNode(`${user.firstName} ${user.lastName}`.trim() || '')
  );

  const article = createElement(
    'article',
    { classNames: ['cardContainer'] },
    createImageWrapper(user),
    h3,
    p,
    createIconsWraprer(user),
  );

  return createElement('section', { classNames: ['cardWrapper'], onClick: handleCardHighlight, attributes: [["id", user.id]]}, article);
}
