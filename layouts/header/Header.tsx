import React, {useState} from 'react';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Avatar,
  Badge,
} from 'native-base';
import {Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Header() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <StatusBar bg="#FFFFFF" barStyle="light-content" />
      <Box safeAreaTop bg="#FFFFFF" />
      <HStack
        bg="#FFFFFF"
        px="1"
        py="10"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <Image source={require('../../assets/header/logo.png')} />
        </HStack>
        <HStack space={2}>
          {login ? null : (
            <Button
              onPress={() => setLogin(true)}
              bg={'#F40000'}
              borderRadius={25}
              height={45}>
              Giriş Yap
            </Button>
          )}
          <VStack>
            {login ? (
              <Badge // bg="red.400"
                bgColor="transparent"
                rounded="full"
                mb={-4}
                mr={-2}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end">
                <Avatar
                  borderColor="white"
                  borderWidth="2"
                  size="3"
                  bgColor="#009639"></Avatar>
              </Badge>
            ) : null}

            <Avatar bg={login ? '#F40000' : '#1D1E1C'}>
              <Icon
                size={'xl'}
                as={<MaterialCommunityIcons name="account" />}
                color={'white'}
              />
            </Avatar>
            <Badge></Badge>
          </VStack>
        </HStack>
      </HStack>
    </>
  );
}

export default Header;
