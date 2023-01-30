import {
    IonButton,
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
import competences from "./Competences";

const ProfilsEdit = () => {

    let {id} = useParams() as {id:string};

    const [currentUser, setCurrentUser] = useState<ProfilType>(new ProfilType("","","",new NiveauxType([],"")))

    useEffect(()=>{
        callProfilsServices.findById(id).then((res)=> setCurrentUser(res) )
    }, [])

    const handleChangeNom = (event : any) => {
        setCurrentUser({...currentUser, lastname: event.target.value})
    }

    const handleChangePrenom = (event : any) => {
        setCurrentUser({...currentUser, firstname: event.target.value})
    }

    const handleChangeCompLvl = (event : any, index : number) => {
        console.log(index)
        setCurrentUser({...currentUser, niveaux:{...currentUser.niveaux, competences:[...currentUser.niveaux.competences, {...currentUser.niveaux.competences[index], niveau:event.target.value}]}})
    }

    const handleCLickEdit = () => {
        callProfilsServices.updateProfil(id, currentUser)
    }
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
                  <IonInput onIonChange={handleChangeNom} placeholder={currentUser.lastname}></IonInput>
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
                          <IonSelect onIonChange={(e) => handleChangeCompLvl(e, index)} interface="alert" placeholder={i.niveau}>
                              <IonSelectOption value="Debutant">Débutant</IonSelectOption>
                              <IonSelectOption value="Confirmé">Confirmé</IonSelectOption>
                              <IonSelectOption value="Expert">Expert</IonSelectOption>
                          </IonSelect>
                      </IonItem>
                  </IonList>
              )}

              <IonButton onClick={handleCLickEdit} className="inputEdit" color="warning">Modifier</IonButton>
          </IonContent>
          </IonPage>
      </>
  )
}

export default ProfilsEdit;