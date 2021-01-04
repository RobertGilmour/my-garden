import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import PlantHeader from '../../Components/PlantHeader'
import { getPlantById } from '../../api/plants'

const PlantDetailsView = () => {
  let { plantId } = useParams();
  const plant = getPlantById(plantId);

  return (
    <>
      <PlantHeader plant={plant} />
      <Container>
        More plant related details
      </Container>
    </>
  )
}

export default PlantDetailsView
