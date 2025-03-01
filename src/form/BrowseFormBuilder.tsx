import {FormBuilderGetter} from "../types/controls/FormBuilderGetter.ts";
import {Book, Edit3, FileText, Paperclip, Star, Tag} from "react-feather";
import {BookGenreLabels} from "../types/enums/book/BookGenreEnum.ts";
import {BookThemeLabels} from "../types/enums/book/BookThemeEnum.ts";
import {TargetAudienceLabel} from "../types/enums/TargetAudienceEnum.ts";
import {LanguagesLabel} from "../types/enums/LanguagesLabels.ts";
import {EuroIcon} from "../components/icon/EuroIcon.tsx";
import {BookFormatLabels} from "../types/enums/book/BookFormatEnum.ts";

const getBrowseFormBuilder: FormBuilderGetter = (translate: (pointer: string) => string) => {
    return {
        formBuilder: [
            {
                name: "author",
                placeholder: translate("form.author"),
                type: "text",
                icon: <Edit3 size={"1rem"} />,
                required: false,
                submitOnClear: true
            },
            {
                name: "title",
                type: "text",
                placeholder: translate("form.title"),
                icon: <Book size={"1rem"}/>,
                required: false,
                submitOnClear: true
            },
            {
                name: "editor",
                type: "text",
                placeholder: translate("form.editor"),
                icon: <Paperclip size={"1rem"}/>,
                required: false,
                submitOnClear: true
            },
            {
                name: "isbn",
                type: "text",
                placeholder: translate("form.isbn"),
                icon: <Tag size={"1rem"}/>,
                required: false,
                submitOnClear: true
            },

            {
                name: "genre",
                type: "dropdown",
                placeholder: translate("form.genrePlaceholder"),
                dropdownOptions: Object.entries(BookGenreLabels).map(([k, v]) => ({
                    id: k,
                    label: translate(v)
                })),
                required: false,
                submitOnChange: true
            },
            {
                name: "theme",
                type: "dropdown",
                placeholder: translate("form.themePlaceholder"),
                dropdownOptions: Object.entries(BookThemeLabels).map(([k, v]) => ({
                    id: k,
                    label: translate(v)
                })),
                required: false,
                submitOnChange: true
            },
            {
                name: "targetAudience",
                type: "dropdown",
                placeholder: translate("form.targetAudiencePlaceholder"),
                dropdownOptions: Object.entries(TargetAudienceLabel).map(([k, v]) => ({
                    id: k,
                    label: translate(v)
                })),
                required: false,
                submitOnChange: true
            },
            {
                name: "language",
                type: "dropdown",
                placeholder: translate("form.languagePlaceholder"),
                dropdownOptions: Object.entries(LanguagesLabel).map(([k, v]) => ({
                    id: k,
                    label: translate(v)
                })),
                required: false,
                submitOnChange: true
            },
            {
                name: "format",
                type: "dropdown",
                placeholder: translate("form.formatPlaceholder"),
                dropdownOptions: Object.entries(BookFormatLabels).map(([k, v]) => ({
                    id: k,
                    label: translate(v)
                })),
                required: false,
                submitOnChange: true
            },

            {
                name: "minReviewsNumber",
                type: "number",
                placeholder: translate("form.minReviewsNumber"),
                icon: <FileText size={"1rem"} />,
                required: false,
                assertion: "NUMBER_NOT_ZERO"
            },
            {
                name: "priceRange",
                type: "range",
                label: <><EuroIcon width={"0.5938rem"} height={"0.6875rem"} /> {translate("form.priceRange")}</>,
                rangeMin: 0,
                rangeMax: 100,
                unit: "€",
                required: false
            },
            {
                name: "reviewsNumberRange",
                type: "range",
                label: <><Star width={"0.875rem"} height={"0.875rem"} /> {translate("form.reviewsNumberRange")}</>,
                rangeMin: 0,
                rangeMax: 5,
                required: false
            },
        ],
        formMatrix: [
            {
                fields: ["author", "title", "editor", "isbn"],
                menuTitle: translate("form.browseGeneral"),
            },
            {
                fields: ["genre", "theme", "targetAudience", "language", "format"],
                menuTitle: translate("form.contentSection"),
                isDropdownMenu: true
            },
            {
                fields: ["minReviewsNumber", "priceRange" , "reviewsNumberRange"],
                menuTitle: translate("form.priceReviewsSection"),
                isDropdownMenu: true
            }
        ]
    };
};

export default getBrowseFormBuilder;
