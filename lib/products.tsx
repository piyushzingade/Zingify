interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

export const Products: Product[] = [
    {
        id: "1",
        name: "Nike Air Max 270",
        price: 15000,
        imageUrl: "1.png"
    },
    {
        id: "2",
        name: "Adidas Ultraboost 21",
        price: 18000,
        imageUrl: "2.png"
    },
    {
        id: "3",
        name: "Puma RS-X Reinvent",
        price: 12000,
        imageUrl: "3.png"
    },
    {
        id: "4",
        name: "Reebok Nano X1",
        price: 14000,
        imageUrl: "4.png"
    },
    {
        id: "5",
        name: "Under Armour HOVR Phantom",
        price: 16000,
        imageUrl: "5.png"
    },

]