export const addFavorite = (button, zip, favorites) => {
  button.classList.toggle("liked");

  if (button.classList.contains("liked")) {
    favorites.push(zip);
  } else {
    favorites = favorites.filter((favorite) => {
      return favorite !== zip.toString();
    });
    console.log(favorites);
  }
  return favorites;
};

export const removeFavorite = (favorites, favorite) => {
  return favorites.filter((fav) => {
    return fav !== favorite;
  });
};
