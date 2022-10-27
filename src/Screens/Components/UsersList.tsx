import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import {View,Text, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { postcomentsdata } from '../../store/actions/app';


function UsersList() {
    const dispatch:any = useDispatch();
    const navigation = useNavigation();
    const postsdetails = useSelector((state) => state.app.posts_success);
    const [id,setId]=useState();
    console.log('id====',id);
    console.log('postsdetails response---->',postsdetails)

    const onViewableItemsChanged = React.useRef(({ viewableItems, changed }) => {
        if (changed) {
            console.log('changed-->',changed.item.id)
          setId(changed.item.id);        
        }
      })

      const viewabilityConfig = React.useRef({
        itemVisiblePercentThreshold: 50,
        waitForInteraction: true,
        minimumViewTime: 5,
      })

    const Item = ({ title,id }) => (
        <View style={styles.item}>
              <TouchableOpacity onPress={commentsData}>
            <View style={{flexDirection:'row'}}>
          <Text style={styles.id}>{`${id}. `}</Text>
          <Text style={styles.title}>{title}</Text>
          </View>
          </TouchableOpacity>
        </View>
      );

      function commentsData(){
        navigation.navigate('DetailsScreen')
        dispatch(postcomentsdata({values: {id}}))
       }

  const renderItem = ({ item }) => (
    
    <Item id={item.id} title={item.title} />
  );

  return (
    <View style={{flex:1}}>
     <Text style={{color:'#9c27b0',fontSize:22,marginTop:10,justifyContent:'center',textAlign:'center'}}>User Details</Text>
    <SafeAreaView style={styles.container}>
    <FlatList
      data={postsdetails}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
    />
  </SafeAreaView>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      marginTop:10
    },
    item: {
//backgroundColor: '#f9c2ff',
      backgroundColor: '#d279ce',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 13,
      borderRadius:25,
    },
    title: {
      marginLeft:10,
      fontSize: 18,
    },
    id: {
        fontSize: 18,
      },
  });

export default UsersList