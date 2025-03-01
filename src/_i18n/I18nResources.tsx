import {Resource, ResourceLanguage} from "i18next";
import {localesEnUs, localesFrFr} from "./I18nLocalesResources";

/*interface ToggleResource {
  false: string;
  true: string;
}*/

// Recreating more type specified interface for language to make sure that all language props are present in each resource
interface CustomResource extends Resource {
  [language: string]: CustomLanguage;
}

interface CustomLanguage extends ResourceLanguage {
  translation: {
    loading: string;
    pageNotFound: string;
    pageNotFoundBack: string;
    invalidForm: string;

    thisFieldIsRequired: string;
    thisFieldIsInvalid: string;

    welcomePage: {
      title: string;
      subTitle: string;
    };

    form: {
      searchAllInput: string;
      delete: string;
      noValueAvailable: string;
      searchValue: string;

      browseGeneral: string;

      author: string;
      title: string;
      editor: string;
      isbn: string;

      genre: string;
      genrePlaceholder: string;

      theme: string;
      themePlaceholder: string;

      targetAudience: string;
      targetAudiencePlaceholder: string;

      language: string;
      languagePlaceholder: string;

      formatPlaceholder: string;

      minReviewsNumber: string;

      priceRange: string,

      reviewsNumberRange: string;

      contentSection: string;
      priceReviewsSection: string;

      searchButtonAriaLabel: string;
      searchFieldAriaLabel: string;
      resetButtonAriaLabel: string;
      inputAriaLabel: string;
      advancedSearch: string;

      submit: string;
      search: string;
    };

    assertions: {
      atLeastOneValueSet: string;
      atLeastOneValueSpecifiedSet: string;

      numberNotZero: string;
    }

    bookGenre: {
      novel: string;
      shortStory: string;
      poesy: string;
      drama: string;
      essay: string;
      biography: string;
      autobiography: string;
      tale: string;
      comic: string;
      manga: string;
      travelStory: string;
      children: string;
      other: string;
    };

    bookTheme: {
      loveAndPassion: string;
      friendshipAndHumanRelation: string;
      questForIdentity: string;
      goodAndEvil: string;
      libertyAndOppression: string;
      travelExploration: string;
      warConsequences: string;
      justiceInjustice: string;
      fantasyAndSupernatural: string;
      scienceProgressAndExcesses: string;
      dreamImaginary: string;
      timeMemory: string;
      lonelinessIsolation: string;
      famillyHeritage: string;
      destinyFreewill: string;
      other: string;
    };

    bookTargetAudience: {
      academic: string;
      entertainment: string;
      personalDevelopment: string;
      committedAndSocial: string;
      foreignCulture: string;
      visuallyImpaired: string;
      peopleWithReadingDifficulties: string;
      other: string;
    };

    layout: {
      refineYourSearch: string;
    };

    locales: Record<string, string>;
  };
}

const resources: CustomResource = {
  en: {
    translation: {
      loading: "Loading",
      pageNotFound: "Oops! This page doesn't exists.",
      pageNotFoundBack: "Go back to previous page",
      invalidForm: "Error(s) found in the form.",

      thisFieldIsRequired: "This field is required",
      thisFieldIsInvalid: "This field is invalid",

      welcomePage: {
        title: "the online library",
        subTitle: "Your favorite books in just a few clicks"
      },

      form: {
        searchAllInput: "Search a book title, an author, an editor, etc.",
        delete: "Delete",
        noValueAvailable: "No value available",
        searchValue: "Search a value",

        browseGeneral: "General informations",

        author: "Search an author",
        title: "Search a title",
        editor: "Search an editor",
        isbn: "Search an ISBN",

        genre: "Genre",
        genrePlaceholder: "Select a genre",

        theme: "Theme",
        themePlaceholder: "Select a theme",

        targetAudience: "Target public",
        targetAudiencePlaceholder: "Select a target public",

        minReviewsNumber: "Minimum reviews amount",

        language: "Language",
        languagePlaceholder: "Select a language",

        formatPlaceholder: "Select a format",

        contentSection: "Content and classification",
        priceReviewsSection: "Price and reviews",

        priceRange: "Price range",

        reviewsNumberRange: "Review range",

        searchButtonAriaLabel: "Search button",
        searchFieldAriaLabel: "Field input for text to search",
        resetButtonAriaLabel: "Reset text field",
        inputAriaLabel: "Enter a value here",
        advancedSearch: "Advanced search",

        submit: "Submit",
        search: "Search"
      },

      assertions: {
        atLeastOneValueSet: "At least one value must be set",
        atLeastOneValueSpecifiedSet: "At least one of these value must be set : ",

        numberNotZero: "This value must be higher than 0"
      },

      bookGenre: {
        novel: "Novel",
        shortStory: "Short Story",
        poesy: "Poetry",
        drama: "Drama",
        essay: "Essay",
        biography: "Biography",
        autobiography: "Autobiography",
        tale: "Fairy Tale",
        comic: "Comic, Graphic Novel",
        manga: "Manga",
        travelStory: "Travel Narrative",
        children: "Children's Literature",
        other: "Other"
      },

      bookTheme: {
        loveAndPassion: "Love and Passion (romance, relationships, desire)",
        friendshipAndHumanRelation: "Friendship and Human Relations (loyalty, betrayal, brotherhood)",
        questForIdentity: "The Quest for Identity (self-discovery, personal transformation)",
        goodAndEvil: "Good and Evil (morality, ethical dilemmas)",
        libertyAndOppression: "Liberty and Oppression (dictatorships, rebellions, quest for independence)",
        travelExploration: "Travel and Exploration (discovery of new lands, exile)",
        warConsequences: "War and Its Consequences (battles, trauma, resistance)",
        justiceInjustice: "Justice and Injustice (trials, corruption, revenge)",
        fantasyAndSupernatural: "Fantasy and the Supernatural (mythical creatures, magic, paranormal)",
        scienceProgressAndExcesses: "Scientific Progress and Its Dangers (cyberpunk, AI, cloning)",
        dreamImaginary: "Dreams and Imagination (dreamlike worlds, illusions, fiction within fiction)",
        timeMemory: "Time and Memory (nostalgia, flashbacks, time loops)",
        lonelinessIsolation: "Loneliness and Isolation (exile, marginality, solitary survival)",
        famillyHeritage: "Family and Heritage (family relationships, family secrets)",
        destinyFreewill: "Destiny and Free Will (fate, choices, predictions)",
        other: "Other"
      },

      bookTargetAudience: {
        academic: "Academic readers (textbooks, reference books, etc.)",
        entertainment: "Entertainment literature (light books, comedies, etc.)",
        personalDevelopment: "Personal development (self-help guides, psychology, etc.)",
        committedAndSocial: "Engaged and social literature (politics, social issues, etc.)",
        foreignCulture: "Foreign culture (cultural guides, books for learning a language, etc.)",
        visuallyImpaired: "Books for visually impaired (braille books, adapted e-books, etc.)",
        peopleWithReadingDifficulties: "People with reading difficulties (simplified books, large print books, etc.)",
        other: "Other"
      },

      layout: {
        refineYourSearch: "Refine your search"
      },

      locales: localesEnUs,
    }
  },
  fr: {
    translation: {
      loading: "Chargement",
      pageNotFound: "Oops! Cette page n'existe pas.",
      pageNotFoundBack: "Revenir en arrière",
      invalidForm: "Il y a une/des erreur(s) dans le formulaire.",

      thisFieldIsRequired: "Ce champ est requis",
      thisFieldIsInvalid: "Ce champ est invalide",

      welcomePage: {
        title: "la bibliothèque en ligne",
        subTitle: "Vos livres préféré en quelque clics"
      },

      form: {
        searchAllInput: "Rechercher un livre, un auteur, un éditeur, etc.",
        delete: "Supprimer",
        noValueAvailable: "Aucune valeur disponible",
        searchValue: "Rechercher une valeur",

        browseGeneral: "Informations générales",

        author: "Rechercher un auteur",
        title: "Rechercher un titre",
        editor: "Rechercher un éditeur",
        isbn: "Rechercher un ISBN",

        contentSection: "Contenu et classification",
        priceReviewsSection: "Prix et avis",

        genre: "Genre",
        genrePlaceholder: "Sélectionnez un genre",

        theme: "Thème",
        themePlaceholder: "Sélectionnez un thème",

        targetAudience: "Public cible",
        targetAudiencePlaceholder: "Sélectionnez un public cible",

        minReviewsNumber: "Nombre d’avis minimum",

        priceRange: "Tranche de prix",

        reviewsNumberRange: "Plage de note",

        language: "Langue",
        languagePlaceholder: "Sélectionnez une langue",

        formatPlaceholder: "Sélectionnez un format",

        searchButtonAriaLabel: "Boutton rechercher",
        searchFieldAriaLabel: "Champ de recherche",
        resetButtonAriaLabel: "Effacer le texte du champ",
        inputAriaLabel: "Entrez une valeur",
        advancedSearch: "Recherche avancée",
        submit: "Envoyer",
        search: "Rechercher"
      },

      assertions: {
        atLeastOneValueSet: "Au moins une valeur doit être completée",
        atLeastOneValueSpecifiedSet: "Au moins une de ces valeurs doit être completée : ",

        numberNotZero: "La valeur de ce champ doit être supérieur à zéro"
      },

      bookGenre: {
        novel: "Roman",
        shortStory: "Nouvelle",
        poesy: "Poésie",
        drama: "Théâtre",
        essay: "Essai",
        biography: "Biographie",
        autobiography: "Autobiographie",
        tale: "Conte",
        comic: "Bande dessiné, comics",
        manga: "Manga",
        travelStory: "Récit de voyage",
        children: "Littérature jeuneusse",
        other: "Autre",
      },

      bookTheme: {
        loveAndPassion: "L'amour et la passion (romance, relations, désir)",
        friendshipAndHumanRelation: "L'amitié et les relations humaines (loyauté, trahison, fraternité)",
        questForIdentity: "La quête d’identité (découverte de soi, transformation personnelle)",
        goodAndEvil: "Le bien et le mal (moralité, dilemmes éthiques)",
        libertyAndOppression: "La liberté et l’oppression (dictatures, rébellions, quête d’indépendance)",
        travelExploration: "Le voyage et l’exploration (découverte de nouvelles terres, exil)",
        warConsequences: "La guerre et ses conséquences (batailles, traumatismes, résistances)",
        justiceInjustice: "La justice et l’injustice (procès, corruption, vengeance)",
        fantasyAndSupernatural: "Le fantastique et le surnaturel (créatures mythiques, magie, paranormal)",
        scienceProgressAndExcesses: "Le progrès scientifique et ses dérives (cyberpunk, IA, clonage)",
        dreamImaginary: "Le rêve et l’imaginaire (mondes oniriques, illusions, fictions dans la fiction)",
        timeMemory: "Le temps et la mémoire (nostalgie, flashbacks, boucle temporelle)",
        lonelinessIsolation: "La solitude et l’isolement (exil, marginalité, survie en solitaire)",
        famillyHeritage: "La famille et l’héritage (relations familiales, secrets de famille)",
        destinyFreewill: "Le destin et le libre arbitre (fatalité, choix, prédictions)",
        other: "Autre"
      },

      bookTargetAudience: {
        academic: "Lecteurs académiques (manuels scolaires, livres de référence, etc.)",
        entertainment: "Littérature de divertissement (livres légers, comédies, etc.)",
        personalDevelopment: "Développement personnel (guides pratiques, psychologie, etc.)",
        committedAndSocial: "Littérature engagée et sociale (la politique, les questions sociales, etc.)",
        foreignCulture: "Culture étrangère (guide culturels, livre pour apprendre une langue, etc.)",
        visuallyImpaired: "Livres pour malvoyants (livres en braille, e-books adaptés, etc.)",
        peopleWithReadingDifficulties: "Personnes ayant des difficultés de lecture (livres simplifiés, livres en grands caractères, etc.)",
        other: "Autre"
      },

      layout: {
        refineYourSearch: "Affiner votre recherche"
      },

      locales: localesFrFr
    }
  }
};

export default resources;
