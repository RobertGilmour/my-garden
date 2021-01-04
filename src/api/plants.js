export const getPlants = () => {
  return [
    {
      id: "1",
      type: "Tomato",
      variety: "Gardeners' Delight"
    },
    {
      id: "2",
      type: "Tomato",
      variety: "San Marzano Lungo"
    },
    {
      id: "3",
      type: "Tomato",
      variety: "Gardeners' Delight"
    },
    {
      id: "4",
      type: "Tomato",
      variety: "San Marzano Lungo"
    },
    {
      id: "5",
      type: "Tomato",
      variety: "Gardeners' Delight"
    },
    {
      id: "6",
      type: "Tomato",
      variety: "San Marzano Lungo"
    },
    {
      id: "7",
      type: "Tomato",
      variety: "Gardeners' Delight"
    },
    {
      id: "8",
      type: "Tomato",
      variety: "San Marzano Lungo"
    },
    {
      id: "9",
      type: "Tomato",
      variety: "Gardeners' Delight"
    },
    {
      id: "10",
      type: "Tomato",
      variety: "San Marzano Lungo"
    },
  ]
}

export const getPlantById = (id) => {
  return getPlants().filter(i => i.id === id)[0];
}