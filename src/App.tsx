import { StatusBar } from 'react-native';
import { Home } from './screens/Home';

export function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
