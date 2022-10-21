import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer
        className="footer-section d-flex flex-wrap justify-content-between align-items-center"
        id="footer"
      >
        <div className="container py-3">
          <div className="row">
            <div className="col-12 col-md-6">
              <a
                referrerpolicy="origin"
                target="_blank"
                href="https://trustseal.enamad.ir/?id=133046&amp;Code=adBjaKSoZKv4S9E1jzbS"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid"
                  referrerpolicy="origin"
                  src="https://Trustseal.eNamad.ir/logo.aspx?id=133046&amp;Code=adBjaKSoZKv4S9E1jzbS"
                  alt=""
                  id="adBjaKSoZKv4S9E1jzbS"
                />
              </a>
            </div>
            <div className="col-12 col-md-6">
              <h5>{t("company management")}</h5>
              <h6>
                <span>{t("phone number")}</span>
                <br />
                <span>{t("fax number")}</span>
                <br />
                <span>{t("mobile number")}</span>
                <br />
                <span>{t("telegram number")}</span>
                <br />
              </h6>
              <h5>{t("address")}</h5>
              <h6>{t("address2")}</h6>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-banner">
        <div className="banner-text py-3 text-center text-wrap">
          Iran 2022 License , designed by <span>KouriYo</span>
        </div>
      </div>
    </>
  );
}
