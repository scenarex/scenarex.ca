function processForm(e) {

  var xmlhttp = new XMLHttpRequest();
  var url = "https://hooks.slack.com/services/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";
  var data = JSON.stringify(
    payload= {
      "attachments": [{
        "pretext": document.getElementById("email").value + " says:",
        "text": document.getElementById("message").value
      }]
    }
  );

  if (e.preventDefault) e.preventDefault();

  xmlhttp.open("POST", url, true);
  xmlhttp.onload = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == "200") {
      document.getElementById("post").innerText = "Thanks!";
      document.getElementById("post").className = "success";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    } else {
      document.getElementById("post").innerText = "Oops :(";
      document.getElementById("post").className = "error";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }

  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(data);
  return false;
}

var form = document.getElementById("slack");
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}
