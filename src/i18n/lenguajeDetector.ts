export const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (lang: string) => void) => {
    const language = localStorage.getItem('i18nextLng');
    cb(language || 'es');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
