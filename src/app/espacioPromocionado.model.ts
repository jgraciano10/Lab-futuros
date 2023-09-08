import { persona } from "./persona.model";

export class espacioPromocionado extends persona{

    constructor(name:string, email:string, password:string,
                public day:string, public space:string, public nameUnder:string, 
                public numberOfParticipants: string, public description:string){
        super(name, email, password)
    }
}