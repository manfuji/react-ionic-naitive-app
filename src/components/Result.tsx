import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const Result: React.FC<{ calculatedBmi: number }> = ({ calculatedBmi }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h1>Your body mass is:</h1>
            <h3>{calculatedBmi.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};
export default Result;
