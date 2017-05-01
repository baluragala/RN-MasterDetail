import React, {Component} from 'react'
import {Text} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

export const enhanceWithLoaderHOC = (WrappedComponent) => {
  return class EnhanceWithLoaderHOC extends Component {
    render() {
      return this.props.isFetching ?
        <Spinner visible={this.props.isFetching}
                 textContent={"Please Wait..."}
                 textStyle={{color: 'gray'}}
                 color={"black"}
                 overlayColor={"#dde6e9"}/>
        : <WrappedComponent {...this.props}/>
    }
  }
}