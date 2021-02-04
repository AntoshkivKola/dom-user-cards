'use strict';

const acriveUsers = document.querySelector('#acriveUsers');

function renderActiveUsersName() {
  
  // очистка всего родителя
  while (acriveUsers.firstChild) {
    acriveUsers.removeChild(acriveUsers.firstChild);
  }
  
  // новий рендер всех элементов
  for(const name of idName){
    activeCardsId.forEach((elem) => {
      if(name.id === elem){
        acriveUsers.append(document.createTextNode(`${name.name} `));
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