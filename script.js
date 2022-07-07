// BOTÃO DOLAR->REAL
const chk = document.getElementById('chk')
const money = document.querySelector('.money')

chk.addEventListener('change', () => {
  document.querySelector('.money').classList.toggle('dark')
  

  if (money.classList.contains('dark')) {
    document.getElementById('cash').innerHTML = 'U$';
    dolar();
  }else {
    document.getElementById('cash').innerHTML = 'R$';
    real();
  }
})



var moeda = ''
var chave = 'BRL'

//conversão
async function conversao () {
  const api_url = `https://api.binance.com/api/v3/ticker/price?symbol=${moeda}${chave}`
  const resposta = await fetch(api_url);
  const dados = await resposta.json();
  document.getElementById('numero').innerHTML = parseFloat(dados.price).toFixed(2)
}


//CHAVE DOLAR/REAL
function dolar () {
  function teste () {
    chave = 'USDT';
    conversao()  
  }
  teste();
}
function real () {
  function teste () {
    chave = 'BRL';
    conversao()  
  }
  teste();
}


//BITCOIN
function btc () {
  function teste () {
    moeda = 'BTC';
    conversao()  
  }
  teste();
}
//ETHERIUM
function eth () {
  function teste () {
    moeda = 'ETH';
    conversao()  
  }
  teste();
}
//LITE COIN
function ltc () {
  function teste () {
    moeda = 'LTC';
    conversao()  
  }
  teste();
}
//BINANCE COIN
function bnb () {
  function teste () {
    moeda = 'BNB';
    conversao()  
  }
  teste();
}
//DOGE COIN
function doge () {
  function teste () {
    moeda = 'DOGE';
    conversao()  
  }
  teste();
}
//THER
function dot () {
  function teste () {
    moeda = 'DOT';
    conversao()  
  }
  teste();
}
//CARDANO
function ada () {
  function teste () {
    moeda = 'ADA';
    conversao()  
  }
  teste();
}
//XRP
function xrp () {
  function teste () {
    moeda = 'XRP';
    conversao()  
  }
  teste();
}
//SOLANA
function sol () {
  function teste () {
    moeda = 'SOL';
    conversao()  
  }
  teste();
}