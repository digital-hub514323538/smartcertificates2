function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  alert(`Thanks ${name}, your message has been sent!`);
  return false;
}
