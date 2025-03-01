import {ReactNode, useEffect, useRef, useState} from "react";
import EbraryIcon from "../icon/EbraryIcon.tsx";
import Button from "../form/Button.tsx";
import {useTranslation} from "react-i18next";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ChevronLeft, Moon, Search, Sun} from "react-feather";
import EbrForm from "../form/EbrForm.tsx";
import getBrowseFormBuilder from "../../form/BrowseFormBuilder.tsx";
import UrlTransformer from "../../service/UrlTransformer.ts";
import LanguageDropdown from "../form/LanguageDropdown.tsx";
import {useTheme} from "../../hook/Theme.tsx";

export default function BrowseLayout({ children }: { children: ReactNode }) {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const asideRef = useRef<HTMLElement>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [theme, setTheme] = useTheme();

    const { formBuilder, formMatrix, globalAssertions } = getBrowseFormBuilder(t);

    useEffect(() => {
        if (!asideRef.current)
            return;

        asideRef.current.style.marginLeft = isSidebarOpen ? "0px" : `-${asideRef.current.clientWidth - 60}px`;
    }, [isSidebarOpen]);

    const getOriginalData = () => {
        const entries = Object.entries(UrlTransformer.transformSearchBooksQuery(searchParams));
        const record: Record<string, string | number | boolean | number[] | undefined> = {};

        entries.forEach(([k, v]) => record[k] = v ?? undefined);
        return record;
    };

    return <div className="ebr_layout">
        <header className="ebr_header">
            <div className="ebr_header-left">
                <Button onClick={() => navigate("/")}><EbraryIcon /></Button>
                <EbrForm onSubmit={(data) => setSearchParams(prev => {
                    const value = data["searchAll"];
                    if (value)
                        prev.set("searchAll", data["searchAll"]);
                    else
                        prev.delete("searchAll");

                    return prev;
                })} formBuilder={[
                    {
                        name: "searchAll",
                        type: "text",
                        placeholder: t("form.searchAllInput"),
                        icon: <Search size={"1.3rem"}/>,
                        iconButtonType: "submit",
                        isIconButtonSubmit: true,
                        required: true,
                    }
                ]} submitButton={<></>} />
            </div>
            <div className="ebr_header-right">
                <Button className="ebr_theme-switch" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Moon /> : <Sun />}</Button>
                <LanguageDropdown />
            </div>
        </header>
        <section className="ebr_layout-content">
            <aside ref={asideRef} className="ebr_layout-aside" data-open={isSidebarOpen}>
                <h1 className="ebr_layout-aside-title">
                    {t("layout.refineYourSearch")}
                    <Button className="ebr_layout-aside-toggle" onClick={() => setIsSidebarOpen(prev => !prev)}>
                        <ChevronLeft />
                    </Button>
                </h1>
                <div className="ebr_layout-aside-content" inert={!isSidebarOpen}>
                    <EbrForm
                        className="ebr_layout-browse-form"
                        onSubmit={(data) =>
                            setSearchParams(prev => {
                                Object.entries(data).map(([k, v]) => v?.toString()?.length ? prev.set(k, v) : prev.delete(k));
                                return prev;
                            })
                        }
                        defaultData={getOriginalData()}
                        formBuilder={formBuilder}
                        formMatrix={formMatrix}
                        assertions={globalAssertions}
                        submitButton={<Button className="ebr_submit-action" variant="filled" size="md" type="submit"><Search/> Rechercher</Button>}
                    />
                </div>
            </aside>
            <main>{children}</main>
        </section>
    </div>;
}
