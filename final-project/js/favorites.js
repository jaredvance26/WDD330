export const addFavorite = (button, zip, favorites) => {
  button.classList.toggle("liked");

  if (button.classList.contains("liked")) {
    favorites.push(`${zip} - ${document.querySelector("h2.city").textContent}`);
  } else {
    favorites = favorites.filter((favorite) => {
      return favorite.slice(0, 5) !== zip.toString();
    });
  }
  return favorites;
};

export const removeFavorite = (favorites, favorite) => {
  return favorites.filter((fav) => {
    return fav.slice(0, 5) !== favorite;
  });
};
