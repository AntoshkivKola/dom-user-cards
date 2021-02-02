'use strict';

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
    createIconsWraprer(user),
  );

  return createElement('section', { classNames: ['cardWrapper'], onClick: handleCardHighlight }, article);
}
