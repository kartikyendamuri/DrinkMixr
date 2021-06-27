import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});



export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const [free, setFree] = React.useState(30);
  const [ren, setRen] = React.useState(30);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  }

  const knobChange = (event, newFree) => {
    console.log(newFree);
    setFree(newFree);
 
  };

  const doorChange = (event, newRen) => {
    console.log(newRen);
    setRen(newRen);
 
  };

  const giveOrder = () => {
    var order = {
      "user_name": "Sujay Garlanka",
      "priming": false,
      "order": {
          "Fanta": 1.0,
          "Sprite": 1.0
      }
  }
  
  axios.post("https://stark-beach-45459.herokuapp.com/order",order)

  }
  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Drink 1
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
  
      <Typography id="continuous-slideragain" gutterBottom>
        Drink 2
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider free={free} onChange={knobChange} aria-labelledby="continuous-slideragain" />
        </Grid>
        <Grid item>
          <VolumeDown />
        </Grid>
      </Grid>
      

      <Typography id="continuous-slideragagin" gutterBottom>
        Drink 3
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider ren={ren} onChange={doorChange} aria-labelledby="continuous-slideragagin" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
  
      <Typography id="continuous-slideragain" gutterBottom>
        Drink 4
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider free={free} onChange={knobChange} aria-labelledby="continuous-slideragain" />
        </Grid>
        <Grid item>
          <VolumeDown />
        </Grid>
      </Grid>


      <Button variant="primary" size="lg" onClick={giveOrder}>
      Send Order
      </Button>
      


    </div>
    
  );
  
}