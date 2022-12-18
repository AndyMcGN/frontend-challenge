import HistoryTable from '@components/user/history/HistoryTable';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.secondary.dark,
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: '20',
  },
}));

export const UserHistoryView = (): ReactElement => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.header}>Rewards History</h1>

      <HistoryTable />
    </div>
  );
};
