import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FirebaseUtil from '../utils/FirebaseUtil';
import { LoginContext } from '../utils/LoginProvider';

export default function HomeScreen() {
  const { user } = useContext(LoginContext);
  const singOut = () => {
    FirebaseUtil.signOut().catch((e) => {
      console.log(e);
      alert('Somthing went wrong');
    });
  };
  return (
    <View style={styles.container}>
      <Text> Home: {user?.email} </Text>
      <Button onPress={() => singOut()} title="Logout " />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  },
});
