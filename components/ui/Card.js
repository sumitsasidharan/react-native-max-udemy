import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'

const Card = ({ children }) => {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
   card: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 36,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: COLORS.primary800,
      borderRadius: 8,
      elevation: 4, // android only
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 24 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
   },
});