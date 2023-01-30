import { CompetencesType } from './CompetencesType';
import  uuid  from 'react-uuid';
import {NiveauxType} from "./NiveauxType";
export class ProfilType {
    id:string
    firstname:string
    lastname:string
    img:string
    niveaux : NiveauxType

    constructor(firstname:string,
                lastname:string, 
                img:string,
                niveaux:NiveauxType) {
        this.id = uuid();
        this.firstname = firstname;
        this.lastname = lastname;
        this.img = img;
        this.niveaux=niveaux;
    }
}