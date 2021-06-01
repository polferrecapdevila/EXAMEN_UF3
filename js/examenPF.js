addEventListener('load', function (){
  fillPresidentsPF();
})

function changePresidentPF(){
  var valor = document.getElementById("president");
  var num = valor.options[valor.selectedIndex].value;
  var posicio = arPresidents[num].number;
  exercici3PF(posicio, num);
}

function exercici3PF(posicio, num){
  var site = document.getElementsByTagName("h3")[0];
  site.innerText = posicio;
  exercici4PF(posicio, num);
}

function exercici4PF(posicio, num){
  var site = document.getElementsByTagName("img")[0];
  site.src="img/" + posicio + ".jpeg";
  exercici5PF(posicio, num);
}

function exercici5PF(posicio, num){
  var site = document.getElementsByTagName("span");
  var name = arPresidents[num].name;
  var surname = arPresidents[num].surname;
  var all = name + " " + surname;
  var date = arPresidents[num].date;
  site[0].innerText = all;
  site[1].innerText = date;
  var title = document.getElementsByTagName("title")[0];
  title.innerText = all;
  exercici6PF(posicio, num);
}

function exercici6PF(posicio, num){
  var tipus = arPresidents[num].party;
  var figura = document.getElementsByTagName("figure")[0];
  if (tipus=="Republican") {
    figura.className = "Republican";
  }else if (tipus=="Democratic") {
    figura.classList = "Democratic";
  }
}
