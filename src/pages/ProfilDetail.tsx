import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProfilType } from '../models/ProfilType'
import { callProfilsServices } from '../services/ProfilsServices'

const ProfilDetail = () => {

  let {id} = useParams() as {id:string};

  const [currentProfil, setcurrentProfil] = useState<ProfilType>(new ProfilType("","",""))

  useEffect(() => {
    callProfilsServices.findById(id).then(profil => setcurrentProfil(profil))
  }, [])
  

  return (
    <div>
      <IonPage>
            <IonHeader>
        <IonToolbar>
          <IonTitle>Detail de la personne</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>{currentProfil.firstname} {currentProfil.lastname}</IonCardTitle>
      </IonCardHeader>
      
    </IonCard>
      </IonContent>
      </IonPage>
    </div>
  )
}

export default ProfilDetail