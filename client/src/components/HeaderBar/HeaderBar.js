import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import LoggedInFeatures from './LoggedInFeatures';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerButtons: {
    width: 160,
    height: 35,
    fontSize: 15
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration: 'none', color:'white'}}><Typography className={classes.title} variant="h6" noWrap>
            E-Commerce
          </Typography></Link>
          <Typography className={classes.title} variant="h6" noWrap>
            
          </Typography>
          
          <Grid container alienItems="flex-start" justify="flex-end" direction="row">

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={props.handleInputChange}
              onSubmit={props.onSubmit}
              value={props.search}
              name="search"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

            <Link to="/search" style={{textDecoration: 'none', color:'white'}}><Button color="inherit" onClick={props.saveCookie}>search</Button></Link>

            <LoggedInFeatures/>
            
            <Link to="/signup" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">{props.currentAccount}</Button></Link>

          
          </Grid>
        </Toolbar>
      </AppBar>
      <Link to="/search">
      <Grid container spacing={0} direction="row" justify="center">

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Clothing", e)} className={classes.headerButtons}>Clothing</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Sports", e)} className={classes.headerButtons}>Sports</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Gardening", e)} className={classes.headerButtons}>Gardening</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Electronics", e)} className={classes.headerButtons}>Electronics</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Toys", e)} className={classes.headerButtons}>Toys</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Books", e)} className={classes.headerButtons}>Books</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Business", e)} className={classes.headerButtons}>Business</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Exercise", e)} className={classes.headerButtons}>Exercise</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Music", e)} className={classes.headerButtons}>Music</Button>

      <Button variant="contained" color="default" onClick={(e) => props.SaveCookieTag("Art", e)} className={classes.headerButtons}>Art</Button>

      </Grid>
      </Link>
    </div>
    
  );
}
