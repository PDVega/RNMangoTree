const initialState = {
    username: '',
    keranjang: 0,
    name: '',
    umur: 0,
    fruit: 0
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case 'INPUT_NAME':
      return {...state, username: actions.payload.username, name: actions.payload.name }
    case 'GROW':
      return {...state, umur: actions.payload.umur, fruit: actions.payload.fruit, keranjang: actions.payload.keranjang}
    case 'HARVEST':
      return {...state, keranjang: actions.payload.keranjang}
    default:
      return state
  }
}
