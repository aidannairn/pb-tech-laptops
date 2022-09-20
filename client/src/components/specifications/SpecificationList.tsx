import React from "react";
import "./SpecificationsList.scss";
import displaySpecItems from "./specList";

export const SpecificationList = () => {
  return (
    <div className="spec-list-main-container">
      <div className="first-spec-container">
        <div className="left-spec">
          <p>
            <b>Dimensions</b>
          </p>
        </div>
        <div className="right-spec">
          <p>308 mm x 223 mm x 14.5 mm (12.1" x 8.8" x0.57")</p>
        </div>
      </div>
      <div className="spec-titles">
        <h3>Display</h3>
      </div>
      {displaySpecItems.map((item, i) => {
        return (
          <div className="second-spec-container" key={i}>
            <div className="left-spec">
              <p>
                <b>Screen</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{item.screen}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Resolution</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{item.resolution}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Aspect ratio</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{item.aspect}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Surface Pen</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{item.surfacePen}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Touch</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{item.touch}</p>
            </div>
          </div>
        );
      })}
      <div className="spec-titles">
        <h3>Technical Specifications</h3>
      </div>
      {displaySpecItems.map((tech, i) => {
        return (
          <div className="third-spec-container" key={i}>
            <div className="left-spec">
              <p>
                <b>Memory</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{tech.memory}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Processor</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{tech.processor}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Security</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{tech.security}</p>
            </div>
            <div className="left-spec">
              <p>
                <b></b>
              </p>
            </div>
            <div className="right-spec">
              <p>Enterprise-grade protection with Windows Hello face sign-in</p>
            </div>
            <div className="left-spec-S">
              <p>
                <b>Storage</b>
              </p>
            </div>
            <div className="right-spec-S">
              <p>{tech.storage}</p>
            </div>
            <div className="left-spec-BL">
              <p>
                <b>Battery Life</b>
              </p>
            </div>
            <div className="right-spec-BL">
              <p>{tech.battery}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Graphics</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{tech.graphics}</p>
            </div>
            <div className="left-spec-C">
              <p>
                <b>Connections</b>
              </p>
            </div>
            <div className="right-spec-C">
              <p>{tech.connections}</p>
            </div>
            <div className="left-spec-CVA">
              <p>
                <b>Cameras, video and audio</b>
              </p>
            </div>
            <div className="right-spec-CVA">
              <p>{tech.cameras}</p>
            </div>
            <div className="left-spec-W">
              <p>
                <b>Wireless</b>
              </p>
            </div>
            <div className="right-spec-W">
              <p>{tech.wireless}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Software</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{tech.software}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Sensors</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{tech.sensors}</p>
            </div>
          </div>
        );
      })}
      <div className="spec-titles">
        <h3>Physical Specifications</h3>
      </div>
      {displaySpecItems.map((phys, i) => {
        return (
          <div className="fourth-spec-container" key={i}>
            <div className="left-spec-WITB">
              <p>
                <b>What's in the box</b>
              </p>
            </div>
            <div className="right-spec-WITB">
              <p>{phys.whats}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Exterior Casing</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{phys.casing}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Buttons</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{phys.buttons}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Colours</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{phys.colors}</p>
            </div>
            <div className="left-spec">
              <p>
                <b>Weight</b>
              </p>
            </div>
            <div className="right-spec">
              <p>{phys.weight}</p>
            </div>
            <div className="left-spec-KBL">
              <p>
                <b>Keyboard Layout</b>
              </p>
            </div>
            <div className="right-spec-KBL">
              <p>{phys.keylayout}</p>
            </div>
            <div className="left-spec-BC">
              <p>
                <b>Battery Capacities</b>
              </p>
            </div>
            <div className="right-spec-BC">
              <p>{phys.batteryCap}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
