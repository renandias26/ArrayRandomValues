import { Products } from "./Products.Type";

class RandomValue{
    private Array: Array<Products>

    constructor(Array: Array<Products>){
        this.Array = Array
    }

    getRandomValue(Quantity: number): Products[]{
        if(this.Array.length < Quantity) return new Array<Products>

        let RandomValues: Products[] = new Array<Products>

        while(this.Array.length > Quantity){
            const RandomIndex:number = Math.floor(Math.random() * this.Array.length)

            if(!RandomValues.includes(this.Array[RandomIndex])){
                RandomValues.push(this.Array[RandomIndex])
            }
        }

        return RandomValues
    }
}