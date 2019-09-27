import React, { Component } from "react";
import { Route } from "react-router-dom";
import Workstation from "../../../workstation";
import labels from "../../../labels";
import AddArticle from "../../../articleManagement/addArtcle";
import articleMangement from "../../../articleManagement";
export default class HomeContent extends Component {
  render() {
    return (
      <div
        style={{
          margin: "10px 10px",
          padding: "10px 10px",
          background: "#fff"
        }}
      >
        <Route path="/" exact component={Workstation} />
        <Route path="/article" exact component={articleMangement} />
        <Route path="/addArticle" exact component={AddArticle} />
        <Route path="/label" exact component={labels} />
        <Route path="/special" exact component={Workstation} />
      </div>
    );
  }
}
