import { View, Text } from 'react-native'
import React from 'react'
import TouchButton from '../../components/TouchButton'

export default function Test() {
  return (
    <View>
      <Text>index</Text>
      <TouchButton route="Home" title="Go to Home" />
        <TouchButton route="Category" title="Go to Category" />
    </View>
  )
}