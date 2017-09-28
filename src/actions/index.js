export const set_user = (data) => (
  {
    type: 'INPUT_NAME',
    payload: {
      username: data.username,
      name: data.name
    }
  }
)

export const update_pohon = (data) => (
  {
    type: 'GROW',
    payload: {
      umur: data.umur,
      fruit: data.fruit,
      keranjang: data.keranjang
    }
  }
)

export const grow = () => {
  return (dispatch, getState) => {
    var newUmur = getState().pohonStore.umur + 1
    var newFruit = Math.floor((Math.random() * 10) + 1);
    var newKeranjang = parseInt(getState().pohonStore.keranjang)  + parseInt(newFruit)

    var payload = {
      umur: newUmur,
      fruit: newFruit,
      keranjang: newKeranjang
    }

    dispatch(update_pohon(payload))
  }
}
