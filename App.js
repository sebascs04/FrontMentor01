import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Result from './components/Result';
import Summary from './components/Summary';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Result/>
        <Summary />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
