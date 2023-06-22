import {useNavigation} from '@react-navigation/native';
import {Center, VStack, Badge, Avatar, HStack, Fab} from 'native-base';
import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectNavigation} from '../../../store/reducers/NavigatorReducer';

// Default Sample Data

// Default Props
const defaults = {
  height: 340,
  width: Dimensions.get('window').width,
  delay: 5000,
};

// Default Image Item
const Item = ({title, image, height, width, onPress, color, icon, id}) => {
  let navigation = useNavigation();
  let dispatch = useDispatch();
  return (
    <View
      style={{
        paddingBottom: 18,
        marginLeft: 7,
        marginRight: 7,
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: -15,
          right: 18,
          top: 15,
          backgroundColor: 'transparent',
          borderRadius: 10,
          borderBottomColor: color,
          borderBottomWidth: 35,
          transform: [
            {
              translateY: 44,
            },
            {rotateZ: '1.8deg'},
            {translateX: 20},
          ],
        }}></View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[styles.imageContainer, {height: height, width: width}]}>
        <VStack>
          <Image
            source={{uri: image}}
            style={[styles.image, {height: height * 0.6}]}
          />
          <Badge // bg="red.400"
            bg="transparent"
            mb={5}
            mt={-12}
            ml={0}
            zIndex={1}
            variant="solid"
            alignSelf="flex-start"
            size="xl">
            <Avatar bg={'white'} size="lg" source={icon} padding={1}></Avatar>
          </Badge>
          <Fab
            renderInPortal={false}
            shadow={2}
            placement="bottom-right"
            mb={8}
            size="xs"
            mr={-2}
            bgColor="#1D1E1C"
            label="Son 12 Gün"
          />
        </VStack>

        <Center>
          <View style={styles.titleContainer}>
            {title && <Text style={styles.title}>{title} </Text>}
          </View>
        </Center>
        <Center>
          <View style={{marginTop: 15}}>
            <TouchableOpacity
              onPress={() => {
                dispatch(selectNavigation(-1));
                navigation.navigate('InfoModal', {
                  id: id,
                });
              }}>
              <Text style={{color: color}}>Daha Daha</Text>
            </TouchableOpacity>
          </View>
        </Center>
      </TouchableOpacity>
    </View>
  );
};

// Default On Press Action
const handlePress = item => {
  // console.log('Pressed', item.id);
};

// Carousal Component
export default function Carousal({
  height = defaults.height,
  width = defaults.width * 0.85,
  delay = defaults.delay,
  onPress = handlePress,
  ItemElement = Item,
}) {
  const [selectedIndex, setselectedIndex] = useState(0);
  const scrollView = useRef();
  const data = useSelector(state => state.data.carouselData);
  const selectedWindow = useSelector(state => state.data.selectedWindow);
  const windowsData = useSelector(state => state.data.windowsData);

  // Script which will only executed when component initilizes
  useEffect(() => {
    const fn = setInterval(() => {
      setselectedIndex(oldCount =>
        oldCount === data.length - 1 ? 0 : oldCount + 1,
      );
    }, delay);
    return () => {
      clearInterval(fn);
    };
  }, []);

  // Script will executed every time selectedIndex updates
  useEffect(() => {
    scrollView.current.scrollTo({
      animated: true,
      x: width * selectedIndex,
      y: 0,
    });
  }, [selectedIndex]);

  const setIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setIndex}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.carousalContainer}>
          {data
            .filter(item =>
              !selectedWindow ? true : selectedWindow == item.categoryId,
            )
            .map((item, key) => {
              let logo = windowsData.find(
                res => res.id == item.categoryId,
              ).largeLogo;
              return (
                <ItemElement
                  key={item.id}
                  height={height}
                  width={width}
                  {...item}
                  icon={logo}
                  onPress={() => onPress(item)}
                  id={item.id}
                />
              );
            })}
        </View>
      </ScrollView>
      <Center>
        <HStack mt={15} space={2}>
          {data
            .filter(item =>
              !selectedWindow ? true : selectedWindow == item.categoryId,
            )
            .map((item, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => setselectedIndex(key)}>
                  <View
                    style={{
                      width: selectedIndex == key ? 25 : 10,
                      height: 10,
                      borderRadius: 150,
                      backgroundColor:selectedIndex == key ? item.color : "#D8D8D8",
                    }}></View>
                </TouchableOpacity>
              );
            })}
        </HStack>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  carousalContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  imageContainer: {
    backgroundColor: '#F4F6F5',
    overflow: 'hidden',
    borderRadius: 15,
    padding: 10,
  },
  item: {
    backgroundColor: 'rgba(91, 91, 91, 0.3)',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    paddingLeft: 10,
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
  },
  image: {
    width: defaults.width,
    height: defaults.height * 0.8,
    borderBottomLeftRadius: 110,
    borderRadius: 25,
  },
});
