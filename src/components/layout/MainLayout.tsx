import {ReactNode, useEffect, useRef, useState} from "react";
import EbraryIcon from "../icon/EbraryIcon.tsx";
import Button from "../form/Button.tsx";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {ChevronLeft} from "react-feather";

export default function MainLayout({ children }: { children: ReactNode }) {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const asideRef = useRef<HTMLElement>(null);

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
                    
                </div>
            </aside>
            <main>{children}</main>
        </section>
    </div>;
}
