export interface Product {
  id: string
  nomProduit: string
  description: string
  quantité: string
  prix: number
  productUrl: string
  mediaUrl: string
  spProduit: Map<string, string>
}