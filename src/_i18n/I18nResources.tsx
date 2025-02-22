import { Resource, ResourceLanguage } from "i18next";

interface ToggleResource {
  false: string;
  true: string;
}

// Recreating more type specified interface for language to make sure that all language props are present in each resource
interface CustomResource extends Resource {
  [language: string]: CustomLanguage;
}

interface CustomLanguage extends ResourceLanguage {
  translation: {
    loading: string;
    pageNotFound: string;
    pageNotFoundBack: string;

    welcomePage: {
      title: string;
      subTitle: string;
    }

    form: {
      searchAllInput: string;
      searchModeToggle: ToggleResource;
    }
  };
}

const resources: CustomResource = {
  en: {
    translation: {
      loading: "Loading",
      pageNotFound: "Oops! This page doesn't exists.",
      pageNotFoundBack: "Go back to previous page",
      
      welcomePage: {
         title: "the online library",
         subTitle: "Your favorite books in just a few clicks"
      },

      form: {
        searchAllInput: "Search a book title, an author, an editor, etc.",
        searchModeToggle: {
          false: "Advanced search",
          true: "Simple search"
        }
      }
    }
  },
  fr: {
    translation: {
      loading: "Chargement",
      pageNotFound: "Oops! Cette page n'existe pas.",
      pageNotFoundBack: "Revenir en arrière",

      welcomePage: {
        title: "la bibliothèque en ligne",
        subTitle: "Vos livres préféré en quelque clics"
      },

      form: {
        searchAllInput: "Rechercher un livre, un auteur, un éditeur, etc.",
        searchModeToggle: {
          false: "Recherche avancée",
          true: "Recherche simple"
        } 
      }
    }
  }
};

export default resources;