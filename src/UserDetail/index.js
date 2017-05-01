import React, {PropTypes} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from './styles';

const UserList = ({contact}) => (
  (contact.picture) ?
    <View style={styles.main}>
      <Image
        source={{uri: `${contact.picture.large}?key=TRR8-JACP-VN4J-HVEJ`}}
        style={styles.img}
      />

      <Text style={styles.name}>{makeName(contact.name)}</Text>
      <Text style={styles.address}>{contact.email}</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>{contact.location.street}</Text>
        <Text
          style={styles.address}>{contact.location.city}, {contact.location.state}, {contact.location.postcode}</Text>
      </View>
    </View> : null
);

function makeName(name) {
  return `${name.title}. ${name.first}, ${name.last}`
}

function makeAddress(location) {

}

UserList.propTypes = {
  contact: PropTypes.object,
};

export default UserList;
