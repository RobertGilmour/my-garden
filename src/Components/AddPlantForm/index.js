import React from 'react'
import { Typography, TextField, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    height: "100%"
  },

  formButtons: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

  formButton: {
    marginLeft: theme.spacing(1)
  }
}));

const AddPlantForm = ({ onCancel }) => {
  const classes = useStyles();

  return (
    <Box p={2} height="100%">
      <Typography variant="h6">
        Add new plant
      </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField label="Plant type" fullWidth />
        <TextField label="Variety" fullWidth />
        <Box className={classes.formButtons} >
          <Button className={classes.formButton} variant="contained" color="primary">Add Plant</Button>
          <Button className={classes.formButton} variant="outlined" onClick={onCancel}>Cancel</Button>
        </Box>
      </form>
    </Box>
  )
}

export default AddPlantForm
