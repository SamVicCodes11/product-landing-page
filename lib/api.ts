import axios from "axios";

const api = axios.create({
  baseURL: "https://frontendcodingtest-production.up.railway.app/",
  headers: { "Content-Type": "application/json" },
});

export async function fetchProducts(): Promise<ApiProduct[]> {
  const response = await api.get("/api/products");
  return response.data;
}
