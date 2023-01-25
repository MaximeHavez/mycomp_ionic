import  uuid  from 'react-uuid';
export class CompetencesType {
    id:string
    nom:string
    img:string
    description:string

    constructor(nom:string, 
                img:string, 
                description:string) {
        this.id = uuid();
        this.nom = nom;
        this.img = img;
        this.description = description;
    }
}