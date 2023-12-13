import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const lightsInit = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(lightsInit);

  const lightsOnCount = lights.filter((light) => light.isOn).length;

  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleToggleAll(value) {
    const updatedLights = lights.map((light) => ({
      ...light,
      isOn: value === "on" ? true : false,
    }));

    setLights(updatedLights);
  }

  return (
    <Layout isDimmed={lightsOnCount === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        $lights={lights}
        onClick={handleToggle}
        onToggleAll={handleToggleAll}
        lightCounter={lightsOnCount}
      />
    </Layout>
  );
}
