const p = document.getElementById("p");
const pp = document.getElementById("pp");
let size = 40;
p.onclick = () => {
  size = size + 10;
  pp.style.fontSize = size + 'px';
  if (size > 80) {
    pp.style.textShadow = "0 0 20px #fff454";
  }
};

const cislo1 = document.getElementById("cislo1");
const cislo2 = document.getElementById("cislo2");
const enter = document.getElementById("enter");
const vysledek = document.getElementById("vysledek");
const vpenisech = document.getElementById("vpenisech");
const owo = document.getElementById("OwO");

enter.onclick = () => {
  const soucet = Number(cislo1.value || 0) + Number(cislo2.value || 0);
  vysledek.innerHTML = (cislo1.value || 0) + " a " + (cislo2.value || 0) + " je " + soucet;
  if (soucet < 6) owo.style.display = "none";
  if (soucet > 5) owo.style.display = "block";
  if (soucet === 0) {
    vpenisech.innerHTML = "Žádné penisy 😢";
    return;
  }

  let nazorne = "";
  let i = 0;
  while (i < Number(soucet)) {
    nazorne = nazorne + "╰⋃╯ ";
    i = i + 1;
  }
  vpenisech.innerHTML = "Nebo názorně v penisech: <br>" + nazorne;
};