import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ReactElement, useEffect } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.secondary.dark,
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: '20',
  },
  header2: {
    color: theme.palette.secondary.main,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0,
    paddingBlock: '15px 5px',
  },
  question: {
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 1.6,
    marginBlock: '10px 3px',
  },
  answer: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: 1.6,
    margin: '0 0 15px ',
  },
  indented: {
    margin: 0,
    textIndent: '40px',
  },
  btb: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: 1.6,
    margin: '0 0 15px ',
  },
}));

export const DomManipulationView = (): ReactElement => {
  const classes = useStyles();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'contentscript.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      window.location.reload();
    };
  }, []);

  return (
    <section>
      <h1 className={classes.header}>Dummy Structure for DOM Manipulation</h1>
      <div>
        <h2 className={classes.header2}>Not So Important Title</h2>
        <p className={classes.question}>Asdf</p>
        <p className={classes.answer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <div>
        <h2 className={classes.header2}>More Text</h2>
        <p className={classes.question}>Budget-to-Beat</p>
        <p className={classes.btb}> 351 €</p>
        <p className={classes.answer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p className={classes.question}>Are rewards paid out for canceled or changed bookings?</p>
        <p className={classes.answer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p className={classes.question}>
          What&apos;s the description of the three repos which appear when searching &apos;climate change&apos;?
        </p>
        <p className={classes.answer}>
          Every minute, the world loses an area of forest the size of 48 football fields. And deforestation in the
          Amazon Basin accounts for the largest share, contributing to reduced biodiversity, habitat loss, climate
          change, and other devastating effects. But better data about the location of deforestation and human
          encroachment on forests can help governments and local stakeholders respond more quickly and effectively.
          Planet, designer and builder of the world’s largest constellation of Earth-imaging satellites, will soon be
          collecting daily imagery of the entire land surface of the earth at 3-5 meter resolution. While considerable
          research has been devoted to tracking changes in forests, it typically depends on coarse-resolution imagery
          from Landsat (30 meter pixels) or MODIS (250 meter pixels). This limits its effectiveness in areas where
          small-scale deforestation or forest degradation dominate. Furthermore, these existing methods generally cannot
          differentiate between human causes of forest loss and natural causes. Higher resolution imagery has already
          been shown to be exceptionally good at this, but robust methods have not yet been developed for Planet
          imagery. In this competition, Planet and its Brazilian partner SCCON are challenging Kagglers to label
          satellite image chips with atmospheric conditions and various classes of land cover/land use. Resulting
          algorithms will help the global community better understand where, how, and why deforestation happens all over
          the world - and ultimately how to respond.
        </p>
      </div>
    </section>
  );
};
