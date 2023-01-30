import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonRouterOutlet,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import { CompetencesType } from '../models/CompetencesType'
import { callCompetencesServices } from '../services/CompetencesServices'
import {CompetenceType} from "../models/CompetenceType";
import './CompetencesDetail.css';

const CompetencesDetails = () => {

    let {id} = useParams() as {id:string};

    const [currentComp, setCurrentComp] = useState<CompetenceType>()

    useEffect(() => {
            callCompetencesServices.findById(id).then(res => setCurrentComp(res))
    }, [])
    
    const deleteComp = () : any => {
        callCompetencesServices.deleteById(id)
    }

  return (

    <>
        <IonPage>

        <IonHeader>
        <IonToolbar>
          <IonTitle>Détail de la compétence</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
            <IonCardTitle>{currentComp?.nom}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
            {currentComp?.description}
        </IonCardContent>
    </IonCard>

    <IonButton className="btnSupp" onClick={deleteComp} color="danger">Supprimer</IonButton>
      </IonContent>
        </IonPage>
      <div>CompetencesDetails</div>



    </>
  )
}

export default CompetencesDetails