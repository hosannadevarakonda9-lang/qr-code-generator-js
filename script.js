function generateQR() {
  let qrText = document.getElementById("qrText").value;
  let qrImage = document.getElementById("qrImage");

  if (qrText === "") {
    alert("Please enter text or URL");
    return;
  }

  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" 
    + encodeURIComponent(qrText);
}
