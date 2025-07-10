function generateQR() {
  const inputText = document.getElementById("inputText").value.trim();
  const qrImage = document.getElementById("qrImage");

  if (inputText === "") {
    alert("Please enter a URL or text");
    return;
  }

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200`;
}
