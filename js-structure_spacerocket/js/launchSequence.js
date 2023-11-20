import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "../js/core/load.js";
import { fuel } from "../js/core/fuel.js";
import { countdown } from "../js/core/countdown.js";
import { liftoff } from "../js/core/liftoff.js";
import { deployPayload } from "../js/core/deploy.js";

// Implement the launch sequence function here and export it as the default export.
export default function launchSequence() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();
  liftoff();
  deployPayload();
}
