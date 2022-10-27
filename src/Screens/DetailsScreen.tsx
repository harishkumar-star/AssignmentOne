//import liraries
//import {getDefaultNormalizer} from '@testing-library/react-native';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useSelector } from 'react-redux';


const DetailsScreen = () => {
    const comments = useSelector((state) => state.app.comment_sucess);
   
    console.log('postsdetails response---->',comments)

   
 
//   const getPostComments = async (id: number) => {
//     console.log(id);
//     try {
//       let response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//       );
//       let data = await response.json();
//       console.log(data);
//       setComments(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     console.log(route.params.post.id);
//     getPostComments(route.params.post.id);
//   }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.post}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>{item.email}</Text>
        <Text style={{fontSize: 13, fontWeight: '500'}}>{item.name}</Text>
        <Text style={{fontSize: 13, fontWeight: '500'}}>{item.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Text style={styles.title}>{comments.title} </Text>
        <Text style={styles.title}>{comments.body}</Text>
      </View>
      <Text style={{color: 'cyan', marginHorizontal: 20}}>Comments:</Text>
      <FlatList
        testID="COMMENT_LIST"
        data={comments}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  post: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    color:"blue",
    width: '95%',
    padding: 10,
    marginVertical: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    color:"indigo",
    fontWeight: '600',
    marginVertical: 10,
  },
  new:{
    color:"deepskyblue"
  }
});

//make this component available to the app
export default DetailsScreen;
