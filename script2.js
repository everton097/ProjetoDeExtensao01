var contador = 1;
var contador2 = 1;
var posiocaoLeftT1 = [0, 9, 9, 9, 0, 0];
var posiocaoTopT1 = [11, 11, 5.5, 0, 0, 5.5];

const jogador1 = document.querySelector(".jogador1");
const jogador2 = document.querySelector(".jogador2");
const jogador3 = document.querySelector(".jogador3");
const jogador4 = document.querySelector(".jogador4");
const jogador5 = document.querySelector(".jogador5");
const jogador6 = document.querySelector(".jogador6");

const jogador1t2 = document.querySelector(".jogador1t2");
const jogador2t2 = document.querySelector(".jogador2t2");
const jogador3t2 = document.querySelector(".jogador3t2");
const jogador4t2 = document.querySelector(".jogador4t2");
const jogador5t2 = document.querySelector(".jogador5t2");
const jogador6t2 = document.querySelector(".jogador6t2");

jogador1.style.left = `${posiocaoLeftT1[0]}vw`;
jogador1.style.top = `${posiocaoTopT1[0]}vw`;

jogador2.style.left = `${posiocaoLeftT1[1]}vw`;
jogador2.style.top = `${posiocaoTopT1[1]}vw`;

jogador3.style.left = `${posiocaoLeftT1[2]}vw`;
jogador3.style.top = `${posiocaoTopT1[2]}vw`;

jogador4.style.left = `${posiocaoLeftT1[3]}vw`;
jogador4.style.top = `${posiocaoTopT1[3]}vw`;

jogador5.style.left = `${posiocaoLeftT1[4]}vw`;
jogador5.style.top = `${posiocaoTopT1[4]}vw`;

jogador6.style.left = `${posiocaoLeftT1[5]}vw`;
jogador6.style.top = `${posiocaoTopT1[5]}vw`;

var posiocaoLeftT2 = [11, 2, 2, 2, 11, 11];
var posiocaoTopT2 = [0, 0, 5.5, 11, 11, 5.5];

jogador1t2.style.left = `${posiocaoLeftT2[0]}vw`;
jogador1t2.style.top = `${posiocaoTopT2[0]}vw`;

jogador2t2.style.left = `${posiocaoLeftT2[1]}vw`;
jogador2t2.style.top = `${posiocaoTopT2[1]}vw`;

jogador3t2.style.left = `${posiocaoLeftT2[2]}vw`;
jogador3t2.style.top = `${posiocaoTopT2[2]}vw`;

jogador4t2.style.left = `${posiocaoLeftT2[3]}vw`;
jogador4t2.style.top = `${posiocaoTopT2[3]}vw`;

jogador5t2.style.left = `${posiocaoLeftT2[4]}vw`;
jogador5t2.style.top = `${posiocaoTopT2[4]}vw`;

jogador6t2.style.left = `${posiocaoLeftT2[5]}vw`;
jogador6t2.style.top = `${posiocaoTopT2[5]}vw`;

const updateTime01 = () => {
  if (controlet1 == "semponto") {
    switch (contador) {
      case 1:
        jogador1.style.left = `${posiocaoLeftT1[5]}vw`;
        jogador1.style.top = `${posiocaoTopT1[5]}vw`;
        jogador2.style.left = `${posiocaoLeftT1[0]}vw`;
        jogador2.style.top = `${posiocaoTopT1[0]}vw`;
        jogador3.style.left = `${posiocaoLeftT1[1]}vw`;
        jogador3.style.top = `${posiocaoTopT1[1]}vw`;
        jogador4.style.left = `${posiocaoLeftT1[2]}vw`;
        jogador4.style.top = `${posiocaoTopT1[2]}vw`;
        jogador5.style.left = `${posiocaoLeftT1[3]}vw`;
        jogador5.style.top = `${posiocaoTopT1[3]}vw`;
        jogador6.style.left = `${posiocaoLeftT1[4]}vw`;
        jogador6.style.top = `${posiocaoTopT1[4]}vw`;
        contador = 2;
        break;
      case 2:
        jogador1.style.left = `${posiocaoLeftT1[4]}vw`;
        jogador1.style.top = `${posiocaoTopT1[4]}vw`;
        jogador2.style.left = `${posiocaoLeftT1[5]}vw`;
        jogador2.style.top = `${posiocaoTopT1[5]}vw`;
        jogador3.style.left = `${posiocaoLeftT1[0]}vw`;
        jogador3.style.top = `${posiocaoTopT1[0]}vw`;
        jogador4.style.left = `${posiocaoLeftT1[1]}vw`;
        jogador4.style.top = `${posiocaoTopT1[1]}vw`;
        jogador5.style.left = `${posiocaoLeftT1[2]}vw`;
        jogador5.style.top = `${posiocaoTopT1[2]}vw`;
        jogador6.style.left = `${posiocaoLeftT1[3]}vw`;
        jogador6.style.top = `${posiocaoTopT1[3]}vw`;
        contador = 3;
        break;
      case 3:
        jogador1.style.left = `${posiocaoLeftT1[3]}vw`;
        jogador1.style.top = `${posiocaoTopT1[3]}vw`;
        jogador2.style.left = `${posiocaoLeftT1[4]}vw`;
        jogador2.style.top = `${posiocaoTopT1[4]}vw`;
        jogador3.style.left = `${posiocaoLeftT1[5]}vw`;
        jogador3.style.top = `${posiocaoTopT1[5]}vw`;
        jogador4.style.left = `${posiocaoLeftT1[0]}vw`;
        jogador4.style.top = `${posiocaoTopT1[0]}vw`;
        jogador5.style.left = `${posiocaoLeftT1[1]}vw`;
        jogador5.style.top = `${posiocaoTopT1[1]}vw`;
        jogador6.style.left = `${posiocaoLeftT1[2]}vw`;
        jogador6.style.top = `${posiocaoTopT1[2]}vw`;
        contador = 4;
        break;
      case 4:
        jogador1.style.left = `${posiocaoLeftT1[2]}vw`;
        jogador1.style.top = `${posiocaoTopT1[2]}vw`;
        jogador2.style.left = `${posiocaoLeftT1[3]}vw`;
        jogador2.style.top = `${posiocaoTopT1[3]}vw`;
        jogador3.style.left = `${posiocaoLeftT1[4]}vw`;
        jogador3.style.top = `${posiocaoTopT1[4]}vw`;
        jogador4.style.left = `${posiocaoLeftT1[5]}vw`;
        jogador4.style.top = `${posiocaoTopT1[5]}vw`;
        jogador5.style.left = `${posiocaoLeftT1[0]}vw`;
        jogador5.style.top = `${posiocaoTopT1[0]}vw`;
        jogador6.style.left = `${posiocaoLeftT1[1]}vw`;
        jogador6.style.top = `${posiocaoTopT1[1]}vw`;
        contador = 5;
        break;
      case 5:
        jogador1.style.left = `${posiocaoLeftT1[1]}vw`;
        jogador1.style.top = `${posiocaoTopT1[1]}vw`;
        jogador2.style.left = `${posiocaoLeftT1[2]}vw`;
        jogador2.style.top = `${posiocaoTopT1[2]}vw`;
        jogador3.style.left = `${posiocaoLeftT1[3]}vw`;
        jogador3.style.top = `${posiocaoTopT1[3]}vw`;
        jogador4.style.left = `${posiocaoLeftT1[4]}vw`;
        jogador4.style.top = `${posiocaoTopT1[4]}vw`;
        jogador5.style.left = `${posiocaoLeftT1[5]}vw`;
        jogador5.style.top = `${posiocaoTopT1[5]}vw`;
        jogador6.style.left = `${posiocaoLeftT1[0]}vw`;
        jogador6.style.top = `${posiocaoTopT1[0]}vw`;
        contador = 6;
        break;
      case 6:
        jogador1.style.left = `${posiocaoLeftT1[0]}vw`;
        jogador1.style.top = `${posiocaoTopT1[0]}vw`;
        jogador2.style.left = `${posiocaoLeftT1[1]}vw`;
        jogador2.style.top = `${posiocaoTopT1[1]}vw`;
        jogador3.style.left = `${posiocaoLeftT1[2]}vw`;
        jogador3.style.top = `${posiocaoTopT1[2]}vw`;
        jogador4.style.left = `${posiocaoLeftT1[3]}vw`;
        jogador4.style.top = `${posiocaoTopT1[3]}vw`;
        jogador5.style.left = `${posiocaoLeftT1[4]}vw`;
        jogador5.style.top = `${posiocaoTopT1[4]}vw`;
        jogador6.style.left = `${posiocaoLeftT1[5]}vw`;
        jogador6.style.top = `${posiocaoTopT1[5]}vw`;
        contador = 1;
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }
  }
};
const updateTime02 = () => {
  if (controlet2 == "semponto") {
    switch (contador2) {
      case 1:
        jogador1t2.style.left = `${posiocaoLeftT2[5]}vw`;
        jogador1t2.style.top = `${posiocaoTopT2[5]}vw`;
        jogador2t2.style.left = `${posiocaoLeftT2[0]}vw`;
        jogador2t2.style.top = `${posiocaoTopT2[0]}vw`;
        jogador3t2.style.left = `${posiocaoLeftT2[1]}vw`;
        jogador3t2.style.top = `${posiocaoTopT2[1]}vw`;
        jogador4t2.style.left = `${posiocaoLeftT2[2]}vw`;
        jogador4t2.style.top = `${posiocaoTopT2[2]}vw`;
        jogador5t2.style.left = `${posiocaoLeftT2[3]}vw`;
        jogador5t2.style.top = `${posiocaoTopT2[3]}vw`;
        jogador6t2.style.left = `${posiocaoLeftT2[4]}vw`;
        jogador6t2.style.top = `${posiocaoTopT2[4]}vw`;
        contador2 = 2;
        break;
      case 2:
        jogador1t2.style.left = `${posiocaoLeftT2[4]}vw`;
        jogador1t2.style.top = `${posiocaoTopT2[4]}vw`;
        jogador2t2.style.left = `${posiocaoLeftT2[5]}vw`;
        jogador2t2.style.top = `${posiocaoTopT2[5]}vw`;
        jogador3t2.style.left = `${posiocaoLeftT2[0]}vw`;
        jogador3t2.style.top = `${posiocaoTopT2[0]}vw`;
        jogador4t2.style.left = `${posiocaoLeftT2[1]}vw`;
        jogador4t2.style.top = `${posiocaoTopT2[1]}vw`;
        jogador5t2.style.left = `${posiocaoLeftT2[2]}vw`;
        jogador5t2.style.top = `${posiocaoTopT2[2]}vw`;
        jogador6t2.style.left = `${posiocaoLeftT2[3]}vw`;
        jogador6t2.style.top = `${posiocaoTopT2[3]}vw`;
        contador2 = 3;
        break;
      case 3:
        jogador1t2.style.left = `${posiocaoLeftT2[3]}vw`;
        jogador1t2.style.top = `${posiocaoTopT2[3]}vw`;
        jogador2t2.style.left = `${posiocaoLeftT2[4]}vw`;
        jogador2t2.style.top = `${posiocaoTopT2[4]}vw`;
        jogador3t2.style.left = `${posiocaoLeftT2[5]}vw`;
        jogador3t2.style.top = `${posiocaoTopT2[5]}vw`;
        jogador4t2.style.left = `${posiocaoLeftT2[0]}vw`;
        jogador4t2.style.top = `${posiocaoTopT2[0]}vw`;
        jogador5t2.style.left = `${posiocaoLeftT2[1]}vw`;
        jogador5t2.style.top = `${posiocaoTopT2[1]}vw`;
        jogador6t2.style.left = `${posiocaoLeftT2[2]}vw`;
        jogador6t2.style.top = `${posiocaoTopT2[2]}vw`;
        contador2 = 4;
        break;
      case 4:
        jogador1t2.style.left = `${posiocaoLeftT2[2]}vw`;
        jogador1t2.style.top = `${posiocaoTopT2[2]}vw`;
        jogador2t2.style.left = `${posiocaoLeftT2[3]}vw`;
        jogador2t2.style.top = `${posiocaoTopT2[3]}vw`;
        jogador3t2.style.left = `${posiocaoLeftT2[4]}vw`;
        jogador3t2.style.top = `${posiocaoTopT2[4]}vw`;
        jogador4t2.style.left = `${posiocaoLeftT2[5]}vw`;
        jogador4t2.style.top = `${posiocaoTopT2[5]}vw`;
        jogador5t2.style.left = `${posiocaoLeftT2[0]}vw`;
        jogador5t2.style.top = `${posiocaoTopT2[0]}vw`;
        jogador6t2.style.left = `${posiocaoLeftT2[1]}vw`;
        jogador6t2.style.top = `${posiocaoTopT2[1]}vw`;
        contador2 = 5;
        break;
      case 5:
        jogador1t2.style.left = `${posiocaoLeftT2[1]}vw`;
        jogador1t2.style.top = `${posiocaoTopT2[1]}vw`;
        jogador2t2.style.left = `${posiocaoLeftT2[2]}vw`;
        jogador2t2.style.top = `${posiocaoTopT2[2]}vw`;
        jogador3t2.style.left = `${posiocaoLeftT2[3]}vw`;
        jogador3t2.style.top = `${posiocaoTopT2[3]}vw`;
        jogador4t2.style.left = `${posiocaoLeftT2[4]}vw`;
        jogador4t2.style.top = `${posiocaoTopT2[4]}vw`;
        jogador5t2.style.left = `${posiocaoLeftT2[5]}vw`;
        jogador5t2.style.top = `${posiocaoTopT2[5]}vw`;
        jogador6t2.style.left = `${posiocaoLeftT2[0]}vw`;
        jogador6t2.style.top = `${posiocaoTopT2[0]}vw`;
        contador2 = 6;
        break;
      case 6:
        jogador1t2.style.left = `${posiocaoLeftT2[0]}vw`;
        jogador1t2.style.top = `${posiocaoTopT2[0]}vw`;
        jogador2t2.style.left = `${posiocaoLeftT2[1]}vw`;
        jogador2t2.style.top = `${posiocaoTopT2[1]}vw`;
        jogador3t2.style.left = `${posiocaoLeftT2[2]}vw`;
        jogador3t2.style.top = `${posiocaoTopT2[2]}vw`;
        jogador4t2.style.left = `${posiocaoLeftT2[3]}vw`;
        jogador4t2.style.top = `${posiocaoTopT2[3]}vw`;
        jogador5t2.style.left = `${posiocaoLeftT2[4]}vw`;
        jogador5t2.style.top = `${posiocaoTopT2[4]}vw`;
        jogador6t2.style.left = `${posiocaoLeftT2[5]}vw`;
        jogador6t2.style.top = `${posiocaoTopT2[5]}vw`;
        contador2 = 1;
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }
  }
};
