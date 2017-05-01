import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Dimensions from '../utils/Dimensions';
import styles from './styles';

class UserList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.contacts),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.contacts)})
  }

  renderContact = (contact) => {
    return (
      <TouchableOpacity style={styles.row}
                        onPress={ Dimensions.isTablet()? ()=>this.props.onSelectedContact(contact) : ()=>this.props.navigator.push({index:1,data:contact}) }>
        <Image
          source={{uri: `${contact.picture.large}?key=TRR8-JACP-VN4J-HVEJ`}}
          style={styles.img}
        />
        <View style={styles.info}>
          <Text style={styles.name}>
            {contact.name.first} {contact.name.last}
          </Text>
          <Text style={styles.phone}>{contact.phone}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  showLoader() {
    return <ActivityIndicator
      animating={this.state.animating}
      style={[styles.centering, {height: 80}]}
      size="large"
    />
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>My contacts!</Text>
        <Spinner visible={this.props.isFetching} textContent={"Loading..."} textStyle={{color: 'gray'}} color={"black"} overlayColor={"#dde6e9"}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderContact}
          style={styles.main}
          enableEmptySections={true}
        />
      </View>

    )
  }
}

export default UserList;
