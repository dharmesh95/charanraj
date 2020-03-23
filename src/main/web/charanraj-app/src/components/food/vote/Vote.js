import React, { Component } from "react";
import VoteTable from "./VoteTable";

export default class Vote extends Component {
  render() {
    const { voteData } = this.props;
    return <VoteTable className="vote-table" rows={voteData} {...this.props} />;
  }
}
