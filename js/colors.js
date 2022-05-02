//changeRed(255)
//changeGreen(0)
//changeBlue(0)

changeRGB("r");
function changeRGB(x) {
  var col, r, g, b;
  r = document.getElementById("slideRed").value;
  g = document.getElementById("slideGreen").value;
  b = document.getElementById("slideBlue").value;
  col = w3color("rgb(" + r + "," + g + "," + b + ")");
  document.getElementById('valRed2').innerHTML = r;
  document.getElementById('valGreen2').innerHTML = g;
  document.getElementById('valBlue2').innerHTML = b;
  document.getElementById('rgbresult').style.backgroundColor = col.toRgbString();
  document.getElementById('rgbresulttext').innerHTML = col.toRgbString();
  if (col.isDark(150)) {
    document.getElementById('rgbresulttext').style.color = "#ffffff";
  } else {
    document.getElementById('rgbresulttext').style.color = "#1f2d3d";
  }
}

changeRGBA("r");
function changeRGBA(x) {
  var col, r, g, b, a;
  r = document.getElementById("slideRedA").value;
  g = document.getElementById("slideGreenA").value;
  b = document.getElementById("slideBlueA").value;
  a = document.getElementById("slideAlphaA").value/10;
  col = w3color("rgba(" + r + "," + g + "," + b + "," + a + ")");
  document.getElementById('valRed2A').innerHTML = r;
  document.getElementById('valGreen2A').innerHTML = g;
  document.getElementById('valBlue2A').innerHTML = b;
  document.getElementById('valAlpha2A').innerHTML = a;
  document.getElementById('rgbaresult').style.backgroundColor = col.toRgbaString();
  document.getElementById('rgbaresulttext').innerHTML = col.toRgbaString();
  if (col.isDark(150) && a > 0.2) {
    document.getElementById('rgbaresulttext').style.color = "#ffffff";
  } else {
    document.getElementById('rgbaresulttext').style.color = "#1f2d3d";
  }
}

changeHex("r");
function changeHex(x) {
  var col, r, g, b;
  r = document.getElementById("slideRedHex").value;
  g = document.getElementById("slideGreenHex").value;
  b = document.getElementById("slideBlueHex").value;
  col = w3color("rgb(" + r + "," + g + "," + b + ")");
    document.getElementById('valRed2Hex').innerHTML = col.toHexString().substr(1,2);
    document.getElementById('valGreen2Hex').innerHTML = col.toHexString().substr(3,2);
    document.getElementById('valBlue2Hex').innerHTML = col.toHexString().substr(5,2);
    document.getElementById('hexresult').style.backgroundColor = col.toRgbString();
    document.getElementById('hexresulttext').innerHTML = col.toHexString();
  if (col.isDark(150)) {
    document.getElementById('hexresulttext').style.color = "#ffffff";
  } else {
    document.getElementById('hexresulttext').style.color = "#1f2d3d";
  }
}


changeHsl("h");
function changeHsl(x) {
  var col, h, s, l;
  h = document.getElementById("slideHue").value;
  s = document.getElementById("slideSat").value;
  l = document.getElementById("slideLight").value;
  col = w3color("hsl(" + h + "," + s/100 + "," + l/100 + ")");
    document.getElementById('valHue').innerHTML = col.toHsl().h;
    document.getElementById('valSat').innerHTML = Math.round(col.toHsl().s * 100) + "%";
    document.getElementById('valLight').innerHTML = Math.round(col.toHsl().l * 100) + "%";
    document.getElementById('hslresult').style.backgroundColor = col.toHslString();
    document.getElementById('hslresulttext').innerHTML = col.toHslString();
  if (col.isDark(150)) {
    document.getElementById('hslresulttext').style.color = "#ffffff";
  } else {
    document.getElementById('hslresulttext').style.color = "#1f2d3d";
  }
}

changeHsla("h");
function changeHsla(x) {
  var col, h, s, l, a;
  h = document.getElementById("slideHueA").value;
  s = document.getElementById("slideSatA").value;
  l = document.getElementById("slideLightA").value;
  a = document.getElementById("slideHslAlpha").value/10;
  col = w3color("hsla(" + h + "," + s/100 + "," + l/100 + "," + a + ")");
  document.getElementById('valHueA').innerHTML = col.toHsl().h;
  document.getElementById('valSatA').innerHTML = Math.round(col.toHsl().s * 100) + "%";
  document.getElementById('valLightA').innerHTML = Math.round(col.toHsl().l * 100) + "%";
  document.getElementById('valHslAlpha').innerHTML = col.toHsl().a;
  document.getElementById('hslaresult').style.backgroundColor = col.toHslaString();
  document.getElementById('hslaresulttext').innerHTML = col.toHslaString();
  if (col.isDark(150) && a > 0.2) {
    document.getElementById('hslaresulttext').style.color = "#ffffff";
  } else {
    document.getElementById('hslaresulttext').style.color = "#1f2d3d";
  }
}