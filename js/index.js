function createListItem(className, idName, text){
//Oret et nyt <li> element
const li = document.createElement("li");

//Tilføjer id-attributen
li.setAttribute("id", idName);

//Tilføjer class-attributten
li.setAttribute("class", className);

//opret en tekstnode
const textNode = document.createTextNode(text);


li.appendChild(textNode); //Tilføjer tekstNoden til <li>-Element 

return li;
}
console.log("Shoppinglist")
