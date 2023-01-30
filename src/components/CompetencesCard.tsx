import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CompetencesType } from '../models/CompetencesType'
import CompetencesDetails from '../pages/CompetencesDetails'
import ButtonMyComp from './ButtonMyComp'

import './CompetencesCard.css'
import {CompetenceType} from "../models/CompetenceType";

export type props ={
    comp:CompetenceType
    
}

const CompetencesCard = (props : props) => {



  return (
    <div>
        <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader className='cardHeader'>
            <IonCardTitle>{props.comp.nom}</IonCardTitle>
            <IonButton routerLink={`/CompetencesDetails/${props.comp.id}`} color="medium">Détail</IonButton>
            </IonCardHeader>

        </IonCard>
    </div>
  )
}

export default CompetencesCard