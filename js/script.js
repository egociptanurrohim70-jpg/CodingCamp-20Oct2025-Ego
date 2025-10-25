let userName = "";

// Loop sampai user mengisi nama
while (!userName) {
  userName = prompt("Masukkan nama Anda:");

  if (!userName) {
    alert("Nama wajib diisi! Silakan masukkan nama Anda.");
  }
}

// Tampilkan nama ke elemen HTML
document.getElementById("h2-Padding").textContent = userName;

 function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth"
  });
}


document.getElementById("nav-profile").addEventListener("click", () => {
  scrollToSection("section-profile");
});

document.getElementById("nav-portfolio").addEventListener("click", () => {
  scrollToSection("section-portfolio");
});

document.getElementById("nav-message").addEventListener("click", () => {
  scrollToSection("section-message");
});

document.getElementById("nav-home").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("time").textContent = new Date().toString();


const form = document.getElementById("messageForm");
const rName = document.getElementById("r-name");
const rBirth = document.getElementById("r-birth");
const rGender = document.getElementById("r-gender");
const rMessage = document.getElementById("r-message");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const birth = document.getElementById("birthdate").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.getElementById("message").value;

  
  rName.textContent = name;
  rBirth.textContent = birth;
  rGender.textContent = gender;
  rMessage.textContent = message;
});
