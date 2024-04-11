import { StyleSheet, Text, View } from 'expo-status-bar';
import Title from './SRC/Conponet/Title';
import Main from './SRC/Conponet/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
