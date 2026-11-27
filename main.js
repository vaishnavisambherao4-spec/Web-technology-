document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  if (user === "pratu" && pass === "1234") {
    msg.style.color = "#00ffaa";
    msg.innerText = "Login Successful! Welcome " + user + " 🎉";
  } else {
    msg.style.color = "red";
    msg.innerText = "Username kiva Password chukla ❌";
  }
});
