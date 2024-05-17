import { Index } from "@upstash/vector";

type Product = {
    id: string
    imageId: string
    name: string
    size: 'S' | 'M' | "L"
    color: 'white' | 'beige' | 'blue' | 'green' | 'purple'
    price: number
}

export const db = new Index(
// {
//     token: process.env.UPSTASH_TOKEN,
//     url: process.env.UPSTASH_URL,
// }
)
