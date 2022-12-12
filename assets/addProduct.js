let quantity = document.querySelector(".itemQuantity");
let buttonConfirm = document.querySelector("#addToCard");
let prix = document.querySelector("#price");
let products;
// Fonction Ajouter produit
function addProduct () {

	buttonConfirm.addEventListener("click", () => {
		alert("btn");
        
		let product;
		product = {
			quantity: quantity.value,
			prix : prix.value,
		}
		console.log(product); 
		products.push(product);
	
	});
}

addProduct();