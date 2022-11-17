import { useState, useEffect } from "react";
import Usa from "../usa.png";
import Canada from "./canada.png";
import Spain from "./spain.jpg";
import Map from "./map.svg";
import "../App.css";

export default function Countries() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <>
      <div className="countries">
        <div className="top-countries-container">
          <h2 className="top-affected-countries">Top Affected Countries</h2>
          <p className="countries-last-updated">
            Last updated:{" "}
            {dateState.toLocaleDateString("en-GB", {
              weekday: "short",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="countries-flag">
          <p className="countries-flag-header">Countries</p>
          <table className="countries-table1">
            <tbody className="country-body">
              <tr>
                <td>
                  <img className="countries-img" src={Usa} alt="usa" title="Usa" />
                </td>
                <td>
                  <h3 className="country-name">USA</h3>
                </td>
                <td>
                  <h4 className="country-number">2897285</h4>
                </td>
              </tr>
              <tr className="country-italy">
                <td>
                  <svg className="countries-img" width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path d="M0 36.52H36V0.52H0V36.52Z" fill="url(#pattern0)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_1_135" transform="scale(0.00625)" />
                      </pattern>
                      <image
                        id="image0_1_135"
                        width="160"
                        height="160"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </td>
                <td>
                  <h3 className="country-name">Italy</h3>
                </td>
                <td>
                  <h4 className="country-number">2897285</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="countries-img" src={Canada} alt="canada" title="canada" />
                </td>
                <td>
                  <h3 className="country-name">Canada</h3>
                </td>
                <td>
                  <h4 className="country-number">2897285</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="countries-img" src={Spain} alt="spain" title="spain" />
                </td>
                <td>
                  <h3 className="country-name">Spain</h3>
                </td>
                <td>
                  <h4 className="country-number">2897285</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ paddingTop: "10%", marginLeft: "-0px" }}>Italy</h3>
        <div className="cases">
          <div>
            <div className="numbers">
              <h3 className="h3">Total Cases</h3>

              <h2 style={{ fontWeight: "600", fontSize: "18px", color: "#2B6FF3" }}>292,20000</h2>
            </div>
            <div className="numbers">
              <h3 className="h3">Recovered</h3>

              <h2 style={{ fontWeight: "600", fontSize: "18px", color: "#16B442" }}>292,20000</h2>
            </div>
            <div className="numbers">
              <h3 className="h3">New Cases</h3>

              <h2 style={{ fontWeight: "600", fontSize: "18px", color: "#2B6FF3" }}>292,20000</h2>
            </div>
          </div>
          <div>
            <div className="numbers">
              <h3 className="h3">Active Cases</h3>

              <h2 style={{ fontWeight: "600", fontSize: "18px", color: "#F39911" }}>292,20000</h2>
            </div>
            <div className="numbers">
              <h3 className="h3">Total Death</h3>

              <h2 style={{ fontWeight: "600", fontSize: "18px", color: "#D63232" }}>292,20000</h2>
            </div>
            <div className="numbers">
              <h3 className="h3">New Deaths</h3>

              <h2 style={{ fontWeight: "600", fontSize: "18px", color: "#D63232" }}>292,20000</h2>
            </div>
          </div>
        </div>

        {/* <div className="casesdeath">
          <div className="box1-countries">
           
            <h2>292,20000</h2>
          </div>
          <div className="box2-countries">
           
          </div>
          <div className="box3-countries">
           
            <h2>292,20000</h2>
          </div>
          <div className="box4-countries">
            
            <h2>292,20000</h2>
          </div>
          <div className="box5-countries">
           
            <h2>292,20000</h2>
          </div>
          <div className="box6-countries">
            
            <h2>292,20000</h2>
          </div>
        </div> */}
        <img style={{ width: "350px", height: "300", marginTop: "15%" }} src={Map} alt="Continent" title="Continent" />
      </div>
    </>
  );
}