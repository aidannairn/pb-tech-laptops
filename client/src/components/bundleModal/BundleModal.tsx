import React from "react";
import "./BundleModal.scss";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BundleModal = () => {
  return (
    <div className="modal-background">
      <div className="bundle-model-container">
        <div className="bundle-modal-header">
          <FontAwesomeIcon icon={faQuestionCircle} className="facircle" />
          <p>Are you buying for your business?</p>

          <span> X </span>
        </div>
        <div className="bundle-modal-para">
          <p>
            We have noticed that you are after a large quantity of items. If you
            are purchasing for your business, we recommend that you{" "}
            <span>apply for a business account</span>. This will give you have
            access to our commercial web portal, including features such as
            custom catalogue creation, order authorisation, and commercial
            pricing.
          </p>
        </div>
      </div>
    </div>
  );
};
