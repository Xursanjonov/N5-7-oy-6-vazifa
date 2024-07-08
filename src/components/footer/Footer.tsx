import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-box">
        <p className="footer-box-title">
          ©2024 {t("All Rights Reserved. Lorem Technologies, Inc ~ ")}
          <a
            className="nusratillo"
            href="https://t.me/Khursanjonov_004"
            target="_blank"
          >
            Nusratilloh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
