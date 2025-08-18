function loginUser(e) {
  e.preventDefault();
  // Dummy login check (replace with real backend auth)
  window.location.href = "home.html";
}

function registerUser(e) {
  e.preventDefault();
  alert("Registered Successfully! Please Login.");
  window.location.href = "index.html";
}

function createCertificate(e) {
  e.preventDefault();
  const title = document.getElementById("cert-title").value;
  const issuedTo = document.getElementById("issued-to").value;
  const list = document.getElementById("certificate-list");
  if (list) {
    let li = document.createElement("li");
    li.textContent = `${title} - for ${issuedTo}`;
    list.appendChild(li);
  }
  alert("Certificate Created!");
}

function logout() {
  alert("Logged out!");
  window.location.href = "index.html";
}
