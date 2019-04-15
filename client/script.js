
function selectDevice(deviceName) {
    if (deviceName=="") return; // please select - possibly you want something else here
  
    var selectDevice = "script/"+((deviceName == "daily")?"d":"m")+"_report.php";
    loadXMLDoc(selectDevice,'responseTag');
    
    if(deviceName == "computer"){
      document.getElementByID('compTag').style.visibility='visible'
      document.getElementById('phoneTag').style.visibility='hidden'; //definitely broken
      document.getElementById('carTag').style.visibility='hidden'; //definitely broken
  
    } else if(deviceName =="phone"){
        document.getElementByID('phoneTag').style.visibility='visible'
        document.getElementById('compTag').style.visibility='hidden'; //definitely broken
        document.getElementById('carTag').style.visibility='hidden'; //definitely broken
    }
    else if(deviceName == "car"){
      document.getElementByID('carTag').style.visibility='visible'
      document.getElementById('compTag').style.visibility='hidden'; //definitely broken
      document.getElementById('phoneTag').style.visibility='hidden'; //definitely broken
    }
  }
  