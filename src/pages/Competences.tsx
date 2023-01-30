import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ButtonMyComp from '../components/ButtonMyComp';
import CompetencesCard from '../components/CompetencesCard';
import ExploreContainer from '../components/ExploreContainer';
import { CompetencesType } from '../models/CompetencesType';
import { callCompetencesServices } from '../services/CompetencesServices';
import { add} from 'ionicons/icons';
import './Competences.css';
import {NiveauxType} from "../models/NiveauxType";
import {CompetenceType} from "../models/CompetenceType";

const Competences = () => {

const [comp, setComp] = useState<CompetenceType[]>([])

const [newComp, setNewComp] = useState<CompetenceType>(new CompetenceType("","",""))

useEffect(() => {
  callCompetencesServices.findAll().then(res => setComp(res))
}, [])

const handleChangeNom = (event : any) => {
  setNewComp({...newComp, nom: event.target.value})
}

const handleChangeDesc = (event : any) => {
  setNewComp({...newComp, description:event.target.value})
}

const handleClickAdd = () => {
  callCompetencesServices.addComp(newComp)
 }

return (
  <IonPage>


    <IonHeader>
      <IonToolbar>
        <IonTitle>Compétences</IonTitle>
      </IonToolbar>
    </IonHeader>


    <IonContent fullscreen>


    <IonButton id="open-modal" expand="block">
        Ajouter
      </IonButton>
      <IonModal
        trigger="open-modal"
        initialBreakpoint={0.50}
        breakpoints={[0, 0.30, 0.5, 0.75]}
        handleBehavior="cycle"
      >
        <IonContent className="ion-padding">
          <div className="ion-margin-top">
          <IonItem>
            <IonLabel>Nom de la compétence</IonLabel>
            <IonInput onIonChange={handleChangeNom} placeholder="Nom"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Description</IonLabel>
            <IonTextarea  onIonChange={handleChangeDesc} placeholder="Ecrivez ici"></IonTextarea>
          </IonItem>
          <IonButton onClick={handleClickAdd}>Créer</IonButton>
          </div>
        </IonContent>
      </IonModal>


    {comp.map((item, index)=>     
        <CompetencesCard key={index} comp={item} />

    )}

    </IonContent>
  </IonPage>
);
};

export default Competences;
