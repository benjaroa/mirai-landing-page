export const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (lang: string) => void) => {
    // const language = localStorage.getItem('i18nextLng');
    const [, language] = window.location.pathname.split("/");
    cb(['es', 'en'].includes(language) ? language : 'es');
  },
  init: () => { },
  cacheUserLanguage: () => { },
};
