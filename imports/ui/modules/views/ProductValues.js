import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/img/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/img/values/city.svg"
                alt="city icon"
              />
              <Typography variant="h6" className={classes.title}>
                
              </Typography>
              <Typography variant="h5">
                {'A compelling “melodramedy” about love, loss and redemption set against '}
                {'the social change of a small-town as it struggles to become a city.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/img/values/house.svg"
                alt="house icon"
              />
              <Typography variant="h6" className={classes.title}>
                
              </Typography>
              <Typography variant="h5">
                {'Zena Pepperleigh returns home to Mariposa after 20 years in hopes of rebuilding her life'}
                {', and rekindling her relationship with her old boyfriend, Peter Pupkin.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/img/values/heart.svg"
                alt="heart icon"
              />
              <Typography variant="h6" className={classes.title}>
                
              </Typography>
              <Typography variant="h5">
                {'Sunshine Sketches Homecoming is a TV series about how transformation '}
                {'is possible simply by having faith, hope and love.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
