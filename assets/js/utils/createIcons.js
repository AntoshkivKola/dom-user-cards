
function createIconsWraprer({ id, contacts }) {

  const iconsWrapper = document.createElement('div');
  iconsWrapper.setAttribute('id', `icons${id}`);
  iconsWrapper.classList.add('iconsWrapper');

  for (const contact of [...contacts]) {
    const { hostname: contactName } = new URL(contact);

    if (SUPPORTED_SOCIA_NET.has(contactName)) {
      iconsWrapper.append(createIcon(contactName, SUPPORTED_SOCIA_NET.get(contactName), { className: 'icon' }));
    }
  }

  return iconsWrapper;
}

function createIcon(alt, src, { className }) {

  const icon = document.createElement('img');
  icon.setAttribute('alt', alt);
  icon.setAttribute('src', src);

  const iconLink = document.createElement('a');
  iconLink.setAttribute('href', `http://${alt}`);
  iconLink.setAttribute('target', '_blank');
  iconLink.classList.add(className);

  iconLink.append(icon)

  return iconLink;
}
