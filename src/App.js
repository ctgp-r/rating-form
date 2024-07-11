import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { SurveyPage } from "./pages/Survey";
import * as Survey from "survey-core";
import $ from "jquery";
import surveyTheme from "./theme.json";

// Import necessary SurveyJS widgets and styles
import "bootstrap/dist/css/bootstrap.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import "select2/dist/js/select2.js";
import "jquery-bar-rating";
import "jquery-ui/ui/widgets/datepicker.js";

import * as widgets from "surveyjs-widgets";
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

export default function SurveyJSReactApplication() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <SurveyPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
