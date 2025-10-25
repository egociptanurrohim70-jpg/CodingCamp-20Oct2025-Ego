const userName = prompt("Please enter your name:");
 if (userName) {
      document.getElementById("h2-Padding").textContent = userName;
    } else {
      document.getElementById("h2-Padding").textContent = "No name provided";
    }
