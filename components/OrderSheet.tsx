"use client"

import { ReactNode, useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getGreeting } from "@/utils/getGreeting"
import { sendMessWhatsapp } from "@/utils/sendMessWhatsapp"

interface OrderSheetProps {
  priceUnit: number
  nomProduit: string
  children: ReactNode
}

export function OrderSheet({ priceUnit, children, nomProduit }: OrderSheetProps) {
  // 🔹 Contrôle de la Sheet
  const [open, setOpen] = useState(false)

  // 🔹 États du formulaire
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [location, setLocation] = useState("")
  const [specification, setSpecification] = useState("")
  const [quantity, setQuantity] = useState(1)

  const totalPrice = quantity * priceUnit

  const handleSubmit = () => {
    // 🔐 Validation simple
    if (!name.trim() || !whatsapp.trim() || !location.trim()) {
      alert("Veuillez remplir tous les champs obligatoires.")
      return
    }

    if (quantity <= 0) {
      alert("La quantité doit être supérieure à 0.")
      return
    }

    const message = `
${getGreeting()} 👋  
Je souhaite passer une commande.

🛍 Produit : ${nomProduit}
📦 Quantité : ${quantity}
🧾 Spécification : ${specification || "Non précisé"}
💰 Prix : ${totalPrice.toLocaleString()} FCFA

👤 Nom : ${name}
📍 Lieu de livraison : ${location}
📞 Numéro WhatsApp : ${whatsapp}

Merci 🙂`

    console.log(message)
    sendMessWhatsapp(message)

    // Fermer la Sheet après succès
    setOpen(false)

    // Réinitialiser les champs
    setName("")
    setWhatsapp("")
    setLocation("")
    setSpecification("")
    setQuantity(1)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* asChild permet au bouton enfant de déclencher la sheet */}
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="bottom" className="rounded-t-2xl p-6 max-h-[90vh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-center text-xl font-bold">COMMANDE</SheetTitle>
        </SheetHeader>

        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          {/* Nom */}
          <div className="flex flex-col gap-1">
            <Label>Nom *</Label>
            <Input
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col gap-1">
            <Label>Numéro WhatsApp *</Label>
            <Input
              placeholder="+225 07 00 00 00 00"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>

          {/* Lieu */}
          <div className="flex flex-col gap-1">
            <Label>Lieu de livraison *</Label>
            <Input
              placeholder="Ex : Yopougon, Angré..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Spécification */}
          <div className="flex flex-col gap-1">
            <Label>Spécification produit</Label>
            <Select onValueChange={setSpecification}>
              <SelectTrigger>
                <SelectValue placeholder="Couleur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vert">Vert</SelectItem>
                <SelectItem value="blanc">Blanc</SelectItem>
                <SelectItem value="rouge">Rouge</SelectItem>
                <SelectItem value="noir">Noir</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Quantité */}
          <div className="flex flex-col gap-1">
            <Label>Quantité *</Label>
            <Input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          {/* Prix total */}
          <div className="bg-gray-100 rounded-lg p-4 flex justify-between">
            <span>Prix total</span>
            <span className="font-bold">{totalPrice.toLocaleString()} FCFA</span>
          </div>

          <Button type="submit" className="mt-4 rounded-xl p-4">
            Valider la commande
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
