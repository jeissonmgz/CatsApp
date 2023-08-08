import { Router } from './src/Routes/Router';
import { ProvidertCat } from './src/Contexts/ContextCat';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <ProvidertCat>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </ProvidertCat>
    
  );
}