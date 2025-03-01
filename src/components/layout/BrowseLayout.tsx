import {ReactNode, useEffect, useRef, useState} from "react";
import EbraryIcon from "../icon/EbraryIcon.tsx";
import Button from "../form/Button.tsx";
import {useTranslation} from "react-i18next";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ChevronLeft} from "react-feather";
import EbrForm from "../form/EbrForm.tsx";
import getBrowseFormBuilder from "../../form/BrowseFormBuilder.tsx";

export default function BrowseLayout({ children }: { children: ReactNode }) {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const asideRef = useRef<HTMLElement>(null);
    const setSearchParams = useSearchParams()[1];

    const { formBuilder, formMatrix } = getBrowseFormBuilder(t);

    useEffect(() => {
        if (!asideRef.current)
            return;

        asideRef.current.style.marginLeft = isSidebarOpen ? "0px" : `-${asideRef.current.clientWidth - 60}px`;
    }, [isSidebarOpen]);

    return <div className="ebr_layout">
        <header className="ebr_header">
            <div>
                <Button onClick={() => navigate("/")}><EbraryIcon /></Button>
            </div>
        </header>
        <section className="ebr_layout-content">
            <aside ref={asideRef} className="ebr_layout-aside" data-open={isSidebarOpen}>
                <h1>
                    {t("layout.refineYourSearch")}
                    <Button className="ebr_layout-aside-toggle" onClick={() => setIsSidebarOpen(prev => !prev)}>
                        <ChevronLeft />
                    </Button>
                </h1>
                <div inert={!isSidebarOpen}>
                    <EbrForm
                        className="ebr_layout-browse-form"
                        onSubmit={(data) =>
                            setSearchParams(prev => {
                                Object.entries(data).map(([k, v]) => v.toString().length ? prev.set(k, v) : prev.delete(k));
                                return prev;
                            })
                        }
                        formBuilder={formBuilder}
                        formMatrix={formMatrix}
                    />
                </div>
            </aside>
            <main>{children}</main>
        </section>
    </div>;
}
