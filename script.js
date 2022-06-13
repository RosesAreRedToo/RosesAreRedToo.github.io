var input = document.getElementById("msg");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
  else
  document.getElementById("msg").value='';
});