
export interface Product{
    id: number,
    name: string,
    price: number,
    description: string,
    quanity: number
}

export interface CartItem{
    id:number,
    name:string,
    price:number,
    amount:number
}

export const products = [
    {
        id: 1,
        name: 'iPhone 13',
        price: 25900,
        description: 'ใครรวยก็จัด Pro ไปเลย',
        quanity: 1
    },
    {
        id: 2,
        name: 'iPhone 13 Pro',
        price: 38900,
        description: 'แพงกว่า iPhone 13',
        quanity: 1
    }
]