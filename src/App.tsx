import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  IonAlert,
} from "@ionic/react";
/* Core CSS required for Ionic components to work properly */

import "@ionic/react/css/core.css";
import React, { useRef, useState } from "react";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import BmiControl from "./components/BmiControls";
import Result from "./components/Result";
import InputControl from "./components/InputControl";

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [alert, setAlert] = useState<string>();
  const [calUnit, setCalUnit] = useState<"mkg" | "ftlbs">("mkg");
  const weight = useRef<HTMLIonInputElement>(null);
  const height = useRef<HTMLIonInputElement>(null);
  const calculate = () => {
    const inputWeight = weight.current!.value;
    const inputHeight = height.current!.value;
    if (
      !inputHeight ||
      !inputWeight ||
      +inputHeight <= 0 ||
      +inputWeight <= 0
    ) {
      setAlert("Please enter a value (non-negative) number");
      return;
    }
    const weightConversionScale = calUnit === "ftlbs" ? 2.2 : 1;
    const mainWeight = +inputWeight / weightConversionScale;
    const HeightConversionSCale = calUnit === "ftlbs" ? 3.28 : 1;
    const MainHeight = +inputHeight / HeightConversionSCale;
    const bmi = mainWeight / (MainHeight * MainHeight);

    setCalculatedBmi(bmi);
    console.log(calculatedBmi);
  };
  const reset = () => {
    weight.current!.value = "";
    height.current!.value = "";
  };
  const Error = () => {
    setAlert("");
  };
  const calUnithandlert = (selected: "mkg" | "ftlbs") => {
    setCalUnit(selected);
  };
  return (
    <>
      <IonAlert
        isOpen={!!alert}
        message={alert}
        buttons={[{ text: "okay", handler: Error }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl
                  selected={calUnit}
                  onSelectValue={calUnithandlert}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Your Height {calUnit === "mkg" ? "meters" : "feet"}
                  </IonLabel>
                  <IonInput type="number" ref={height} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonItem>
                <IonLabel position="floating">
                  Your weight {calUnit === "mkg" ? "kg" : "lbs"}
                </IonLabel>
                <IonInput type="number" ref={weight} />
              </IonItem>
            </IonRow>
            <BmiControl onCalculate={calculate} onReset={reset} />
            {calculatedBmi && <Result calculatedBmi={calculatedBmi} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default App;
