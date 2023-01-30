import {
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonSelect, IonSelectOption,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {callProfilsServices} from "../services/ProfilsServices";
import {ProfilType} from "../models/ProfilType";
import {NiveauxType} from "../models/NiveauxType";
import './ProfilsEdit.css'

const ProfilsEdit = () => {

    let {id} = useParams() as {id:string};

    const [currentUser, setCurrentUser] = useState<ProfilType>(new ProfilType("","","",new NiveauxType([],"")))

    useEffect(()=>{
        callProfilsServices.findById(id).then((res)=> setCurrentUser(res) )
    })
  return(
      <>
          <IonPage>
              <IonHeader>
                  <IonToolbar>
                      <IonTitle>Modifier {currentUser.firstname} {currentUser.lastname} </IonTitle>
                  </IonToolbar>
              </IonHeader>

          <IonContent fullscreen>
              <IonItem className="inputEdit" fill="outline">
                  <IonLabel position="floating">Nom de famille</IonLabel>
                  <IonInput placeholder={currentUser.lastname}></IonInput>
              </IonItem>
              <IonItem className="inputEdit" fill="outline">
                  <IonLabel position="floating">Prénom</IonLabel>
                  <IonInput placeholder={currentUser.firstname}></IonInput>
              </IonItem>

              {currentUser.niveaux.competences.map((i,index) =>
                  // eslint-disable-next-line react/jsx-no-undef
                  <IonList className="inputEdit" key={index}>
                      <IonItem>
                          <IonLabel>{i.competence.nom}</IonLabel>
                          <IonSelect interface="alert" placeholder={i.niveau}>
                              <IonSelectOption value="Debutant">Débutant</IonSelectOption>
                              <IonSelectOption value="Confirmé">Confirmé</IonSelectOption>
                              <IonSelectOption value="Expert">Expert</IonSelectOption>
                          </IonSelect>
                      </IonItem>
                  </IonList>
              )}

          </IonContent>
          </IonPage>
      </>
  )
}

export default ProfilsEdit;