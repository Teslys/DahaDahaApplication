import {Box, Center, HStack, Pressable, Text} from 'native-base';
import {Image} from 'react-native';

import NavigatorItem from './components/NavigatorItem';
import {StyleSheet} from 'react-native';

function BottomNavigator(): JSX.Element {
  //   const [selected, setSelected] = useState(0);
  return (
    <HStack
      style={styles.navigatiorBox}
      alignItems="center"
      height={120}
      safeAreaBottom>
      <NavigatorItem
        title="Keşfet"
        icon="compass"
        id={0}
        location="Home"></NavigatorItem>
      <Pressable>
        <Box style={styles.centerBox}>
          <Center>
            <Image
              source={require('../../assets/bottomNavigator/Plus_Vector.png')}
            />
          </Center>
        </Box>
      </Pressable>
      <NavigatorItem
        title="Daha Cüzdan"
        icon="star"
        id={1}
        location="Home"></NavigatorItem>
    </HStack>
  );
}
const styles = StyleSheet.create({
  navigatiorBox: {
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#ECEEEF',
    borderWidth: 5,
  },
  centerBox: {
    backgroundColor: 'white',
    height: 90,
    width: 90,
    borderRadius: 25,
    marginBottom: 70,
    borderBottomColor: '#FF8300',
    borderTopColor: '#009639',
    borderLeftColor: '#F40000',
    borderRightColor: '#F1DE02',
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default BottomNavigator;
