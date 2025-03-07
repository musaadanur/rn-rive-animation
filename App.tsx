import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Rive from 'rive-react-native';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animasyon yüklendiğinde `isLoaded`'ı true yapıyoruz
    setIsLoaded(true);
  }, []);

  return (
    <View style={styles.container}>
      {!isLoaded ? (
        <View style={styles.splashScreen}>
          {/* Burada hiç bir şey göstermiyoruz veya sadece siyah arka planla bir geçiş kullanabilirsiniz */}
        </View>
      ) : (
        <Rive 
          resourceName="helloworld2"
          artboardName="Artboard 2"
          stateMachineName="SM1"
          style={styles.box}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#000000", // Arka planı siyah yapıyoruz
  },
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Splash ekranı siyah
  },
  box: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default App;
