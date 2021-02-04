/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(type, { classNames, onClick, attributes }, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;

 
  if (attributes) {
    for (const attr of attributes) {
      elem.setAttribute(attr[0], attr[1]);

    }
  }


  elem.append(...children);
  return elem;
}