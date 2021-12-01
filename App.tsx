import { StatusBar } from 'expo-status-bar'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [activeAnim, setActiveAnim] = React.useState('dog')

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.notchSpacer} />
      {activeAnim == 'dog' ? (
        <View>
          <Text
            style={{ textAlign: 'center', fontSize: 25, fontWeight: '700' }}>
            Test me...I dare you!
          </Text>
          <LottieView
            source={require('./assets/animations/qa-test-dog.json')}
            loop
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              marginTop: 10,
            }}
          />
          <View
            style={{
              borderRadius: 10,
              width: '80%',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Button
              title='Lets do this!'
              onPress={() => {
                setActiveAnim('not dog')
              }}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text
            style={{ textAlign: 'center', fontSize: 25, fontWeight: '700' }}>
            Now to the moon we go!
          </Text>
          <LottieView
            source={require('./assets/animations/qa-test-rocket.json')}
            loop
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              borderRadius: 10,
              width: '80%',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Button
              title='Blast off!'
              color='maroon'
              onPress={() => {
                setActiveAnim('dog')
              }}
            />
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notchSpacer: {
    height: Platform.OS === 'ios' ? 50 : 30,
  },
})
