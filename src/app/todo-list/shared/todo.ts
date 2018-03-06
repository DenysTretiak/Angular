import {database} from "firebase";

export class Todo{
    constructor(public text:string, public checked:boolean){

    }

    // toggle(value){
    //      value = !value;
    // }
}