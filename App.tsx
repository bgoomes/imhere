import { Text, View, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text key='1' style={styles.eventName}>Nome do evento</Text>
      <Text key='2' style={styles.eventDate}>Terça, 06 de Janeiro de 2025</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
})