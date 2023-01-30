import { CompetencesType } from "../models/CompetencesType";
import {CompetenceType} from "../models/CompetenceType";

export class CompetencesServices {

    findAll = async () => {
        const response = await fetch('http://localhost:3000/competences')
        const data = await response.json()
        return data;
    }

    findById = async (id : string) => {
        const response = await fetch(`http://localhost:3000/competences/${id}`)
        const data = await response.json()
        return data;
    }

    addComp = (comp : CompetenceType) => {
        return fetch('http://localhost:3000/Competences', {
            method:'POST',
            body: JSON.stringify(comp),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }
    
}

export const callCompetencesServices = Object.freeze(new CompetencesServices())