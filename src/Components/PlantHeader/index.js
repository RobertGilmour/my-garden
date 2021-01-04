import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

const PlantHeader = ({ plant }) => {
  let history = useHistory();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="back" onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
      </Toolbar>
      <h1>{plant.type}</h1>
      <h2>{plant.variety}</h2>
    </AppBar>
  )
}

export default PlantHeader
