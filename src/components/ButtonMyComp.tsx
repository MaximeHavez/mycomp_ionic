import { IonButton } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import CompetencesDetails from '../pages/CompetencesDetails'

export type props = {
    
    titre: string
}

const ButtonMyComp = (props : props) => {
  return (
    <div>
        <Link to="/CompetencesDetails"><IonButton>{props.titre}</IonButton></Link>
    </div>
  )
}

export default ButtonMyComp