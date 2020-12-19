import { Observable } from "rxjs"

export interface IResponse<T>{
    data : T[],
    response : number ,
    message  : string
}