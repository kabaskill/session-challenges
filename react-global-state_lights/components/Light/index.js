import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ id, name, $isOn, onClick }) {
  return (
    <LightButton id={id} type="button" onClick={onClick} $isOn={$isOn}>
      <Icon $isOn={$isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{$isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
