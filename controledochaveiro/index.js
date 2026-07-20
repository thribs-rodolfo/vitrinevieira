// controledochaveiro/index.js

document.addEventListener("DOMContentLoaded", () => {
  const btnWhatsapp = document.getElementById("btn-whatsapp-chaveiro")

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", () => {
      const phoneNumber = "5512992223481"
      const textMessage = encodeURIComponent(
        "Olá, Thiago! Quero instalar o programa Controle do Chaveiro da MyKey e estou ciente da taxa única de instalação de R$ 100,00",
      )

      const targetUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`
      window.open(targetUrl, "_blank")
    })
  }
})
