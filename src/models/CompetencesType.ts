import  uuid  from 'react-uuid';
import {CompetenceType} from "./CompetenceType";
export class CompetencesType {

    competence : CompetenceType
    niveau : string


    constructor(competence: CompetenceType, niveau: string) {
        this.competence = competence;
        this.niveau = niveau;
    }
}