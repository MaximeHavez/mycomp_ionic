import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { warning } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompetencesType } from "../models/CompetencesType";
import { ProfilType } from "../models/ProfilType";
import { callCompetencesServices } from "../services/CompetencesServices";
import { callProfilsServices } from "../services/ProfilsServices";

const ProfilDetail = () => {
  let { id } = useParams() as { id: string };

  const [currentProfil, setcurrentProfil] = useState<ProfilType>(
    new ProfilType("", "", "", [])
  );
  const [currentComp, setCurrentComp] = useState<any[]>([]);

  useEffect(() => {
    callProfilsServices.findById(id).then((profil) => setcurrentProfil(profil));
  }, [id]);

  useEffect(() => {
    currentProfil.competences.map((i) =>
      callCompetencesServices.findById(i).then((res) => currentComp.push(res))
    );
  }, [currentProfil]);

  console.log(currentComp);

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
            <img
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
              
            />
            <IonCardHeader>
              <IonCardTitle>
                {currentProfil.firstname} {currentProfil.lastname}
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>

          {currentComp.map((i, index) => 
            <IonChip key={index} color="tertiary">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
              </IonAvatar>
              <IonLabel>{i.nom}</IonLabel>
  
            </IonChip>
          )}
        </IonContent>
      </IonPage>
    </div>
  );
};

export default ProfilDetail;
