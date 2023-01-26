import { ProfilType } from "../models/ProfilType";

export class ProfilsServices {

    findAll = async () => {
        const response = await fetch('http://localhost:3000/profils')
        const data = await response.json()
      
        return data;
    }

    addprofil = (profil : ProfilType) => {
        return fetch('http://localhost:3000/profils', {
            method:'POST',
            body: JSON.stringify(profil),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }

    findById = async (id : string) => {
        const response = await fetch(`http://localhost:3000/profils/${id}`)
        const data = await response.json()
        return data;
    }



}

export const callProfilsServices = Object.freeze(new ProfilsServices())