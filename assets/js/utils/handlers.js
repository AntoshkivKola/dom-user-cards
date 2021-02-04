
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

function handleCardHighlight({ currentTarget }) {
  currentTarget.classList.toggle('activeCard');
  

  if (currentTarget.classList.contains('activeCard')) {
    activeCardsId.push(Number(currentTarget.id));
    renderActiveUsersName();
  } else {
    activeCardsId.forEach((elem, i) => {
      if (elem === Number(currentTarget.id)) {
        activeCardsId.splice(i, 1);
        renderActiveUsersName();
      }
    });
    
  }
}

function handleActiveUserName({currentTarget:{dataset:{id}}}){
  console.log(Number(id));
  id = Number(id);
  document.getElementById(id).classList.remove('activeCard');
  activeCardsId.forEach((elem, i) => {
    if (elem === Number(id)) {
      activeCardsId.splice(i, 1);
      renderActiveUsersName();
    }
  });
}

