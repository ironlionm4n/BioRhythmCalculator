import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime
} from '@ionic/react'
import React from 'react'
import BiorhythmCard from './components/BiorhythmCard'
import { useLocalStorage } from './helpers/hooks'

function App () {
  const [enteredBirthDate, setEnteredBirthDate] = useLocalStorage('birthdate', '')
  const [targetDate, setTargetDate] = useLocalStorage('targetDate', new Date().toISOString())

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>

        <IonItem>
          <IonLabel position="floating">Date of Birth: </IonLabel>
          <IonDatetime
            displayFormat='MMM D YYYY'
            onIonChange={event => {
              setEnteredBirthDate(event.detail.value)
            }}
            value={enteredBirthDate}
          />
        </IonItem>
        <IonItem>
          <IonLabel position='fixed'>Target Date: </IonLabel>
          <IonDatetime displayFormat='MMM D YYYY' onIonChange={event => {
            setTargetDate(event.detail.value)
          }}
          value={targetDate}
          max='2025-31-12'
          />
        </IonItem>
        {enteredBirthDate && (
          <BiorhythmCard birthDate={enteredBirthDate} targetDate={targetDate} />
        )}
      </IonContent>
    </IonApp>
  )
}

export default App
