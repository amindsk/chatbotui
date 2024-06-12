import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const DFTable = ({ df }) => {
    console.log(Object.keys(df[0]));
  const theme = useTheme([
    getTheme(),
    {
      Table: `
      font-family: Monaco;
        --data-table-library_grid-template-columns:  30% repeat(2, minmax(0, 1fr)) 25% 100px;
      `,
  Header: ``,
  Body: ``,
  BaseRow: `
    background-color: #FFF;
  `,
  HeaderRow: `
    font-size: large;
    color: #FFF;
    background-color: rgb(113, 42, 255);
  `,
  Row: `
    font-size: large;

    &:not(:last-of-type) .td {
      border-bottom: 1px solid rgb(113, 42, 255);
    }

    &:hover {
      color: #000;
    }
  `,
  BaseCell: `
    border-bottom: 1px solid rgb(113, 42, 255);
    border-right: 1px solid rgb(113, 42, 255);
    border-left: 1px solid rgb(113, 42, 255);

    padding: 8px;
    height: 52px;
  `,
  HeaderCell: ``,
  Cell: ``,
    },
  ]);

  const COLUMNS = Object.keys(df[0]).map(column => ({
    label: column,
    renderCell: (item) => item[column]
  }));

  return (
    <>
      <CompactTable
        columns={COLUMNS}
        data={{nodes: df}}
        theme={theme}
      />
    </>
  );
};

export default DFTable;