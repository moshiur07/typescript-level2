// utility types =>
//* pick, Omit => pick took the keys that i need, on the otherhand omit removes the keys and make another object without those selective keys

type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
    color?: string,

}

type ProductSummery = Pick<Product, "id" | "name" | "price">


type ProductWithoutStock = Omit<Product,"stock"|"color">


type ProductWithColor = Required<Product>











const iphoneSum: ProductSummery = {
    id: 15,
    name: 'iphone12 ',
    price: 41856,
}

