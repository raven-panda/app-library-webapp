import { Resource, ResourceLanguage } from "i18next";

// Recreating more type specified interface for language to make sure that all language props are present in each resource
interface CustomResource extends Resource {
  [language: string]: CustomLanguage;
}

interface CustomLanguage extends ResourceLanguage {
  [namespace: string]: {
    loading: string;
    pageNotFound: string;
    pageNotFoundBack: string;
  };
}

const resources: CustomResource = {
  en: {
    translation: {
      loading: "Loading",
      pageNotFound: "Oops! This page doesn't exists.",
      pageNotFoundBack: "Go back to previous page"
    }
  },
  fr: {
    translation: {
      loading: "Chargement",
      pageNotFound: "Oops! Cette page n'existe pas.",
      pageNotFoundBack: "Revenir en arrière"
    }
  }
};

export default resources;