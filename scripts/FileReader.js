var filePath = "https://markmissi.github.io/doqqacalc/res/damage/Damage_T.Gohan.csv";

function loadFile(path) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", path, true);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
};

window.onload = function() {
	console.log(loadFile(filePath));
};