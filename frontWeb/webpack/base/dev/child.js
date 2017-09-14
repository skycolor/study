const arr = [1 , 2 , 3 , 4, 5];
let appDom = document.getElementById("app");

function addChildren(){
	for(let i = 0 , item;item = arr[i++];){
		let textDom = document.createElement("p");
		textDom.textContent = item;
		app.appendChild(textDom);
	}
}

module.exports = addChildren;