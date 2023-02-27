type TKeySystem = {
  ks: string;
  // config: MediaKeySystemConfiguration[];
};

// enum InitDataTypes {
//   WEBM = "webm",
//   CENC = "cenc",
// }

const defaultConfig: MediaKeySystemConfiguration[] = [
  {
    initDataTypes: ["cenc"],
    audioCapabilities: [
      {
        contentType: 'audio/mp4;codecs="mp4a.40.2"',
      },
    ],
    videoCapabilities: [
      {
        contentType: 'video/mp4;codecs="avc1.42E01E"',
      },
    ],
  },
];

const testKeySystem = ({
  // config,
  ks,
}: TKeySystem): Promise<MediaKeySystemAccess> =>
  navigator.requestMediaKeySystemAccess(ks, defaultConfig);

const isMediaKeySupported = async (keySystem: TKeySystem): Promise<boolean> => {
  try {
    const access = await testKeySystem(keySystem);
    await access.createMediaKeys();

    return true;
  } catch (_) {
    return false;
  }
};

export const isPlayreadySupported = async (): Promise<boolean> => {
  if (!navigator.requestMediaKeySystemAccess) return false;

  return isMediaKeySupported({ ks: "com.microsoft.playready" });
};

export const isPlayreadyChromecastSupported = async (): Promise<boolean> => {
  if (!navigator.requestMediaKeySystemAccess) return false;

  return isMediaKeySupported({ ks: "com.chromecast.playready" });
};

export const isPlayreadyRecommendedSupported = async (): Promise<boolean> => {
  if (!navigator.requestMediaKeySystemAccess) return false;

  return isMediaKeySupported({ ks: "com.microsoft.playready.recommended" });
};

export const isWidevineSupported = async (): Promise<boolean> => {
  if (!navigator.requestMediaKeySystemAccess) return false;

  return isMediaKeySupported({ ks: "com.widevine.alpha" });
};

export const isFairplaySupported = async (): Promise<boolean> => {
  if (!navigator.requestMediaKeySystemAccess) return false;

  return isMediaKeySupported({ ks: "com.apple.fps" });
};

export const isFairplayLegacySupported = async (): Promise<boolean> => {
  if (!navigator.requestMediaKeySystemAccess) return false;

  return isMediaKeySupported({ ks: "com.apple.fps.1_0" });
};
