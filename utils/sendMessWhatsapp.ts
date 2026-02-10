export const sendMessWhatsapp = (message : string)=> {
    const encodedMessage = encodeURIComponent(message)

    // 👉 Numéro du vendeur (à adapter)
    const sellerNumber = "2250757731144"

    const whatsappUrl = `https://wa.me/${sellerNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
}