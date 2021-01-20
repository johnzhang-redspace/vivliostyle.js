import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, color, select } from "@storybook/addon-knobs";

import { Renderer } from "../renderer";

export default {
  title: "Renderer",
  component: Renderer,
};

const SOURCES = [
  "https://vivliostyle.github.io/vivliostyle_doc/samples/gon/index.html",
  "http://localhost:3000/sample/MobyDick/manifest.json",
  "https://vivliostyle.github.io/vivliostyle_doc/samples/gutenberg/Alice.html",
];

export const Basic = () => (
  <Renderer
    source={select("Source", SOURCES, SOURCES[0])}
    page={number("Page", 1)}
    zoom={number("Zoom", 1)}
    fontSize={number("Font Size", 16)}
    background={color("Background", "#ececec")}
    renderAllPages={boolean("Render All Pages", true)}
    autoResize={boolean("Auto Resize", true)}
    pageViewMode={select(
      "Page View Mode",
      ["singlePage", "spread", "autoSpread"],
      "singlePage",
    )}
    defaultPaperSize={text("Default Paper Size", undefined)}
    fitToScreen={boolean("Fit to Screen", false)}
    pageBorderWidth={number("Page Border Width", 1)}
    authorStyleSheet={text("Author Stylesheet", undefined)}
    userStyleSheet={text("User Stylesheet", undefined)}
    navigateToInternalURLs={boolean("Navigate to Internal URLs", true)}
    onLoad={action("loaded")}
    onError={action("error")}
    onNavigation={action("navigation")}
    onMessage={(msg, type) => action("message")(type, msg.messages[0])}
    onReadyStateChange={action("readyStateChange")}
    onHyperlink={action("hyperlink")}
    onSetInstance={(instance) => action("instance")(instance.initialized)}
    onToCLoad={(toggleToC, isToCVisible, getToC) => {
      toggleToC(true, true);
      action("tocVisible")(isToCVisible);
      action("tocItems", getToC());
    }}
  />
);

export const Narrowed = () => (
  <div
    style={{
      background: "black",
      width: "100%",
      height: "100%",
      position: "absolute",
    }}>
    <div
      style={{
        width: "50vw",
        height: "100%",
        background: "red",
        border: "1px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Renderer
        source={select("Source", SOURCES, SOURCES[0])}
        page={number("Page", 1)}
        zoom={number("Zoom", 1)}
        fontSize={number("Font Size", 16)}
        background={color("Background", "#ececec")}
        renderAllPages={boolean("Render All Pages", true)}
        autoResize={boolean("Auto Resize", true)}
        pageViewMode={select(
          "Page View Mode",
          ["singlePage", "spread", "autoSpread"],
          "singlePage",
        )}
        defaultPaperSize={text("Default Paper Size", undefined)}
        fitToScreen={boolean("Fit to Screen", true)}
        pageBorderWidth={number("Page Border Width", 1)}
        authorStyleSheet={text("Author Stylesheet", undefined)}
        userStyleSheet={text("User Stylesheet", undefined)}
        navigateToInternalURLs={boolean("Navigate to Internal URLs", true)}
        onLoad={action("loaded")}
        onError={action("error")}
        onNavigation={action("navigation")}
        onMessage={(msg, type) => action("message")(type, msg.messages[0])}
        onReadyStateChange={action("readyStateChange")}
        onHyperlink={action("hyperlink")}
        onSetInstance={(instance) => action("instance")(instance.initialized)}
        onToCLoad={(toggleToC, isToCVisible, getToC) => {
          toggleToC(true, true);
          action("tocVisible")(isToCVisible);
          action("tocItems", getToC());
        }}
      />
    </div>
  </div>
);
