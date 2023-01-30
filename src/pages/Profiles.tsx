import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTextarea, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { ProfilType } from '../models/ProfilType';
import { callProfilsServices } from '../services/ProfilsServices';
import './Profiles.css';
import ProfilList from '../components/ProfilList';
import {NiveauxType} from "../models/NiveauxType";
import {CompetencesType} from "../models/CompetencesType";

const Profiles: React.FC = () => {

  const [profils, setProfils] = useState<ProfilType[]>([])
  const [newProfil, setNewProfil] = useState<ProfilType>(new ProfilType("","","", new NiveauxType([],"")))

  useEffect(() => {
      callProfilsServices.findAll().then(res => setProfils(res))
  }, [])
  
  const handleChangeNom = (event : any) => {
    setNewProfil({...newProfil, lastname:event.target.value})
  }

  const handleChangePrenom = (event : any) => {
    setNewProfil({...newProfil, firstname:event.target.value})
  }

  const handleClickAdd = () => {
    callProfilsServices.addprofil(newProfil)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profiles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Liste des profiles</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>

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
            <IonLabel>Nom de la personne</IonLabel>
            <IonInput onIonChange={handleChangeNom} placeholder="Nom"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Prenom de la personne</IonLabel>
            <IonInput onIonChange={handleChangePrenom} placeholder="Nom"></IonInput>
          </IonItem>
          <IonButton onClick={handleClickAdd}>Créer</IonButton>
          </div>
        </IonContent>
      </IonModal>

        <IonList>

        {profils.map((i, index) => 
          <ProfilList key={index} profil={i}/>
        )}
          

          
        </IonList>
      </IonCardContent>
    </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Profiles;
