import React from 'react';
import {
  View,
  VStack,
  Avatar,
  Badge,
  ScrollView,
  Fab,
  Icon,
  Heading,
  Text,
  Button,
  Center,
  Box,
} from 'native-base';
import {Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {selectNavigation} from '../../store/reducers/NavigatorReducer';
import {useDispatch, useSelector} from 'react-redux';
const DataModal = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {id} = route.params;

  const findedCarouselData = useSelector(state =>
    state.data.carouselData.find(item => item.id == id),
  );
  const findWindowsData = useSelector(state =>
    state.data.windowsData.find(
      item => item.id === findedCarouselData.categoryId,
    ),
  );

  console.log(findedCarouselData);
  return (
    <View>
      <ScrollView
        style={{width: '100%', height: '100%', backgroundColor: '#F4F6F5'}}>
        <Fab
          renderInPortal={false}
          shadow={2}
          placement="top-left"
          size="sm"
          bgColor="#1D1E1C"
          icon={
            <Icon color="white" as={MaterialIcons} name="arrow-back" size="4" />
          }
          onPress={() => {
            dispatch(selectNavigation(0));
            navigation.goBack();
          }}
        />
        <VStack>
          <Image
            source={{
              uri: findedCarouselData.image,
            }}
            style={{height: 350, borderBottomLeftRadius: 120}}
          />
          <Fab
            renderInPortal={false}
            shadow={2}
            placement="bottom-right"
            mb={15}
            size="sm"
            bgColor="#1D1E1C"
            label="Son 12 Gün"
          />
          <Badge // bg="red.400"
            bg="transparent"
            style={{marginTop: -50}}
            mt={-12}
            ml={2}
            zIndex={1}
            variant="solid"
            alignSelf="flex-start">
            <Avatar
              bg={'white'}
              size="lg"
              source={findWindowsData.largeLogo}
              padding={1}></Avatar>
          </Badge>
        </VStack>
        <VStack>
          <Heading size="md" ml="5" mt="5">
            {findedCarouselData.title}
          </Heading>
          <Text fontWeight="400" ml="5">
            {findedCarouselData.description}
          </Text>
        </VStack>
      </ScrollView>

      <Box
        position="absolute"
        bottom="0"
        width="100%"
        height="10%"
        bgColor="rgba(255, 255, 255,0.8)">
        <Center>
          <Button
            onPress={() => console.log('hello world')}
            width="90%"
            borderRadius="125"
            marginTop="1.5"
            size="60"
            bgColor="#F40000">
            Hemen Katıl
          </Button>
        </Center>
      </Box>
    </View>
  );
};

export default DataModal;
