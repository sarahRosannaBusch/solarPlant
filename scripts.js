//navigation
function gotoHome(){ window.location.assign("index.html") }
function gotoAbout(){ window.location.assign("about.html") }
function gotoFeatures(){ window.location.assign("features.html") }

//variables
var button = document.getElementById("button");
var led = document.getElementById("led");
var radio = document.getElementsByName("ledColour");

// ***This stuff is needed to connect the site to the Netduino Solar Plant: ***
//var xhr;
  //initialize API
  //try { xhr = new XMLHttpRequest(); }
  //catch(e) { xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
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
  //make sure LEDs start off. state=true b/c LED connected to pin and positive rail
  xhr.open('GET', '../setDigitalPin?pin=0&state=true', false); //false to wait till ready
  xhr.send();
  xhr.open('GET', '../setDigitalPin?pin=1&state=true', false);
  xhr.send();
} */

﻿function touchButton() //button image changes on mouse over
{
  if(button.src.match("buttonUp"))
    //buttonMid:
    button.src = "https://lh3.googleusercontent.com/-C1PJlzI9SXY/VmTWvVlSnWI/AAAAAAAAIgA/w2XNthJyesk/s800-Ic42/buttonMid.png";
  else
    //buttonLow:
    button.src = "https://lh3.googleusercontent.com/-2AkbX-x3UWs/VmTWvOSDAdI/AAAAAAAAIf8/NPLXQOJnBlQ/s800-Ic42/buttonLow.png";
}

function untouchButton() //button image changes on mouse out
{
  if (led.src.match("ledOff"))
    //buttonUp
    button.src = "https://lh3.googleusercontent.com/-G07OypRcV_I/VmTWvgDAwtI/AAAAAAAAIgE/ll_e6Ow2ct0/s800-Ic42/buttonUp.png";
  else
    //butoonDown
    button.src = "https://lh3.googleusercontent.com/-qw7RAOkh3Xw/VmTWvI6Ps0I/AAAAAAAAIf0/KKWPglFxy6s/s800-Ic42/buttonDown.png";
}

function pressButton() //button controls the image of the led
{
 if (led.src.match("ledOff"))
 {
   //buttonDown
	 button.src = "https://lh3.googleusercontent.com/-qw7RAOkh3Xw/VmTWvI6Ps0I/AAAAAAAAIf0/KKWPglFxy6s/s800-Ic42/buttonDown.png";
	 changeLed(); //turn led on
 }
 else
 {
   //buttonUp:
	 button.src = "https://lh3.googleusercontent.com/-G07OypRcV_I/VmTWvgDAwtI/AAAAAAAAIgE/ll_e6Ow2ct0/s800-Ic42/buttonUp.png";
 	 changeLed(); //turn led off
 }
 chargeDirection(); //to call the function when not actually hooked up to circuit
}

function changeLed() //control the real led and the led image
{
  if(button.src.match("buttonUp"))
  {
    //ledOff
    led.src = "https://lh3.googleusercontent.com/-mg77ycuissI/VmTWv2SO61I/AAAAAAAAIgM/ArCCdygsAc8/s288-Ic42/ledOff.png"
    //xhr.open('GET', '../setDigitalPin?pin=0&state=true', false); //false to make sure both events happen
    //xhr.send();
    //xhr.open('GET', '../setDigitalPin?pin=1&state=true', false);
    //xhr.send();
  }
  else //if the LED is on the radio buttons set its colour
  {
    if (radio[0].checked)
    {
      //ledRed
      led.src = "https://lh3.googleusercontent.com/-a3ZhBEfujvU/VmTWwO4WQ8I/AAAAAAAAIgQ/-J2OWmdCNkU/s400-Ic42/ledRed.png";
      //xhr.open('GET', '../setDigitalPin?pin=1&state=false', false);
      //xhr.send();
      //xhr.open('GET', '../setDigitalPin?pin=0&state=true', false);
      //xhr.send();
    }
    else if (radio[1].checked)
    {
      //ledGreen
      led.src = "https://lh3.googleusercontent.com/-V5koSkrVah4/VmTWvwNUttI/AAAAAAAAIgI/gk0HlVAJ7F8/s400-Ic42/ledGreen.png";
      //xhr.open('GET', '../setDigitalPin?pin=0&state=false', false);
      //xhr.send();
      //xhr.open('GET', '../setDigitalPin?pin=1&state=true', false);
      //xhr.send();
    }
  }
}

/*
function displayAnalogVolts()
{
  xhr.open('GET', '../getAllAnalogPinValues', true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == 4 && xhr.status == 200)
    {
      //AN1
      battery1 = getXMLValue(xhr.responseXML, 'pin1');
      battery1 = analogToVolts(battery1);

      //AN2
      battery2 = getXMLValue(xhr.responseXML, 'pin2');
      battery2 = analogToVolts(battery2);

      document.getElementById("batteryVolts").innerHTML = "Battery voltage:  " + battery1 + " V";
      var current = ((battery1-battery2)/10*1000)
      document.getElementById("batteryCurrent").innerHTML = "Battery current:  " + current.toFixed(3) + " mA";

      chargeDirection();
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
  analogValue = analogValue.toFixed(3); //display to three decimals
  return analogValue;
}

function chargeDirection()
{
  //if(battery1 > battery2) //discharging
  if(button.src.match("buttonDown"))
  {
    arrow.src = "https://lh3.googleusercontent.com/-yMVtG3crq0A/VmZ1t8FatmI/AAAAAAAAIiU/qEWaFklmp2E/s800-Ic42/discharging.png";
  }
  else //charging
  {
    arrow.src = "https://lh3.googleusercontent.com/-qXKozZdJ9Wg/VmZ1txC9e7I/AAAAAAAAIiU/Bus6Ed1JflU/s800-Ic42/charging.png";
  }
}
