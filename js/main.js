// document.querySelector("#highlightHigh").addEventListener("mouseover", highlightHigh);
// document.querySelector("#highlightHigh").addEventListener("mouseout", highlightHighUnhighlight);
// document.querySelector("#dollarsignHigh").addEventListener("mouseover", highlightHigh);
// document.querySelector("#dollarsignHigh").addEventListener("mouseout", highlightHighUnhighlight);
// document.querySelector("#highlightMiddle").addEventListener("mouseover", highlightHigh);
// document.querySelector("#highlightMiddle").addEventListener("mouseout", highlightHighUnhighlight);
// document.querySelector("#dollarsignMiddle").addEventListener("mouseover", highlightHigh);
// document.querySelector("#dollarsignMiddle").addEventListener("mouseout", highlightHighUnhighlight);
// document.querySelector("#highlightLow").addEventListener("mouseover", highlightHigh);
// document.querySelector("#highlightLow").addEventListener("mouseout", highlightHighUnhighlight);
// document.querySelector("#dollarsignLow").addEventListener("mouseover", highlightHigh);
// document.querySelector("#dollarsignLow").addEventListener("mouseout", highlightHighUnhighlight);

// function highlightHigh() {
//   console.log("highlightHigh");
//   this.style.fill = "#fff";
// }

// function highlightHighUnhighlight() {
//   console.log("highlightHighUnhighlight");
//   this.style.fill = "#ed1c24";
// }
// Normalt vil man kunne bruge this.style.fill til at style farve, men i og med, jeg ikke vil have, 
// at dollarsign også ændrer farve, er jeg nødsaget til at specificere, hvilke elementer, der skal ændre farve.
// Jeg fandt en løsning ved at bruge target og changeFill. Der vil sikkert også være andre løsninger, som måske er bedre.

document.querySelector("#highlightHigh").addEventListener("mouseover", () => changeFill("#highlightHigh", "#fff"));
document.querySelector("#highlightHigh").addEventListener("mouseout", () => changeFill("#highlightHigh", "#ed1c24"));
document.querySelector("#highlightHigh").addEventListener("click", highInfo);
document.querySelector("#dollarsignHigh").addEventListener("mouseover", () => changeFill("#highlightHigh", "#fff"));
document.querySelector("#dollarsignHigh").addEventListener("mouseout", () => changeFill("#highlightHigh", "#ed1c24"));
document.querySelector("#dollarsignHigh").addEventListener("click", highInfo);

document.querySelector("#highlightMiddle").addEventListener("mouseover", () => changeFill("#highlightMiddle", "#fff"));
document.querySelector("#highlightMiddle").addEventListener("mouseout", () => changeFill("#highlightMiddle", "#ed1c24"));
document.querySelector("#highlightMiddle").addEventListener("click", middleInfo);
document.querySelector("#dollarsignMiddle").addEventListener("mouseover", () => changeFill("#highlightMiddle", "#fff"));
document.querySelector("#dollarsignMiddle").addEventListener("mouseout", () => changeFill("#highlightMiddle", "#ed1c24"));
document.querySelector("#dollarsignMiddle").addEventListener("click", middleInfo);

document.querySelector("#highlightLow").addEventListener("mouseover", () => changeFill("#highlightLow", "#fff"));
document.querySelector("#highlightLow").addEventListener("mouseout", () => changeFill("#highlightLow", "#ed1c24"));
document.querySelector("#highlightLow").addEventListener("click", lowInfo);
document.querySelector("#dollarsignLow").addEventListener("mouseover", () => changeFill("#highlightLow", "#fff"));
document.querySelector("#dollarsignLow").addEventListener("mouseout", () => changeFill("#highlightLow", "#ed1c24"));
document.querySelector("#dollarsignLow").addEventListener("click", lowInfo);

function changeFill(targetId, color) {
  document.querySelector(targetId).style.fill = color;
}

function highInfo() {
    console.log("highInfo");
  
    animateBoxes();
  
    document.querySelector(".info-text > h2").textContent = "$$$ Den eksklusive";
    document.querySelector(".info-text > article > p").textContent = "Til dig der lever studielivet på Rich Kid Energy. Du køber dine havregryn økologiske, din mælk er plantebaseret og din topping har været på en foodtrend siden 2021. Denne version er for dig, der vil forkæle dig selv – måske fordi du lige har scoret et fremragende studiejob, eller bare har brug for at føle dig lidt ekstra en mandag morgen.";
    document.querySelector("#efficiency").innerHTML = "<h3>Ingredienser</h3><ul>" +
      "<li>1 dl økologiske havregryn</li>" +
      "<li>2 dl mandelmælk (eller anden fancy plantebaseret variant). Eller brug 1dl mælk og 1dl kokosvand</li>" +
      "<li>1 spsk ahornsirup eller rå honning</li>" +
      "<li>1 spsk. chiafrø eller hørfrø</li>" +
      "<li>1 håndfuld friske bær (blåbær, hindbær eller jordbær - intet frost of course!)</li>" +
      "<li>1 spsk mandelsmør eller cashewsmør</li>" +
      "<li>En smule vaniljeekstrakt (du ved, den i den lille, dyre flaske)</li>" +
      "<li>Kakaonibs eller ristede kokosflager som topping</li>" +
    "</ul>";

    document.querySelector("#requirement").innerHTML = "<h3>Sådan gør du</h3><ol>" +
      "<li>Kog havregrynene sammen med mælken (eller kokosvandet) i en gryde.</li>" +
      "<li>Rør godt rundt og tilføj sirup/honning, chiafrø/hørfrø og vaniljeekstrakt.</li>" +
      "<li>Top med bær, nøddesmør og kakaonibs eller ristede kokosflager</li>" +
      "<li>Server - men glem selvfølgelig ikke billedet til Instagram. Du ved du vil.</li>" +
    "</ol>";
  }
  function middleInfo() {
    console.log("middleInfo");
  
    animateBoxes();
  
    document.querySelector(".info-text > h2").textContent = "$$ Den balancerede";
    document.querySelector(".info-text > article > p").textContent = "Til dig, der er klar til at skrue lidt op for kvaliteten, men stadig vil holde dig til en fornuftig pris. Du får en solid og velsmagende start på dagen, uden at behøve at brænde hele kontoen op. Mellemklasse, men stadig studentervenlig!";
    document.querySelector("#efficiency").innerHTML = "<h3>Ingredienser</h3><ul>" +
      "<li>1 dl havregryn</li>" +
      "<li>1 dl mælk (plantebaseret hvis du er til sådan noget)</li>" +
      "<li>1 dl vand (eller mere mælk for ekstra cremethed)</li>" +
      "<li>1 spsk. chiafrø eller hørfrø</li>" +
      "<li>1 håndfuld bær (blåbær, hindbær eller jordbær)</li>" +
      "<li>1 teskefuld honning</li>" +
    "</ul>";

    document.querySelector("#requirement").innerHTML = "<h3>Sådan gør du</h3><ol>" +
      "<li>Kog havregrynene sammen med mælk og vand i en gryde.</li>" +
      "<li>Når grøden er blevet cremet, rør chia-/hørfrøene i for ekstra fibre, smag og mæthed.</li>" +
      "<li>Top med bær og et dryp honning</li>" +
      "<li>Server (pro tip: smid et ekstra lag bær på toppen, så du ser ud som om du har styr på sundheden!)</li>" +
    "</ol>";
  }
  function lowInfo() {
    console.log("lowInfo");
  
    animateBoxes();
  
    document.querySelector(".info-text > h2").textContent = "$ Overlevelsesniveauet";
    document.querySelector(".info-text > article > p").textContent = "Til dig, der gerne vil overleve på et stramt budget – uden at gå på kompromis med din mæthed. Perfekt til den studerende, der bestemt ikke har råd til luksus, men stadig har brug for noget hurtigt og nemt, der giver energi til at komme igennem dagen. Minimalistisk, billigt og ligetil!";
    document.querySelector("#efficiency").innerHTML = "<h3>Ingredienser</h3><ul>" +
      "<li>1 dl havregryn</li>" +
      "<li>2 dl vand (eller mælk hvis du har råd)</li>" +
      "<li>Et nip salt</li>" +
      "<li>Evt. lidt sukker eller kanel, hvis du er fancy</li>" +
    "</ul>";

    document.querySelector("#requirement").innerHTML = "<h3>Sådan gør du</h3><ol>" +
      "<li>Kog vand (eller mælk) op i en gryde eller fyr det i mikroovnen i 2 minutter.</li>" +
      "<li>Rør rundt og tilføj lidt salt.</li>" +
      "<li>Server (pro tip: spis direkte fra gryden - så sparer du på opvasken og vandregningen)</li>" +
    "</ol>";
  }
  
  function animateBoxes() {
    document.querySelector("#efficiency").classList.remove("hide");
    document.querySelector("#efficiency").classList.add("fadeIn");
    document.querySelector("#requirement").classList.remove("hide");
    document.querySelector("#requirement").classList.add("fadeIn");
    document.querySelector("#requirement").addEventListener("animationend", cleanup);
  }
  
  function cleanup() {
    console.log("cleanup");
    document.querySelector("#requirement").removeEventListener("animationend", cleanup);
    document.querySelector("#efficiency").classList.remove("fadeIn");
    document.querySelector("#requirement").classList.remove("fadeIn");
  }