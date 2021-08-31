import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import React from "react";

const BmiControl: React.FC<{ onCalculate: () => void; onReset: () => void }> =
  ({ onCalculate, onReset }) => {
    return (
      <IonRow>
        <IonCol>
          <IonButton className="ion-text-left" onClick={onCalculate}>
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
          
        </IonCol>
        <IonCol>
          <IonButton onClick={onReset} className="ion-text-right">
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    );
  };
export default BmiControl;
