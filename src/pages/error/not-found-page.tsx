import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>{t("pageNotFound")}</p>
      <Link to={"#"} onClick={() => navigate(-1)} >{t("pageNotFoundBack")}</Link>
    </div>
  );
}