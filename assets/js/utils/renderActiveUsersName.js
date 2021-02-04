'use strict';

const acriveUsers = document.querySelector('#acriveUsers');

function renderActiveUsersName() {

  // очистка всего родителя
  while (acriveUsers.firstChild) {
    acriveUsers.removeChild(acriveUsers.firstChild);
  }

  // новий рендер всех элементов
  for (const user of userIdName) {
    activeCardsId.forEach((elem) => {
      if (user.id === elem) {
        const span = createElement('span', { onClick: handleActiveUserName, attributes: [["data-id", user.id]] }, document.createTextNode(`${user.name} `));
        acriveUsers.append(span);
      }
    });
  }
  // activeCardsId.forEach((elem) => {
  //   acriveUsers.append(document.createTextNode(elem));
  // })


  // if(isAdd){
  //   acriveUsers.append(document.createTextNode(elem))
  // }else{
  //   acriveUsers.removeChild(elem)
  // }
}