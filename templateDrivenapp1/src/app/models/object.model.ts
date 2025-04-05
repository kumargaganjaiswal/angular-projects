export interface IObject {
    id: string,
    name: string,
    data: IData
}

export interface IData {
    generation: string,
    price: string,
    capacity: string,
    color: string
}