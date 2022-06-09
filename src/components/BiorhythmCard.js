import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react'
import React from 'react'
import { formatDate } from '../helpers/formatDate'
import { calculateBiorhythms } from '../helpers/calculations'
import BiorhythmChart from './BiorhythmChart'
import './BiorhythmCard.css'



const BiorhythmCard = ({ birthDate, targetDate }) => {

  const {physical, emotional, mental} = calculateBiorhythms(birthDate, targetDate)

  return (
    <IonCard className='biorhythm-card ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>Target Date: {formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <p className='physical'>Physical: {physical.toFixed(4)}%</p>
        <p className='emotional'>Emotional: {emotional.toFixed(4)}%</p>
        <p className='mental'>Mental: {mental.toFixed(4)}%</p>
      </IonCardContent>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
      </IonCardContent>
    </IonCard>
  )
}

export default BiorhythmCard
