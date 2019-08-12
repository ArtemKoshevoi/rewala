import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
import {imgStyle} from "./style"

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;
//
//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <img style={imgStyle}
               src={"https://rewala.com/img/logo-desktop.svg"}/>
          <Tab label="Home" component={Link} to="/"/>
          <Tab label="Sing In" component={Link} to="/singin"/>
          <Tab label="Sing Up" component={Link} to="/singup"/>
        </Tabs>
      </AppBar>
    </div>
  );
}
