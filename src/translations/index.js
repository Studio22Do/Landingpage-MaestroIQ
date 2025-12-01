import { translations as es } from "./es";
import { translations as en } from "./en";

export const translations = {
  ES: es,
  EN: en,
};

export const getTranslation = (language, path) => {
  const keys = path.split(".");
  let value = translations[language];
  
  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return path; // Retornar la ruta si no se encuentra la traducción
    }
  }
  
  return value;
};

