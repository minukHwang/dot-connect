import React from "react";
import "./ReportSimple.scss";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_GMAP_API_KEY;
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";

const ReportSimple = () => {
  //load api
  const loadAsyncScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      Object.assign(script, {
        type: "text/javascript",
        async: true,
        src,
      });
      script.addEventListener("load", () => resolve(script));
      document.head.appendChild(script);
    });
  };

  //Connecting Server API
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };

  //Values
  const [values, setValues] = useState({
    latitude: "",
    longtitude: "",
    content: "",
  });

  //Text
  const inputText = (event) => {
    setValues({
      ...values,
      content: event.target.value,
    });
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchInput = useRef(null);
  const textInput = useRef(null);

  // init Google Map
  const initMapScript = () => {
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setValues({
      ...values,
      latitude: lat,
      longtitude: lng,
    });
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        searchInput.current.value = place.formatted_address;
        setValues({
          ...values,
          latitude: lat,
          longtitude: lng,
        });
      });
  };

  const findMyLocation = () => {
    searchInput.current.value = "";
    searchInput.current.placeholder = "Searching your location...";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords);
      });
    }
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
  }, []);

  const register = () => {
    console.log(typeof values.latitude);
    axios
      .post(
        "https://dot-connect-374203.du.r.appspot.com/reports/upload",
        values,
        { headers }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error) {
          // 404 에러가 발생한 경우

          console.log(error);
        } else {
          // unexpected 에러가 발생한 경우

          console.log("나도몰라");
        }
      });
    alert("Report has been submitted");
    textInput.current.value = "";
    searchInput.current.value = "";
  };

  return (
    <form className="simple" onSubmit={handleSubmit}>
      <div className="main-title">Report</div>
      <div className="place-area">
        <div className="sub-title">Location</div>
        <div className="place-btn-area">
          <input
            ref={searchInput}
            type="text"
            className="place-btn"
            placeholder="Search Location"
          />
          <div className="current-location" onClick={findMyLocation}>
            <span className="material-symbols-outlined">my_location</span>
          </div>
        </div>
      </div>

      <div className="text-area">
        <div className="sub-title">Report Detail</div>
        <div className="text-box-area">
          <textarea
            ref={textInput}
            className="text-box"
            cols="30"
            rows="10"
            placeholder="Please enter contents of report."
            onChange={(event) => inputText(event)}
          ></textarea>
        </div>
      </div>

      <div className="btn-area">
        <button
          type="submit"
          className="btn"
          onClick={() => {
            register();
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReportSimple;
