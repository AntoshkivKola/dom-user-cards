
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
