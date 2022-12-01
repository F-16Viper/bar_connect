//récupération des données pour les mettre dans le panier
//partie back end


//récuperer les éléments
let tbody = document.querySelector(".tbody");

console.log("bonjour");

// récupère le localStorage au chargement de la page
let LSProducts = JSON.parse(localStorage.getItem("array"));
// On créer une variable à vide
let products;
// Si un localStorage existe
if (LSProducts) {
	// Alors products prend la valeur du localStorage
	products = LSProducts;
	// Une fois que products à pris la valeur du LS on peut afficher les produits
	showProduct();
  } else {
	// Si il y'a aucun LS on part d'un tableau vide
	products = [];
}


function showProduct () {
	let content = "";

	console.log(tbody);

	products.forEach((element, index) => {
		content += `<tr><td>${element.prix}</td> <td> <input type="number" value="${element.quantity}</td>
		  <td> <button class="stock-action edit"><span class="material-icons">edit</span></button>
		  <button class="stock-action delete"><span class="material-icons">delete</span></button></td></tr>`;
	});
	
	tbody.innerHTML = content;
	deleteProduct();
}

// Partie supprimer products
function deleteProduct() {
	// On récupère tout les boutons avec la classe .delete  EXPECTED RESUL : [nodeListe.deleteButton, nodeListe.deleteButton, nodeListe.deleteButton ]
	let buttons = document.querySelectorAll(".delete");
  
	// Pour chaque bouton présent dans le tableau buttons:
	buttons.forEach((element, index) => {
	  // On déclenche un addEventListener qui au click :
	  element.addEventListener("click", () => {
		// me demande si je veut bien supprimer mon produit
		if (
		  confirm(
			"Voulez vraiment supprimer " + products[index].productName + " ? "
		  )
		) {
		  //On supprime dans le tableau products l'index sur le quel on vient de cliquer et on le supprime une fois
		  products.splice(index, 1);
		  // On sauvegarde le localStorage
		  localStorage.setItem("LSproducts", JSON.stringify(products));
		  // On affiche les produits
		  showProduct();
		}
	  });
	});
}


showProduct();
