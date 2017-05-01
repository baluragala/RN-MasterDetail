import React, {Component} from 'react';
import {StyleSheet, View, Text, Navigator, Button} from 'react-native';
import Dimensions from './utils/Dimensions';
import UserList from './UserList'
import UserDetail from './UserDetail'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './actions'

class MainApp extends Component {

  constructor(props) {
    super(props);
    this.onContactSelected = this.onContactSelected.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    if (nextProps && !Object.keys(nextProps.selectedContact).length && nextProps.contacts.length) {
      this.props.actions.setSelectedContact(nextProps.contacts[0]);
    }
  }

  renderMaster(navigator) {
    return (
      <UserList contacts={this.props.contacts} navigator={navigator} onSelectedContact={this.onContactSelected}
                isFetching={this.props.isFetching}/>
    );
  }

  onContactSelected(contact) {
    this.props.actions.setSelectedContact(contact)
  }

  renderDetail(contact) {
    if (Dimensions.isTablet()) {
      return (
        <UserDetail
          contact={this.props.selectedContact}/>
      );
    }
  }

  renderScene() {
    return (
      <View style={styles.content}>
        {this.renderMaster()}
        {this.renderDetail()}
      </View>)
  }

  render() {
    return (
      <Navigator
        initialRoute={{index:0, data:{}}}
        renderScene={(route,navigator) => {
          if(route.index == 0 )
            return (<View style={styles.content}>
                      {this.renderMaster(navigator)}
                      {this.renderDetail()}
                    </View>);
          else
            return (<UserDetail contact={route.data}/>)
        }}
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) =>
                { return route.index==0 ? null : <Button title="Back" style={styles.navLeft} onPress={()=>navigator.pop()}/>},
               RightButton: (route, navigator, index, navState) =>
                 { return null; },
               Title: (route, navigator, index, navState) =>
                 { return (<Text style={styles.navTitle}>Contacts</Text>); },
             }}
             style={{backgroundColor: '#dde6e9'}}
           />
        }

      />
    );
  }
}

/*function mapStateToProps(state) {
 return {
 contacts: state.contacts,
 selectedContact: state.selectedContact
 }
 }

 function mapDispatchToProps(dispatch) {
 return {
 actions: bindActionCreators(actions, dispatch)
 }
 }*/

export default connect(state => ({
  s: state,
  contacts: state.contacts,
  selectedContact: state.selectedContact,
  isFetching: state.isFetching
}), dispatch => ({
  actions: bindActionCreators(actions, dispatch)
}))(MainApp);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  navLeft: {
    paddingLeft: 20,
    paddingBottom: 20
  },
  navTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

