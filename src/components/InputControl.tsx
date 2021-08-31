import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControl: React.FC<{
  selected: "mkg" | "ftlbs";
  onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
  const inputChangeHandler = (e: CustomEvent) => {
    props.onSelectValue(e.detail.value);
  };
  return (
    <>
      <IonSegment value={props.selected} onIonChange={inputChangeHandler}>
        <IonSegmentButton value="mkg">
          <IonLabel>m/kg</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="ftlbs">
          <IonLabel>ft/lbs</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
};
export default InputControl;
