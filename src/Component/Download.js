import React from "react";
import { connect } from "react-redux";
import "./Card.css";

const mapStateToProps = (state) => ({
  data: state.globaldata.data,
});

const mapDispatchToprops = (dispatch) => ({
  setData: dispatch.globaldata.setData,
  resetData: dispatch.globaldata.resetData,
});

const Download = (props) => {
  const { data, match } = props;
  console.log("kya change hua", data, match.params.id);
  const newObject = data.filter(
    (item, index) => index === Number(match.params.id)
  );

  const downloadEmployeeData = () => {
    fetch(`${newObject[0].urls.regular}`).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "image.jpeg";
        a.click();
      });
      window.location.href = response.url;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-betwen",
        marginTop: "100px",
        flexFlow: "column",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      {!!newObject && newObject.length !== 0 && !!newObject[0].urls ? (
        <img src={newObject[0].urls.regular} className="imageStyleLarge" />
      ) : null}
      <button
        className="loadmore"
        onClick={() => {
          downloadEmployeeData();
        }}
      >
        <h4 className="textloadmore">
          {" "}
          {!!newObject && newObject.length !== 0 && !!newObject[0].urls
            ? "Download"
            : "Please go back and refresh"}{" "}
        </h4>
      </button>
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToprops)(Download);
