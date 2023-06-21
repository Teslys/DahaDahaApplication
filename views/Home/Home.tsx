import {View} from 'react-native';
import Carousel from './components/Carousel';
import Windows from './components/Windows';
import {VStack} from 'native-base';
function HomeScreen() {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <VStack space={5}>
        <Windows></Windows>
        <Carousel></Carousel>
      </VStack>
    </View>
  );
}

export default HomeScreen;
