let button = document.querySelector("#addToCard");
let quantity = document.querySelector("#qt");
let name = document.querySelector(".commande_panier");
let price = document.querySelector("#price");

////////////////////////////////////////////////////////////////////


// Récupération au début de la page du localStorage "LSproduct"
let LSProducts = JSON.parse(localStorage.getItem("LSproducts"));

let allProducts;

if (LSProducts) {
      // Alors products prend la valeur du localStorage
  allProducts = LSProducts;
  // Une fois que products à pris la valeur du LS on peut afficher les produits
  showProduct();
} else {
    // Si il y'a aucun LS on part d'un tableau vide
    allProducts = [];
  }

  function addProduct() {
    button.addEventListener("click",() => {
        alert("hello");
        let product = {
            quantity: quantity.value,
            name: name.value,
            price: price.value,
        };
    })

    allProducts.push(product);
      // On enregistre le tableau products dans le localStorage
      localStorage.setItem("LSproducts", JSON.stringify(allProducts));
  }

  function showProduct() {
    let content = "";

  }

  showProduct();
  addProduct();