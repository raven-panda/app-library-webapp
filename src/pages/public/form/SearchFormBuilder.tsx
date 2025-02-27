import { Book, Edit3, FileText, Paperclip, Tag } from "react-feather";
import { EuroIcon } from "../../../components/icon/EuroIcon";
import { FormBuilderGetter } from "../../../types/controls/FormBuilderGetter";
import { BookGenreLabels } from "../../../types/enums/book/BookGenreEnum";
import { BookThemeLabels } from "../../../types/enums/book/BookThemeEnum";
import { LanguagesLabel } from "../../../types/enums/LanguagesLabels";
import { TargetAudienceLabel } from "../../../types/enums/TargetAudienceEnum";

export const getSearchFormBuilderAndMatrix: FormBuilderGetter = (translate) => ({
  formBuilder: [
    {
      name: "author",
      type: "iconinput",
      placeholder: translate("form.author"),
      icon: <Edit3 size={24}/>,
      required: false
    },
    {
      name: "title",
      type: "iconinput",
      placeholder: translate("form.title"),
      icon: <Book size={24}/>,
      required: false
    },
    {
      name: "editor",
      type: "iconinput",
      placeholder: translate("form.editor"),
      icon: <Paperclip size={24}/>,
      required: false
    },
    {
      name: "isbn",
      type: "iconinput",
      placeholder: translate("form.isbn"),
      icon: <Tag size={24}/>,
      required: false
    },
  
    {
      name: "genre",
      type: "dropdown",
      label: translate("form.genre"),
      placeholder: translate("form.genrePlaceholder"),
      dropdownOptions: Object.entries(BookGenreLabels).map(([k, v]) => ({
        id: k,
        label: translate(v)
      })),
      required: false
    },
    {
      name: "theme",
      type: "dropdown",
      label: translate("form.theme"),
      placeholder: translate("form.themePlaceholder"),
      dropdownOptions: Object.entries(BookThemeLabels).map(([k, v]) => ({
        id: k,
        label: translate(v)
      })),
      required: false
    },
    {
      name: "targetAudience",
      type: "dropdown",
      label: translate("form.targetAudience"),
      placeholder: translate("form.targetAudiencePlaceholder"),
      dropdownOptions: Object.entries(TargetAudienceLabel).map(([k, v]) => ({
        id: k,
        label: translate(v)
      })),
      required: false
    },
    {
      name: "language",
      type: "dropdown",
      label: translate("form.language"),
      placeholder: translate("form.languagePlaceholder"),
      dropdownOptions: Object.entries(LanguagesLabel).map(([k, v]) => ({
        id: k,
        label: translate(v)
      })),
      required: false
    },
    
    {
      name: "minReviewsNumber",
      type: "number",
      label: <><FileText size={"1rem"} /> {translate("form.minReviewsNumber")}</>,
      placeholder: translate("form.numberPlaceholder"),
      required: false
    },
    {
      name: "priceRange",
      type: "range",
      label: <><EuroIcon width={"0.5938rem"} height={"0.6875rem"} /> {translate("form.minReviewsNumber")}</>,
      rangeMin: 0,
      rangeMax: 100,
      required: false
    },
  ],
  formMatrix: [
    {
      fields: ["author", "title"]
    },
    {
      fields: ["editor", "isbn"]
    },
    {
      fields: ["genre", "theme", "targetAudience", "language"],
      isDropdownMenu: true,
      dropdownMenuTitle: translate("form.contentSection")
    },
    {
      fields: ["minReviewsNumber", "priceRange"],
      isDropdownMenu: true,
      dropdownMenuTitle: translate("form.priceReviewsSection")
    }
  ],
  globalAssertions: [
    "AT_LEAST_ONE_VALUE_SET"
  ]
});