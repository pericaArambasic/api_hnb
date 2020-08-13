// https://cors-anywhere.herokuapp.com/
// https://yacdn.org/proxy/
var nameAus, curAus, rateAus, numRateAus;
var nameCan, curCan, rateCan, numRateCan;
var nameCze, curCze, rateCze, numRateCze;
var nameDnk, curDnk, rateDnk, numRateDnk;
var nameHun, curHun, rateHun, numRateHun;
var nameJpn, curJpn, rateJpn, numRateJpn;
var nameNor, curNor, rateNor, numRateNor;
var nameSwe, curSwe, rateSwe, numRateSwe;
var nameChe, curChe, rateChe, numRateChe;
var nameGbr, curGbr, rateGbr, numRateGbr;
var nameUsa, curUsa, rateUsa, numRateUsa;
var nameBih, curBih, rateBih, numRateBih;
var nameEmu, curEmu, rateEmu, numRateEmu;
var namePol, curPol, ratePol, numRatePol;
var valueToConvert, conversionRate, convertedValue;
var formatedValue;

async function getApi() {
  var response = await fetch(
    "https://cors-anywhere.herokuapp.com/http://api.hnb.hr/tecajn/v2"
  );
  data = await response.json();
  // Australija
  nameAus = data[0].drzava;
  curAus = data[0].valuta;
  rateAus = data[0].srednji_tecaj;
  rateAus = rateAus.replace(/,/g, ".");
  numRateAus = parseFloat(rateAus);

  document.getElementById("drzava1").innerHTML = nameAus;
  document.getElementById("valuta1").innerHTML = curAus;
  document.getElementById("tecaj1").innerHTML = numRateAus;

  // Kanada
  nameCan = data[1].drzava;
  curCan = data[1].valuta;
  rateCan = data[1].srednji_tecaj;
  rateCan = rateCan.replace(/,/g, ".");
  numRateCan = parseFloat(rateCan);

  document.getElementById("drzava2").innerHTML = nameCan;
  document.getElementById("valuta2").innerHTML = curCan;
  document.getElementById("tecaj2").innerHTML = numRateCan;

  // Češka
  nameCze = data[2].drzava;
  curCze = data[2].valuta;
  rateCze = data[2].srednji_tecaj;
  rateCze = rateCze.replace(/,/g, ".");
  numRateCze = parseFloat(rateCze);

  document.getElementById("drzava3").innerHTML = nameCze;
  document.getElementById("valuta3").innerHTML = curCze;
  document.getElementById("tecaj3").innerHTML = numRateCze;

  // Danska
  nameDnk = data[3].drzava;
  curDnk = data[3].valuta;
  rateDnk = data[3].srednji_tecaj;
  rateDnk = rateDnk.replace(/,/g, ".");
  numRateDnk = parseFloat(rateDnk);

  document.getElementById("drzava4").innerHTML = nameDnk;
  document.getElementById("valuta4").innerHTML = curDnk;
  document.getElementById("tecaj4").innerHTML = numRateDnk;

  // Mađarska
  nameHun = data[4].drzava;
  curHun = data[4].valuta;
  rateHun = data[4].srednji_tecaj;
  rateHun = rateHun.replace(/,/g, ".");
  rateHun = rateHun / 100;
  numRateHun = parseFloat(rateHun);

  document.getElementById("drzava5").innerHTML = nameHun;
  document.getElementById("valuta5").innerHTML = curHun;
  document.getElementById("tecaj5").innerHTML = numRateHun;

  // Japan
  nameJpn = data[5].drzava;
  curJpn = data[5].valuta;
  rateJpn = data[5].srednji_tecaj;
  rateJpn = rateJpn.replace(/,/g, ".");
  rateJpn = rateJpn / 100;
  numRateJpn = parseFloat(rateJpn);

  document.getElementById("drzava6").innerHTML = nameJpn;
  document.getElementById("valuta6").innerHTML = curJpn;
  document.getElementById("tecaj6").innerHTML = numRateJpn;

  // Norveška
  nameNor = data[6].drzava;
  curNor = data[6].valuta;
  rateNor = data[6].srednji_tecaj;
  rateNor = rateNor.replace(/,/g, ".");
  numRateNor = parseFloat(rateNor);

  document.getElementById("drzava7").innerHTML = nameNor;
  document.getElementById("valuta7").innerHTML = curNor;
  document.getElementById("tecaj7").innerHTML = numRateNor;

  // Švedska
  nameSwe = data[7].drzava;
  curSwe = data[7].valuta;
  rateSwe = data[7].srednji_tecaj;
  rateSwe = rateSwe.replace(/,/g, ".");
  numRateSwe = parseFloat(rateSwe);

  document.getElementById("drzava8").innerHTML = nameSwe;
  document.getElementById("valuta8").innerHTML = curSwe;
  document.getElementById("tecaj8").innerHTML = numRateSwe;

  // Švicarska
  nameChe = data[8].drzava;
  curChe = data[8].valuta;
  rateChe = data[8].srednji_tecaj;
  rateChe = rateChe.replace(/,/g, ".");
  numRateChe = parseFloat(rateChe);

  document.getElementById("drzava9").innerHTML = nameChe;
  document.getElementById("valuta9").innerHTML = curChe;
  document.getElementById("tecaj9").innerHTML = numRateChe;

  // Velika Britanija
  nameGbr = data[9].drzava;
  curGbr = data[9].valuta;
  rateGbr = data[9].srednji_tecaj;
  rateGbr = rateGbr.replace(/,/g, ".");
  numRateGbr = parseFloat(rateGbr);

  document.getElementById("drzava10").innerHTML = nameGbr;
  document.getElementById("valuta10").innerHTML = curGbr;
  document.getElementById("tecaj10").innerHTML = numRateGbr;

  // USA
  nameUsa = data[10].drzava;
  curUsa = data[10].valuta;
  rateUsa = data[10].srednji_tecaj;
  rateUsa = rateUsa.replace(/,/g, ".");
  numRateUsa = parseFloat(rateUsa);

  document.getElementById("drzava11").innerHTML = nameUsa;
  document.getElementById("valuta11").innerHTML = curUsa;
  document.getElementById("tecaj11").innerHTML = numRateUsa;

  // Bih
  nameBih = data[11].drzava;
  curBih = data[11].valuta;
  rateBih = data[11].srednji_tecaj;
  rateBih = rateBih.replace(/,/g, ".");
  numRateBih = parseFloat(rateBih);

  document.getElementById("drzava12").innerHTML = nameBih;
  document.getElementById("valuta12").innerHTML = curBih;
  document.getElementById("tecaj12").innerHTML = numRateBih;

  // EMU
  nameEmu = data[12].drzava;
  curEmu = data[12].valuta;
  rateEmu = data[12].srednji_tecaj;
  rateEmu = rateEmu.replace(/,/g, ".");
  numRateEmu = parseFloat(rateEmu);

  document.getElementById("drzava13").innerHTML = nameEmu;
  document.getElementById("valuta13").innerHTML = curEmu;
  document.getElementById("tecaj13").innerHTML = numRateEmu;

  // Poljska
  namePol = data[13].drzava;
  curPol = data[13].valuta;
  ratePol = data[13].srednji_tecaj;
  ratePol = ratePol.replace(/,/g, ".");
  numRatePol = parseFloat(ratePol);

  document.getElementById("drzava14").innerHTML = namePol;
  document.getElementById("valuta14").innerHTML = curPol;
  document.getElementById("tecaj14").innerHTML = numRatePol;

  // test
  console.log(data[0]);

  //zamjena valuta
  function currencySwap() {
    if (document.getElementById("convert").style.display === "inline") {
      document.getElementById("convert").style.display = "none";
      document.getElementById("convert2").style.display = "inline";
      document.getElementById("info").innerHTML = "HRK ===>";
    } else {
      document.getElementById("convert").style.display = "inline";
      document.getElementById("convert2").style.display = "none";
      document.getElementById("info").innerHTML = "===> HRK";
    }
  }
  document.getElementById("swap").onclick = currencySwap;
}

function converter() {
  valueToConvert = document.getElementById("inputValue").value;
  if (document.getElementById("select").value === "AUD") {
    convertedValue = valueToConvert * numRateAus;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "CAD") {
    convertedValue = valueToConvert * numRateCan;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "CZK") {
    convertedValue = valueToConvert * numRateCze;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "DKK") {
    convertedValue = valueToConvert * numRateDnk;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "HUF") {
    convertedValue = valueToConvert * numRateHun;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "JPY") {
    convertedValue = valueToConvert * numRateJpn;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "NOK") {
    convertedValue = valueToConvert * numRateNor;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "SEK") {
    convertedValue = valueToConvert * numRateSwe;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "CHF") {
    convertedValue = valueToConvert * numRateChe;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "GBP") {
    convertedValue = valueToConvert * numRateGbr;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "USD") {
    convertedValue = valueToConvert * numRateUsa;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "BAM") {
    convertedValue = valueToConvert * numRateBih;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "EUR") {
    convertedValue = valueToConvert * numRateEmu;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "PLN") {
    convertedValue = valueToConvert * numRatePol;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else {
    document.getElementById("result").innerHTML = "No currency selected";
  }
}

document.getElementById("convert").onclick = converter;

function converterReverse() {
  valueToConvert = document.getElementById("inputValue").value;
  if (document.getElementById("select").value === "AUD") {
    convertedValue = valueToConvert / numRateAus;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "CAD") {
    convertedValue = valueToConvert / numRateCan;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "CZK") {
    convertedValue = valueToConvert / numRateCze;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "DKK") {
    convertedValue = valueToConvert / numRateDnk;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "HUF") {
    convertedValue = valueToConvert / numRateHun;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "JPY") {
    convertedValue = valueToConvert / numRateJpn;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "NOK") {
    convertedValue = valueToConvert / numRateNor;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "SEK") {
    convertedValue = valueToConvert / numRateSwe;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "CHF") {
    convertedValue = valueToConvert / numRateChe;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "GBP") {
    convertedValue = valueToConvert / numRateGbr;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "USD") {
    convertedValue = valueToConvert / numRateUsa;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "BAM") {
    convertedValue = valueToConvert / numRateBih;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "EUR") {
    convertedValue = valueToConvert / numRateEmu;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else if (document.getElementById("select").value === "PLN") {
    convertedValue = valueToConvert / numRatePol;
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
  } else {
    document.getElementById("result").innerHTML = "No currency selected";
  }
}

document.getElementById("convert2").onclick = converterReverse;

function formatChange() {
  if (document.getElementById("formatChoice").value === "US") {
    formatedValue = new Intl.NumberFormat("en-US").format(
      convertedValue.toFixed(2)
    );
    document.getElementById("result").innerHTML = formatedValue;
  } else if (document.getElementById("formatChoice").value === "DE") {
    formatedValue = new Intl.NumberFormat("de-DE").format(
      convertedValue.toFixed(2)
    );
    document.getElementById("result").innerHTML = formatedValue;
  } else {
  }
}

document.getElementById("formatChoice").onchange = formatChange;
getApi();
