/*
Project name: My Travel List
Developer: Pedro Santiago
Term Number: 1209
*/


//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
	function $(x){
		var text = document.getElementById(x);
		return theElement;
	}
})

//Store input to local storage.
function storeItems() {
	var itemName = document.getElementById("itemName").value;
	var quantity  = document.getElementById("quantity").value;
	var roadTrip  = document.getElementById("roadTrip").value;
	var planeTrip  = document.getElementById("planeTrip").value;
	var notes    = document.getElementById("add_notes").value;
	localStorage.setItem("itemName", itemName);
	localStorage.setItem("quantity", quantity);
	localStorage.setItem("roadTrip", roadTrip);
	localStorage.setItem("planeTrip", planeTrip);
	localStorage.setItem("add_notes", add_notes);

}

//Retrieves list from local storage.
function getItems() {
	if (localStorage.getItem(itemName)) {
	var itemName = localStorage.getItem("itemNmae");
	var quantity = localStorage.getItem("quantity");
	var roadTrip = localStorage.getItem("roadTrip");
	var planeTrip = localStorage.getItem("planeTrip");
	var add_notes = localStorage.getItem("add_notes");
		var itemlist = document.getElementById("itemlist");
		
		while (itemlist.firstChild) 
			itemList.removeChild(itemlist.firstChild);
		var newUl = document.createElement("ul");
		var newLis = document.createElement("li");
		newUl.appendChild(newLis);
		var liTxt = document.createTextNode(itemName + " (" + quantity + "qty) ");
		newLis.appendChild(liTxt);
		itemList.appendChild(newUl);
	} else {
		var itemName = "Enter item name";
	}
	document.getElementById("itemName").value = itemName;
	document.getElementById("quantity").value = quantity;
	document.getElementById("roadTrip").value = roadTrip;
	document.getElementById("planeTrip").value = planeTrip;
	document.getElementById("add_notes").value = add_notes;
}

	

