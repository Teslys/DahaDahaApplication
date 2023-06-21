import {Text, Icon, Center, Pressable, Badge} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import {selectNavigation} from '../../../store/reducers/NavigatorReducer';
import {useNavigation} from '@react-navigation/native';

interface props {
  title: string;
  icon: string;
  id: number;
  location: string;
}
function NavigatorItem({title, icon, id, location}: props): JSX.Element {
  const selected = useSelector(state => state.navigator.selected);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Pressable
      opacity={selected === id ? 1 : 0.5}
      py="3"
      flex={1}
      onPress={() => {
        dispatch(selectNavigation(id));
        navigation.navigate(location, {});
      }}>
      <Center>
        {id == 2 ? (
          <Badge // bg="red.400"
            colorScheme="danger"
            rounded="full"
            mb={-4}
            mr={6}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
            _text={{
              fontSize: 12,
            }}>
            {/* {cart.length} */}
          </Badge>
        ) : (
          <></>
        )}
        <Icon
          mt="2"
          as={<Ionicons name={icon} />}
          size="2xl"
          color={selected === id ? 'black' : '#1D1E1C'}
        />
        <Text fontSize="12">{title}</Text>
      </Center>
    </Pressable>
  );
}

export default NavigatorItem;
