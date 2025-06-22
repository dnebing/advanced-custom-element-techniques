
import React from "react";
import Liferay from "../../util/Liferay.js";

// Display a simple heading using a Liferay language key
function I18NHeading() {
  // Common Liferay keys: 'welcome', 'home', etc.
  return (
    <h1>{Liferay.Language.get('welcome')}</h1>
  );
}

// A paragraph using a standard Liferay key
function I18NParagraph() {
  return (
    <p>{Liferay.Language.get('description')}</p>
  );
}

// A button using a standard key
function I18NSaveButton() {
  return (
    <button>{Liferay.Language.get('save')}</button>
  );
}

// A button using a standard key and an icon
function I18NCancelButton() {
  return (
    <button>
      <span aria-hidden="true">✖️</span> {Liferay.Language.get('cancel')}
    </button>
  );
}

// An alert using a standard Liferay key
function I18NSuccessAlert() {
  return (
    <div style={{background: "#dff0d8", color: "#3c763d", padding: "12px", borderRadius: "4px"}}>
      {Liferay.Language.get('success')}
    </div>
  );
}

// Another alert using a unique key (for demo/fragment override)
function I18NCustomAlert() {
  return (
    <div style={{background: "#fcf8e3", color: "#8a6d3b", padding: "12px", borderRadius: "4px"}}>
      {Liferay.Language.get('i18ndemo.custom.alert')}
    </div>
  );
}

// A button with a unique, user-defined key
function I18NMagicButton() {
  return (
    <button>{Liferay.Language.get('i18ndemo.magic.button')}</button>
  );
}

export default function I18NApp() {
  return (
    <div style={{padding: 24, fontFamily: "sans-serif"}}>
      <I18NHeading />
      <I18NParagraph />
      <div style={{margin: "16px 0"}}>
        <I18NSaveButton />{" "}
        <I18NCancelButton />{" "}
        <I18NMagicButton />
      </div>
      <I18NSuccessAlert />
      <div style={{marginTop: 12}}>
        <I18NCustomAlert />
      </div>
    </div>
  );
}