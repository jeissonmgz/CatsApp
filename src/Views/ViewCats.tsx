import React, { useEffect } from 'react'
import { ViewModelCat } from '@blocks/ViewModels/BlockCat/ViewModelCat';
import { Center, AspectRatio, Heading, Text, HStack, VStack, Image } from 'native-base';

export const ViewCats = () => {
  const {isLoading, isError, cats, getCats} = ViewModelCat();
    useEffect(() => {
      getCats();
    }, [])
    

  return (
    <>
    <Center><Heading pt={16} p={4} size="lg">Catbreeds</Heading></Center>

      {isLoading && <Text>We are loading...</Text>}
      {isError && <Text>Sorry!!, we have problems</Text>}
    
      {cats.map(cat=> <VStack key={cat.breedName} p={4}>
        <Heading size="md" pb={2}>{cat.breedName}</Heading>
        <AspectRatio w='100%' ratio={7 / 5}>
        <Image source={{
      uri: cat.imageUrl
    }} alt={cat.breedName} borderRadius={12} />
    </AspectRatio>
      <HStack bgColor="black" justifyContent="space-between" mt={2} p={2} borderRadius={4}>
        <Text color="coolGray.100" bold>{cat.origin}</Text>
        <Text color="coolGray.100" bold>IQ: {cat.intelligence}</Text>
      </HStack>
      </VStack>)}
    </>
  )
}