import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { grow } from '../actions'

class Grow extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> This is {this.props.name}</Text>
          <Text style={styles.title}> He is {this.props.umur}</Text>
          <Text style={styles.title}> Keranjang: {this.props.keranjang}</Text>
        </View>
        <View style={styles.logoContainer}>
         {this.props.umur >= 20 ? <Image style={styles.logo} source={require('../assets/4.png')}></Image> : <Image></Image>}
         {this.props.umur >= 15 && this.props.umur < 20 ? <Image style={styles.logo} source={require('../assets/3.png')}></Image> : <Image></Image>}
         {this.props.umur >= 10 && this.props.umur < 15 ? <Image style={styles.logo} source={require('../assets/2.png')}></Image> : <Image></Image>}
         {this.props.umur >= 5 && this.props.umur < 10 ? <Image style={styles.logo} source={require('../assets/1.png')}></Image> : <Image></Image>}
         {this.props.umur >= 0 && this.props.umur < 5 ? <Image style={styles.logo} source={require('../assets/0.png')}></Image> : <Image></Image>}
        </View>
        <View style={styles.formContainer}>
        <TouchableOpacity onPress={() => this.props.tumbuh()} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Grow</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#2d75cc'
  },
  title: {
    color: '#fff',
    opacity: 0.8,
    fontWeight: '900'
  },
  titleContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  formContainer: {
    padding: 20
  },
  buttonContainer: {
    paddingVertical: 15,
    backgroundColor: '#27ae60'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
    opacity: 0.8
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent:'space-between'
  },
  logo: {
    width: 150,
    height: 150
  }
})

const mapStateToProps = (state) => {
  return {
    username: state.pohonStore.username,
    name: state.pohonStore.name,
    umur: state.pohonStore.umur,
    keranjang: state.pohonStore.keranjang,
    fruit: state.pohonStore.fruit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tumbuh: () => dispatch(grow())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grow)
