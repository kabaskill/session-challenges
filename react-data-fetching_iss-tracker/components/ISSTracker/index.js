import Controls from "../Controls/index";
import Map from "../Map/index";

import { SWRConfig } from "swr";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { data, isLoading, mutate, error } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  console.log("🚀 data:", data);
  console.log("isLoading:", isLoading);
  console.log("error:", error);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data && !isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Map
        longitude={isLoading ? 0 : data.longitude}
        latitude={isLoading ? 0 : data.latitude}
      />
      <Controls
        longitude={isLoading ? 0 : data.longitude}
        latitude={isLoading ? 0 : data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
