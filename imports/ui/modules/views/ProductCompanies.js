import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  image: {
    height: 55,
    paddingTop: 20,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  image2: {
    height: 75,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
});

function ProductCompanies(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      {/* <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography> */}
      <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/img/companies/NOHF.png"
                  alt="North Ontario Heritage Fund"
                  className={classes.image2}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="/img/companies/CMF.jpeg"
                  alt="Canada Media Fund"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <a href="https://www.cityofnorthbay.ca">
                  <img
                    src="/img/companies/NB.png"
                    alt="North Bay"
                    className={classes.image}
                  />
                </a>
              </div>
            </Grid>

          </Grid>
        </div>
    </Container>
  );
}

ProductCompanies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCompanies);
