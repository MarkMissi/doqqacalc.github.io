var filePath = "../res/Damage Values/Damage_T.Gohan.csv";

function loadFile(path) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", path, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}


console.log(loadFile(filePath));
