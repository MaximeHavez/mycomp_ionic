import {CompetencesType} from "./CompetencesType";

export class NiveauxType {
    competences : CompetencesType[]
    niveau : string


    constructor(competences: CompetencesType[], niveau: string) {
        this.competences = competences;
        this.niveau = niveau;
    }
}