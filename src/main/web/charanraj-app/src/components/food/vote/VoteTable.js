import Table from "@material-ui/core/Table";
import { TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";
import React, { Component } from "react";
import { WithSpinner } from "../../common/WithSpinner";
import VoteTableRow from "./VoteTableRow";

class VoteTable extends Component {
  render() {
    const { rows, vote, profileObj, deleteRecommendation } = this.props;
    return (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Recommendations</TableCell>
            <TableCell style={{ textAlign: "right" }}>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            const rowProps = { row, vote, profileObj, deleteRecommendation };
            return <VoteTableRow key={row.id} {...rowProps} />;
          })}
        </TableBody>
      </Table>
    );
  }
}

export default WithSpinner(VoteTable);
