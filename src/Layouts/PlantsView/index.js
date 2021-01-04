import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { List, ListItem, ListItemText, Fab, AppBar, Toolbar, Container, Typography, Tooltip, Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Add as AddIcon } from '@material-ui/icons'
import { getPlants } from '../../api/plants'
import AddPlantForm from '../../Components/AddPlantForm';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const PlantsView = () => {
  const classes = useStyles();
  const [addPlantDrawerOpen, setAddPlantDrawerOpen] = useState(false);

  const openAddPlantDrawer = () => {
    setAddPlantDrawerOpen(true);
  }

  const closeAddPlantDrawer = () => {
    setAddPlantDrawerOpen(false);
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Plants
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <List>
          {
            getPlants().map(i =>
              <ListItem key={i.id} component={RouterLink} button to={`/plants/${i.id}`}>
                <ListItemText primary={i.type} secondary={i.variety} />
              </ListItem>)
          }
        </List>

        <Tooltip title="Add new plant" aria-label="add">
          <Fab color="primary" className={classes.fab} onClick={openAddPlantDrawer}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Container>
      <Drawer open={addPlantDrawerOpen} onClose={closeAddPlantDrawer} anchor="right">
        <AddPlantForm onCancel={closeAddPlantDrawer} />
      </Drawer>
    </>
  )
}

export default PlantsView
