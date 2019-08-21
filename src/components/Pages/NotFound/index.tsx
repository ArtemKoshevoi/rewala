import React from 'react';
import { Link } from 'react-router-dom';
import NotFount from '../../../assets/NotFound.png';
import { useStyles } from './style';

const NotFound: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.root} src={NotFount} alt={''}/>
      <Link className={classes.link} to='/'>Return to Home Page</Link>
    </div>
  );
};

export default NotFound;