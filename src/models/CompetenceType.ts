import uuid from "react-uuid";

export class CompetenceType {
    id:string
    nom:string
    img:string
    description : ""

    constructor(nom: string, img: string, description: "") {
        this.id = uuid()
        this.nom = nom;
        this.img = img;
        this.description = description;
    }
}