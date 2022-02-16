function iesniegtAtbildi(){
  if (document.getElementById("atbilde1").checked==true){
    alert("Atbilde iesniegta! Paldies, ka piedalījies!")
  }
  else if (document.getElementById("atbilde2").checked==true){
    alert("Atbilde iesniegta! Paldies, ka piedalījies!")
  }
  else if (document.getElementById("atbilde3").checked==true){
    document.getElementById("atsauksme").style.visibility = "visible";
    document.getElementById("atsauksmesPoga").style.visibility = "visible";
  }
}

function iesniegtAtsauksmi(){
  if (document.getElementById("atsauksme").value==""){
    alert("Atsauksme nav norādīta!");
  }
  else {
    alert("Paldies! Novērtējam tavu viedokli!");
  }
}