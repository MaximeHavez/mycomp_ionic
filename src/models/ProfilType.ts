import  uuid  from 'react-uuid';
export class ProfilType {
    id:string
    firstname:string
    lastname:string
    img:string

    constructor(firstname:string,
                lastname:string, 
                img:string) {
        this.id = uuid();
        this.firstname = firstname;
        this.lastname = lastname;
        this.img = img;
    }
}