
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
    activeCardsId.push(Number(currentTarget.dataset.id));
    renderActiveUsersName();
  } else {
    activeCardsId.forEach((elem, i) => {
      if (elem === Number(currentTarget.dataset.id)) {
        activeCardsId.splice(i, 1);
        renderActiveUsersName();
      }
    });
    
  }

}

