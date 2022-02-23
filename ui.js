
var toDOs = [];

var displayBox= document.createElement("div");
displayBox.className = "display-Area";

document.getElementsByTagName("section")[0].appendChild(displayBox);



// render DOM

function rendertoDOS(){


  displayBox.innerHTML = null;
for(let j = 0; j < toDOs.length; j++ ) {   
  var box = document.createElement("div");
  box.className = "entry";
  displayBox.appendChild(box);
  box.innerHTML = ` <input type="checkbox" class="round-checkbox" /> <p class = "value"> ${toDOs[j]}</p>
  <span class="button"><i class="fa fa-edit" onclick = "EditTodos()" ></i>
  <i class="fa fa-trash-o" id = ${j} onclick = "delElements(this)"></i>
</span>`;
}
};

// add array elements

function addTodos(){
let x = document.getElementById("text").value
toDOs.push(x)
document.getElementById("text").value = "";

rendertoDOS();

}



function EditTodos(){

  const para = document.querySelector(".value");
 const input = document.createElement("input") ;
  input.className = "editTxt";
  input.type = "text";
  input.value = para.textContent;
  document.querySelector(".entry").appendChild(input);
  document.querySelector(".value").innerHTML = "";
  document.querySelector(".button").remove();
  var btn =  document.createElement("button");
  btn.className = "save";
  btn.innerHTML = "Save";
  document.querySelector(".entry").appendChild(btn);
  var btn1 = document.createElement("button");
  btn1.className = "delete";
  btn1.innerHTML = "Delete"
  document.querySelector(".entry").appendChild(btn1);

  btn.onclick = function(){

  
      
      var changedValue = document.createElement("p");
      changedValue.textContent = input.value
    input.remove();
    btn.remove();
     btn1.remove();
      var z =  document.querySelector(".button")
    
      document.querySelector(".entry").appendChild(changedValue); 
      
    };

    btn1.onclick = function(){
      document.querySelector(".entry").innerHTML = null;
    }
     
  
};

 delete elements

function  delElements(element){
toDOs.splice(element.id,1);

rendertoDOS()
}

 





