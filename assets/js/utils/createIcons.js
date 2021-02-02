
function createIconsWraprer({ id, contacts }) {

  const iconsWrapper = document.createElement('div');
  iconsWrapper.setAttribute('id', `icons${id}`);
  iconsWrapper.classList.add('iconsWrapper');

  for (const contact of [...contacts]) {
    const { hostname: contactName } = new URL(contact);

    if (contactName === 'www.facebook.com') {
      iconsWrapper.append(createIcon(contactName, SUPPORTED_SOCIA_NET.get(contactName), { className: 'icon' }));

    } else if (contactName === 'twitter.com') {
      iconsWrapper.append(createIcon(contactName, SUPPORTED_SOCIA_NET.get(contactName), { className: 'icon' }));

    } else if (contactName === 'www.instagram.com') {

      iconsWrapper.append(createIcon(contactName, SUPPORTED_SOCIA_NET.get(contactName), { className: 'icon' }));
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
