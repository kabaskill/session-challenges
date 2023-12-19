import { getProductById } from "@/services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;
  console.log("🚀  id:", id);

  const product = getProductById(id);

  response.status(200).json(product);
}
