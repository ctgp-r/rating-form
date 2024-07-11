import React from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { json } from "../data/survey.js";
import surveyTheme from "../theme.json";

StylesManager.applyTheme("defaultV2");

function onValueChanged(_, options) {
  console.log("New value: " + options.value);
}

async function onComplete(survey) {
  console.log("Survey complete! Results: " + JSON.stringify(survey.data));
  
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyAjXqLyLkdLamGcv9jZwQ0lgNTFnm7GB_3V--Y1H5woTEjHIfYluNKqFzleVXqKMKAEA/exec", {
      redirect: "follow",
	  method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(survey.data),
    });

    if (response.ok) {
      console.log("Survey data successfully sent to Google Sheets.");
    } else {
      console.error("Failed to send survey data to Google Sheets.");
    }
  } catch (error) {
    console.error("Error sending survey data:", error);
  }
}

export function SurveyPage() {
  const model = new Model(json);
  StylesManager.applyTheme(surveyTheme);

  return (
    <div className="container">
	  <h1>04:39</h1>
      <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}
