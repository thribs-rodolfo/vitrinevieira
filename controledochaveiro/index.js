// controledochaveiro/index.js

document.addEventListener("DOMContentLoaded", () => {
  const btnWhatsapp = document.getElementById("btn-whatsapp-chaveiro")

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", () => {
      const phoneNumber = "5512992223481"
      const textMessage = encodeURIComponent(
        "Olá, Thiago! Acessei a página do Programa de Controle do Chaveiro da MyKey e gostaria de saber mais sobre o sistema com taxa única de instalação de R$ 100.",
      )

      const targetUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`
      window.open(targetUrl, "_blank")
    })
  }
})
