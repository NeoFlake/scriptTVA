"use strict";

let startTable = new Array();
let finalTable = new Array();

function nomClient() {

  let client = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for( var i=0; i < 6; i++ )
      client += possible.charAt(Math.floor(Math.random() * possible.length));

  return client;
}

function Commande() {
  this.tva = 19.6;
  this.ht = Math.random() * 1000;
  this.client = nomClient();
  this.remise = Math.random() * 100;
}

for (let i=0; i <= 100; i++) {

  startTable.push(new Commande());

}

for (let i=0; i < startTable.length; i++){

  function messageSympa() {

    let message = "";
    let belleRemise = startTable[i].remise;

    if(belleRemise >= 0 && belleRemise <= 10) {

      message += "t'es niqué";
      return message;

    }

    else if (belleRemise >= 11 && belleRemise <= 30) {

      message += "c'est pour toi";
      return message;

    }

    else if (belleRemise >= 31 && belleRemise <= 60) {

      message += "ça fait plaisir, non?";
      return message;

    }

    else if (belleRemise >= 61 && belleRemise <= 100) {

      message += " t'as du bol, toi!"
      return message;

    }

  }

  function Resultat(){
    this.ttc = startTable[i].ht * (startTable[i].remise / 100) * (1 + (startTable[i].tva / 100));
    this.client = startTable[i].client;
    this.message = messageSympa();
  }

  finalTable.push(new Resultat());

}

const containerElt = document.createElement("div");

      containerElt.style.width = "80%";
      containerElt.style.margin = "0 auto";

      let codeRGBA = 0;

      function belleCouleur() {

        let tableauCouleur = new Array();

        for(let i=0; i<3; i++){

          let couleur = 0;

          couleur = Math.floor(Math.random() * 255);

          tableauCouleur.push(couleur);

        }

        codeRGBA = 'rgb( ' + tableauCouleur[0] + ', ' + tableauCouleur[1] + ', ' + tableauCouleur[2] +' )';

        return codeRGBA;

      }

      console.log(belleCouleur());

for (let i=0; i < 100; i++) {

  console.log(belleCouleur());

  let gentilClient = finalTable[i].client;
  let petitEscroc = Math.floor(finalTable[i].ttc);
  let petiteRemise = Math.floor(startTable[i].remise);
  let gentilMessage = finalTable[i].message;

  const partElt = document.createElement("div");

        partElt.style.width = "90%";
        partElt.style.minHeight = "80px";
        partElt.style.margin = "10px auto";
        partElt.style.padding = "5px";
        partElt.style.backgroundColor = belleCouleur();
        partElt.style.borderStyle = "dotted";
        partElt.style.borderWidth = "2px";
        partElt.style.borderColor = "green";
        partElt.style.borderRadius = "30px";

  const nomElt = document.createElement("h1");

        nomElt.innerHTML = "Cher " + gentilClient + " on t'a bien arnaqué!";
        nomElt.style.width = "75%";
        nomElt.style.margin = "2px auto 0";
        nomElt.style.textAlign = "center";
        nomElt.style.fontSize = "1.3em";

  const prixElt = document.createElement("div");

        prixElt.innerHTML = "Nous t'avons pris " + petitEscroc + " €; avoue, t'as le seum hein?";
        prixElt.style.width = "75%";
        prixElt.style.margin = "5px auto 0";
        prixElt.style.textAlign = "center";
        prixElt.style.fontSize = "1em";

  const conclusionElt = document.createElement("div");

        conclusionElt.innerHTML = "Estime toi heureux; tu as profité d'une remise de " + petiteRemise + " %; " + gentilMessage;
        conclusionElt.style.width = "90%";
        conclusionElt.style.margin = "8px auto 0";
        conclusionElt.style.textAlign = "center";
        conclusionElt.style.fontSize = "0.8em";

        partElt.appendChild(nomElt);
        partElt.appendChild(prixElt);
        partElt.appendChild(conclusionElt);

        containerElt.appendChild(partElt);

}

document.body.appendChild(containerElt);
