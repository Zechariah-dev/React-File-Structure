import React from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import ScrollToTop from '../../components/ScrollToTop';

import Bg1 from "../../assets/images/Bg_1.svg";
import Bg2 from "../../assets/images/Bg_2.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Bg1}), url(${Bg2})`,
    backgroundPosition: "top left, right bottom 100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  heading: {
    fontSize: "64px",
    fontWeight: 800,
    marginBottom: theme.spacing(5),
  },
  sub_heading: {
    color: theme.palette.text.secondary,
    fontSize: "48px",
    marginBottom: theme.spacing(3),
  },
  body: {
    marginBottom: theme.spacing(3),
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "left",
    height: "100%",
    position: "relative",
    boxSizing: "border-box",
  },
  text_wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
  },
  section: {
    margin: "5rem 0",
    padding: "2rem",
  },
  lower_circle_1: {
    width: "390px",
    height: "390px",
    backgroundColor: "#073567",
    borderRadius: "50%",
    zIndex: theme.zIndex.drawer,
    position: "relative",
    right: "8%",
    bottom: "-8%",
    overflow: "hidden",
    marginBottom: "0",
  },
  upper_circle_1: {
    width: "390px",
    height: "390px",
    backgroundColor: "#C4C4C4",
    borderRadius: "50%",
    zIndex: theme.zIndex.modal,
    position: "relative",
    bottom: "80%",
    left: "-3%",
    overflow: "hidden",
    marginBottom: "-55%",
  },
  lower_circle_2: {
    width: "390px",
    height: "390px",
    backgroundColor: "#073567",
    borderRadius: "50%",
    zIndex: theme.zIndex.drawer,
    position: "relative",
    right: "-4%",
    bottom: "-8%",
    overflow: "hidden",
    marginBottom: "0",
  },
  upper_circle_2: {
    width: "390px",
    height: "390px",
    backgroundColor: "#C4C4C4",
    borderRadius: "50%",
    zIndex: theme.zIndex.modal,
    position: "relative",
    bottom: "80%",
    left: "10%",
    overflow: "hidden",
    marginBottom: "-55%",
  },
  about_img: {
    width: "520px",
    height: "400px",
    backgroundColor: "#c4c4c4",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Navbar />
          <Hero />
          <ScrollToTop />
          <section id="features" className={classes.section}>
            <Typography variant="h3" align="center" className={classes.heading}>
              Features
            </Typography>
            <Grid container>
              <Grid item md={6} xs={12}>
                <div className={classes.wrapper}>
                  <div className={classes.lower_circle_1}></div>
                  <div className={classes.upper_circle_1}></div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.text_wrapper}>
                  <Typography
                    variant="h4"
                    align="left"
                    className={classes.sub_heading}
                  >
                    Attendance System
                  </Typography>
                  <Typography variant="body1" className={classes.body}>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6} xs={12}>
                <div className={classes.text_wrapper}>
                  <Typography
                    variant="h4"
                    align="left"
                    className={classes.sub_heading}
                  >
                    CBT Authenticator
                  </Typography>
                  <Typography variant="body1" className={classes.body}>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections.
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.wrapper}>
                  <div className={classes.lower_circle_2}></div>
                  <div className={classes.upper_circle_2}></div>
                </div>
              </Grid>
            </Grid>
          </section>
          <section id="about" className={classes.section}>
            <Typography variant="h3" align="center" className={classes.heading}>
              About
            </Typography>
            <Grid container style={{ padding: "2rem" }}>
              <Grid item md={6} xs={12}>
                <div className={classes.wrapper}>
                  <Typography
                    variant="body1"
                    color="secondary"
                    className={classes.body}
                  >
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                  </Typography>
                  <Typography
                    variant="body1"
                    color="Secondary"
                    className={classes.body}
                  >
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections
                  </Typography>
                  <Typography
                    variant="body1"
                    color="secondary"
                    className={classes.body}
                  >
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me? " he thought. It wasn't a
                    dream. His room, a proper human
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} xs={12} justify="center" alignItems="center">
                <div className={classes.wrapper}>
                  <div className={classes.about_img}></div>
                </div>
              </Grid>
            </Grid>
          </section>
        </Container>
        <Footer/>
      </div>
    </React.Fragment>
  );
}
