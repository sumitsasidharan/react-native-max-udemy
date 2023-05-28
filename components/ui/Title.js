import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


const Title = ({ children }) => {
   return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
   title: {
      fontFamily: 'open-sans-bold',
      fontSize: 24,
      // fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: 'white',
      padding: 12,
   },
});
