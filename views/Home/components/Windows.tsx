import React from 'react';
import {Button, Avatar, View, Icon, Text, HStack} from 'native-base';
import {Image, ScrollView, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {selectWindow} from '../../../store/reducers/DataReducer';

function Windows() {
  const windowsData = useSelector(state => state.data.windowsData);
  const selectedWindow = useSelector(state => state.data.selectedWindow);
  const dispatch = useDispatch();

  return (
    <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
      <View style={styles.windowsContainer}>
        <Button
          style={styles.windowButton}
          variant="outline"
          colorScheme="black"
          borderWidth="2"
          size="sm"
          borderRadius={15}
          onPress={() => dispatch(selectWindow(null))}>
          <HStack space={2}>
            <Avatar size="sm" bgColor="#F40000" borderRadius={10}>
              <Icon
                size="lg"
                as={<MaterialCommunityIcons name="magnify" />}
                color="white"
              />
            </Avatar>
            <Text style={{marginTop: 5}}>Fırsat Bul</Text>
          </HStack>
        </Button>
        {windowsData.map((item, key) => (
          <Button
            key={key}
            style={styles.windowButton}
            variant="outline"
            colorScheme="black"
            borderColor={selectedWindow === item.id ? '#F40000' : '#ECEEEF'}
            borderWidth="2"
            onPress={() =>
              selectedWindow === item.id
                ? dispatch(selectWindow(null))
                : dispatch(selectWindow(item.id))
            }
            size="sm"
            borderRadius={15}>
            <HStack space={2}>
              <Avatar size="sm" bgColor="white" borderRadius={10}>
                <Image source={item.logo} />
              </Avatar>
              <Text style={{marginTop: 5}}>{item.title}</Text>
            </HStack>
          </Button>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  windowsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 0,
    marginLeft: 5,
    marginRight: 5,
  },
  windowButton: {
    minWidth: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    height: 45,
  },
});

export default Windows;
