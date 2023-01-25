import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CompetencesType } from '../models/CompetencesType'
import CompetencesDetails from '../pages/CompetencesDetails'
import ButtonMyComp from './ButtonMyComp'

export type props ={
    comp:CompetencesType
    
}

const CompetencesCard = (props : props) => {

  return (
    <div>
        <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
            <IonCardTitle>{props.comp.nom}</IonCardTitle>
            <Link to={`/CompetencesDetails/${props.comp.id}`}>Details</Link>
            </IonCardHeader>


            
        </IonCard>
    </div>
  )
}

export default CompetencesCard