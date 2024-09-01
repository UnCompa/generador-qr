let opciones = {
  width: 400,
  height: 400,
  type: "png",
  data: "",
  image: "",
  dotsOptions: {
    color: "#eeeeee",
    type: "extra-rounded",
  },
  backgroundOptions: {
    color: "#151515",
  },
  imageOptions: {
    crossOrigin: "anonymous",
  },
};

let qrCode = new QRCodeStyling(opciones);

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("txt");

  // Actualiza el valor de data en las opciones
  opciones.data = input.value;

  // Elimina el código QR anterior si existe
  document.getElementById("canvas").innerHTML = "";

  // Crea un nuevo código QR con las opciones actualizadas
  qrCode = new QRCodeStyling(opciones);

  // Inserta el nuevo código QR en el DOM
  qrCode.append(document.getElementById("canvas"));
});

let fileUrl;
document.getElementById("file").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById("upload").disabled = false;
    fileUrl = URL.createObjectURL(file);
  }
});

document.getElementById("upload").addEventListener("click", () => {
  if (fileUrl) {
    opciones.image = fileUrl;
    document.getElementById("lblFile").classList.add("lblFileTrue");
    document.getElementById("lblFile").classList.remove("lblFile");
    document.getElementById("upload").disabled = true;
  }
});

document.getElementById("btnImg").addEventListener("click", () => {
  document.getElementById("divImg").style.display = "block";
});
document.getElementById("descargar").addEventListener("click", () => {
  qrCode.download({ name: "QR", extension: "png" });
});
