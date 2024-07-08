import { memo } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/icons/trend.svg";
import "./header.css";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <nav className="header-navbar">
        <a href="/">
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <div className="header-navbar-right">
          <ul className="header-navbar-right-lists">
            <li>
              <a href="">{t("services")}</a>
            </li>
            <li>
              <a href="">{t("about")}</a>
            </li>
            <li>
              <a href="">{t("contacts")}</a>
            </li>
          </ul>
          <button className="header-navbar-right-login"> {t("Login")} </button>
          <button className="header-navbar-right-account">
            {t("open an account")}
          </button>
          <select
            className="header-navbar-right-lang"
            id=""
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
