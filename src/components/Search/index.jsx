import Home from "../Home";

export function Search(data) {
  const search = document.querySelector(".searchBar");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filterdProducts = data.filter(function (product) {
      if (product.attributes.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    console.log(filterdProducts);
    Home(filterdProducts);
  };
}
