import {
  isPlayreadySupported,
  isWidevineSupported,
  isFairplaySupported,
} from "../src/index.ts";

function resultClassName(supported) {
  return supported ? "success" : "failed";
}

document.addEventListener("DOMContentLoaded", async () => {
  const wrapper = document.querySelector("#wrapper");

  const widevineIsSupported = await isWidevineSupported();
  const playreadyIsSupported = await isPlayreadySupported();
  const fairplayIsSupported = await isFairplaySupported();

  const widevineResult = document.querySelector("p.widevine");
  const playreadyResult = document.querySelector("p.playready");
  const fairplayResult = document.querySelector("p.fairplay");

  widevineResult.className = resultClassName(widevineIsSupported);
  playreadyResult.className = resultClassName(playreadyIsSupported);
  fairplayResult.className = resultClassName(fairplayIsSupported);

  if (!widevineIsSupported && !playreadyIsSupported && !fairplayIsSupported) {
    wrapper.innerHTML += `<p>No DRM is supported</p>`;
  }
});
