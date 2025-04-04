export interface IObject {
    id: string,
    name: string,
    data: IData,
    createdAt: Date
}

export interface IData {
    generation: string,
    price: string,
    capacity: string,
    color: string
}