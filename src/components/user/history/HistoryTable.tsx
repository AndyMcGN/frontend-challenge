import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { getMonthName } from '@views/user/UserDashboardView';
import React, { ReactElement, useEffect, useState } from 'react';

import dummyData from '../../../../dummyData.json';

const useStyles = makeStyles((theme: Theme) => ({
  th: {
    color: theme.palette.secondary.dark,
    fontWeight: 'bold',
  },
}));

type HistoryData = {
  year: number;
  month: number;
  co2_saved: number;
  reward: number;
}[];

const tableColumnNames = ['CO2 Saved (kg)', 'Month', 'Reward (P)']; // sure there is a good way to get an array of the properties of type HistoryData, but am running out of time.

export default function HistoryTable(): ReactElement {
  const classes = useStyles();

  const [history, setHistory] = useState<HistoryData>([]);
  useEffect(() => {
    async function fetchData() {
      setHistory(dummyData.HISTORY_DATA);
    }
    fetchData();
  }, []);

  const HistoryTableHead = () => (
    <TableHead>
      <TableRow>
        {tableColumnNames.map((name) => (
          <TableCell key={`${name}-header`} className={classes.th}>
            {name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const HistoryTableBody = () => (
    <TableBody>
      {history.map((row) => (
        <TableRow key={`${row.year}-${row.month}`}>
          <TableCell>{row.co2_saved}</TableCell>
          <TableCell>
            {getMonthName(row.month)} {row.year}
          </TableCell>
          <TableCell>{row.reward}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );

  return (
    <TableContainer>
      <Table>
        <HistoryTableHead />
        <HistoryTableBody />
      </Table>
    </TableContainer>
  );
}
