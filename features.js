//navigation
function gotoHome(){ window.location.assign("index.html") }
function gotoAbout(){ window.location.assign("about.html") }
function gotoFeatures(){ window.location.assign("features.html") }

//variables
/*
var xhr;
  //initialize API
  try { xhr = new XMLHttpRequest(); }
  catch(e) { xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
  */
//var potVoltage;
var solarVoltage;
var battery1;
var battery2;
var greenLed;
var redLed;
  //setInterval('displayAnalogVolts()', 1000); //update analog values every second

/*
function onload()
{
  circuitImage();
} */

/*
function displayAnalogVolts()
{
  xhr.open('GET', '../getAllAnalogPinValues', true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == 4 && xhr.status == 200)
    {
      //AN0
      solarVoltage = getXMLValue(xhr.responseXML,'pin0');
      solarVoltage = analogToVolts(solarVoltage);
      document.getElementById("solar").innerHTML = solarVoltage + "V";

      //AN1
      battery1 = getXMLValue(xhr.responseXML, 'pin1');
      battery1 = analogToVolts(battery1);
      document.getElementById("battery1").innerHTML = battery1 + "V";

      //AN2
      battery2 = getXMLValue(xhr.responseXML, 'pin2');
      battery2 = analogToVolts(battery2);
      document.getElementById("battery2").innerHTML = battery2 + "V";

      //AN3
      greenLed = getXMLValue(xhr.responseXML, 'pin3');
      greenLed = analogToVolts(greenLed);
      document.getElementById("greenLed").innerHTML = greenLed + "V";

      //AN4
      redLed = getXMLValue(xhr.responseXML, 'pin4');
      redLed = analogToVolts(redLed);
      document.getElementById("redLed").innerHTML = redLed + "V";
    }
  }
  xhr.send(null);
} */

/*
function getXMLValue(xmlData, pin)
{
  try
  {
    if(xmlData.getElementsByTagName(pin)[0].firstChild.nodeValue)
    return xmlData.getElementsByTagName(pin)[0].firstChild.nodeValue;
    else
    return null;
  }
  catch(err) { return null; }
} */

function analogToVolts(analogValue)
{
  analogValue = 3.3*(analogValue/1024); //convert to volts
  return analogValue.toFixed(3); //display to three decimals
}

function greenSwitch()
{
    //document.getElementById("g").innerHTML = "green on!"
    //xhr.open('GET', '../switchDigitalPin?pin=0', false);//these don't work in async mode :(
    //xhr.send();
    //circuitImage();

    //for demo only:
  if(circuit.src.match('circuitGreen'))
    circuit.src = "https://lh3.googleusercontent.com/-C3InyjAOjiI/VmkBGxda_DI/AAAAAAAAInU/OuIqGSKYWxM/s800-Ic42/circuitOff.png";
  else
    circuit.src = "https://lh3.googleusercontent.com/-bbiM_mBT89U/VmkBG10jjaI/AAAAAAAAInU/0xG0i-e4Meg/s800-Ic42/circuitGreen.png";

}

function redSwitch()
{
    //document.getElementById("r").innerHTML = "red on!"
    //xhr.open('GET', '../switchDigitalPin?pin=1', false);
    //xhr.send();
    //circuitImage();

    //for demo only:
    if(circuit.src.match('circuitRed'))
    circuit.src = "https://lh3.googleusercontent.com/-C3InyjAOjiI/VmkBGxda_DI/AAAAAAAAInU/OuIqGSKYWxM/s800-Ic42/circuitOff.png";
    else
      circuit.src = "https://lh3.googleusercontent.com/-iSEeeTS7m_s/VmkBG3RBlRI/AAAAAAAAInU/V-mtB-WC0Mo/s800-Ic42/circuitRed.png";
}

/*
function circuitImage()
{
  var green;
  var red;
  xhr.open('GET', '../getAllDigitalPinStates', false);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == 4 && xhr.status == 200)
    {
      green = getXMLValue(xhr.responseXML,'pin0');
      red = getXMLValue(xhr.responseXML,'pin1');
    }
  }
  xhr.send();

  if(green == 0 && red == 1)//green on
    circuit.src = "https://lh3.googleusercontent.com/-bbiM_mBT89U/VmkBG10jjaI/AAAAAAAAInU/0xG0i-e4Meg/s800-Ic42/circuitGreen.png";
  else if(green == 1 && red == 0)//red on
    circuit.src = "https://lh3.googleusercontent.com/-iSEeeTS7m_s/VmkBG3RBlRI/AAAAAAAAInU/V-mtB-WC0Mo/s800-Ic42/circuitRed.png";
  else if(green == 1 && red == 1)//both off
    circuit.src = "https://lh3.googleusercontent.com/-C3InyjAOjiI/VmkBGxda_DI/AAAAAAAAInU/OuIqGSKYWxM/s800-Ic42/circuitOff.png";
  else //both on
    circuit.src = "https://lh3.googleusercontent.com/-qnEuAQQy3SU/VmdgnfZ0inI/AAAAAAAAIi8/lPhFLRUXeWA/s800-Ic42/circuit.png";
} */
