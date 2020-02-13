import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import WifiIcon from '@material-ui/icons/Wifi';
import SecurityIcon from '@material-ui/icons/Security';
import PermScanWifiIcon from '@material-ui/icons/PermScanWifi';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="report types"
        centered
      >
        <Tab icon={<WifiIcon />} label="INTERNET SPEED" />
        <Tab icon={<ReportProblemIcon />} label="CYBER ATTACKS" />
      </Tabs>
    </Paper>
  );
}
