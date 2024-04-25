import { Text, StyleSheet, View } from 'react-native';
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
