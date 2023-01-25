import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Competences.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Compétences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        {/* debut Card */}
        <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content. Nothing more, nothing less.
        </IonCardContent>
        </IonCard>
        {/* Fin card */}

        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
