import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRoute,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Profiles from './pages/Profiles';
import Competences from './pages/Competences';
import { people , analytics} from 'ionicons/icons';
import CompetencesDetails from './pages/CompetencesDetails';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Profiles">
            <Profiles />
          </Route>
          <Route path="/Competences">
            <Competences />
          </Route>
          <Route exact path="/">
            <Redirect to="/Competences" />
          </Route>
          <Route path="/CompetencesDetails/:id" component={CompetencesDetails} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          
          <IonTabButton tab="Competences" href="/Competences">
            <IonIcon icon={analytics} />
            <IonLabel>Competences</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profiles" href="/Profiles">
            <IonIcon icon={people} />
            <IonLabel>Profiles</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>



    </IonReactRouter>
  </IonApp>
);

export default App;
