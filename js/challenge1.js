const variable = document.querySelector("form");

window.addEventListener("load", function(){
    console.log("h1 style loaded in")
		this.document.querySelector("h1").classList.add("heading");
})

window.addEventListener("dblclick", function(){
    console.log("double click!!")
    const date = Date();
    alert(date);
})

// window.addEventListener("click", function(){
//     console.log("")
// 		this.document.querySelector("h1").classList.add("heading");
// })