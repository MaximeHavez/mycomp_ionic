import { IonItem, IonLabel, IonThumbnail } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProfilType } from '../models/ProfilType'

export type props = {
    profil : ProfilType
}

const ProfilList = (props : props) => {
  return (
    <div>
        <Link to={`/ProfilDetail/${props.profil.id}`}>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonThumbnail>
            <IonLabel>{props.profil.firstname} {props.profil.lastname}</IonLabel>
          </IonItem>
        </Link>
    </div>
  )
}

export default ProfilList