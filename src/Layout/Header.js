import React from "react";
import { useTranslation } from "react-i18next";

//Import Photo
import bigLogo from "./../img/BigLogo.png";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="header-img d-flex align-items-center justify-content-lg-start justify-content-center">
        <div className="title-box d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-sm-center align-items-center ms-lg-5 col-md-10 col-lg-8">
          <img
            className="big-logo py-5 img-fluid my-auto"
            src={bigLogo}
            alt="Big-Logo"
          ></img>
          <div className="titles px-4 pb-5 pb-md-0 text-center text-sm-center text-md-start text-lg-start">
            <h1>{t("header1")}</h1>
            <h3>{t("header2")}</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
