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
      delete: string;
      noValueAvailable: string;

      author: string;
      title: string;
      editor: string;
      isbn: string;
      
      genre: string;
      genrePlaceholder: string;

      contentSection: string;
      priceReviewsSection: string;

      searchButtonAriaLabel: string;
      searchFieldAriaLabel: string;
      resetButtonAriaLabel: string;
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
        delete: "Delete",
        noValueAvailable: "No value available",

        author: "Search an author",
        title: "Search a title",
        editor: "Search an editor",
        isbn: "Search an ISBN",

        genre: "Genre",
        genrePlaceholder: "Select a genre",

        contentSection: "Content and classification",
        priceReviewsSection: "Price and reviews",

        searchButtonAriaLabel: "Search button",
        searchFieldAriaLabel: "Field input for text to search",
        resetButtonAriaLabel: "Reset text field",
        searchModeToggle: {
          false: "Advanced search",
          true: "Simple search"
        },
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
        delete: "Supprimer",
        noValueAvailable: "Aucune valeur disponible",

        author: "Rechercher un auteur",
        title: "Rechercher un titre",
        editor: "Rechercher un éditeur",
        isbn: "Rechercher un ISBN",

        contentSection: "Contenu et classification",
        priceReviewsSection: "Prix et avis",

        genre: "Genre",
        genrePlaceholder: "Sélectionnez un genre",

        searchButtonAriaLabel: "Boutton rechercher",
        searchFieldAriaLabel: "Champ de recherche",
        resetButtonAriaLabel: "Effacer le texte du champ",
        searchModeToggle: {
          false: "Recherche avancée",
          true: "Recherche simple"
        }
      }
    }
  }
};

export default resources;