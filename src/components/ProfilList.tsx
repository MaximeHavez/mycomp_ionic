import {IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail} from '@ionic/react'
import React from 'react'
import {Link} from 'react-router-dom'
import {ProfilType} from '../models/ProfilType'
import {apps, archive, heart, pencil, searchCircle, trash} from "ionicons/icons";
import {callProfilsServices} from "../services/ProfilsServices";

export type props = {
    profil: ProfilType
}

const ProfilList = (props: props) => {

    const deleteUser = () => {
        callProfilsServices.deleteById(props.profil.id)
    }

    return (
        <div>


            <IonItemSliding>

                    <IonItemOptions side="start">

                        <IonItemOption routerLink={`/ProfilDetail/${props.profil.id}`} color="success">

                            <IonIcon slot="end" icon={apps}></IonIcon>
                            Détail
                        </IonItemOption>

                    </IonItemOptions>


                <IonItem>
                    <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                    </IonThumbnail>
                    <IonLabel>{props.profil.firstname} {props.profil.lastname}</IonLabel>
                </IonItem>


                <IonItemOptions>
                    <IonItemOption routerLink={`/Profiles/${props.profil.id}`} color="warning">
                        <IonIcon slot="end" icon={pencil}></IonIcon>
                        Modifier
                    </IonItemOption>
                    <IonItemOption color="danger">
                        <IonIcon onClick={deleteUser} slot="end" icon={trash}></IonIcon>
                        Delete
                    </IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
        </div>
    )
}

export default ProfilList