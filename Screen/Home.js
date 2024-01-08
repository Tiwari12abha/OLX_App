import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from './Components/Search';


export default function Home() {
  const [filterRes, setFilterRes] = useState([]);
  const [Banner, setBanner] = useState([]);
  const [Cat, setCat] = useState([]);


  const FeatureArray = [
    {
      itemname: 'HONDA AMAZE',
      itemtype: 'Car',
    },
    {
      itemname: 'BMW',
      itemtype: 'Car',
    },
    {
      itemname: 'HONDA AMAZE',
      itemtype: 'Car',
    },
  ];


  const handlesearch = res => {
    console.log(res);
  };

 
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingTop: 5,
        }}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
          <View style={{paddingTop: 4}}>
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/images.krenai.com/o/c8f29acf-6194-11ed-bfe3-0205d6d3dd20%2FI1Screenshot%202022-11-14%20at%206.22.01%20PM.png?alt=media&token=c3c4153a-1f17-4f4e-b6ff-203f51831271',
              }}
            />
          </View>
          <View>
            <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
              {' '}
            OLX
            </Text>
            <Text style={{color: '#ADADAD', fontSize: 14, fontWeight: '500'}}>
              {' '}
              Sell & Purchase
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon
            name={'menu-outline'}
            size={25}
            //color={'#ABB2B9'}
          />
        </View>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Search onfilter={e => handlesearch(e)} array={filterRes} />
      </View>

      <View style={{flex: 1, padding: 10, marginTop: 10}}>
        <ImageBackground
          style={{
            width: 400,
            height: 200,
            opacity: 1,
            position: 'absolute',
          }}
          source={{uri: Banner?.mobileBannerImageUrl}}
        />

        <Text
          style={{
            color: '#253D4E',
            fontSize: 22,
            fontWeight: '600',
            paddingTop: 10,
          }}>
          Don’t miss our daily
        </Text>
        <Text style={{color: '#253D4E', fontSize: 22, fontWeight: '600'}}>
          amazing deals.
        </Text>
        <TouchableOpacity
          style={{
            //  marginTop: 10,
            width: '30%',
            flex: 1,
            backgroundColor: '#0B0B45',
            padding: 10,
            //  borderColor: '#DEDEDE',
            // borderWidth: 1,
            borderRadius: 5,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
          onPress={() => {
            console.log('hii');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 13, fontWeight: '500'}}>
              View Products
            </Text>
            <View style={{paddingTop: 4}}>
              <Icon name={'arrow-forward-outline'} size={10} color={'white'} />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 10,
          marginTop: 40,
          marginBottom: 10,
          flex: 1,
          // borderColor:'red',
          // borderWidth:3
        }}>
        <View>
          <Text style={styles.title}>Fresh Recommendations</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('hii');
           
          }}>
          <Text style={styles.ViewTitle}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={{paddingLeft: 10}}>
        {FeatureArray.map((item, index) => (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#EEEEEE',
              borderWidth: 2,
              // alignItems: 'center',
              //justifyContent: 'center',
              paddingTop: 10,
              paddingBottom: 5,
              paddingHorizontal: 15,
              marginRight: 20,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{width: 120, height: 80}}
                source={require('./assests/car.jpg')}
              />
            </View>
            <Text style={styles.itemnumber}>{item?.itemname}</Text>
            <Text style={[styles.itemnumber, {color: '#444444', fontSize: 14}]}>
              {item?.itemtype}
            </Text>

          
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                marginTop: 4,
              }}>
              <Text
                style={[styles.itemnumber, {color: '#444444', fontSize: 18}]}>
                ₹3,75,000{' '}
              </Text>
              <Text
                style={[
                  styles.itemnumber,
                  {
                    color: 'orange',
                    fontSize: 14,
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    paddingTop: 3,
                  },
                ]}>
                ₹10,000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingBottom: 10,
              }}>
                 <Text
                style={[styles.itemnumber, {color: '#444444', fontSize: 18}]}>
                4{' '}
              </Text>
              <Icon name={'star'} size={20}  />
              </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
           <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#01377D',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical:5
          }}
          onPress={() => {
            console.log('hii');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              //alignItems: 'center',
              //justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>
              Buy Now
            </Text>
            <View style={{paddingTop: 4}}>
              <Icon name={'arrow-forward-outline'} size={10} color={'white'} />
            </View>
          </View>
        </TouchableOpacity>

              <View style={{paddingTop: 8,alignItems:'center'}}>
                <Icon
                  name={'heart-outline'}
                  size={30}
                  //color={'white'}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 10,
          marginTop: 40,
          marginBottom: 10,
          flex: 1,
          // borderColor:'red',
          // borderWidth:3
        }}>
        <View>
          <Text style={styles.title}>Explore Categories</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('hii');
           
          }}>
          <Text style={styles.ViewTitle}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={{paddingLeft: 10}}>
        {FeatureArray.map((item, index) => (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#EEEEEE',
              borderWidth: 2,
              // alignItems: 'center',
              //justifyContent: 'center',
              paddingTop: 10,
              paddingBottom: 5,
              paddingHorizontal: 15,
              marginRight: 20,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{width: 120, height: 80}}
                source={require('./assests/car.jpg')}
              />
            </View>
            <Text style={styles.itemnumber}>{item?.itemname}</Text>
            <Text style={[styles.itemnumber, {color: '#444444', fontSize: 14}]}>
              {item?.itemtype}
            </Text>

          
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                marginTop: 4,
              }}>
              <Text
                style={[styles.itemnumber, {color: '#444444', fontSize: 18}]}>
                ₹3,75,000{' '}
              </Text>
              <Text
                style={[
                  styles.itemnumber,
                  {
                    color: 'orange',
                    fontSize: 14,
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    paddingTop: 3,
                  },
                ]}>
                ₹10,000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingBottom: 10,
              }}>
                 <Text
                style={[styles.itemnumber, {color: '#444444', fontSize: 18}]}>
                5{' '}
              </Text>
              <Icon name={'star'} size={20}  />
              </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
           <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#01377D',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical:5
          }}
          onPress={() => {
            console.log('hii');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              //alignItems: 'center',
              //justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>
              Buy Now
            </Text>
            <View style={{paddingTop: 4}}>
              <Icon name={'arrow-forward-outline'} size={10} color={'white'} />
            </View>
          </View>
        </TouchableOpacity>

              <View style={{paddingTop: 8,alignItems:'center'}}>
                <Icon
                  name={'heart-outline'}
                  size={30}
                  //color={'white'}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 30,
        }}>
        <Text style={styles.title}>Featured Products</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('hii');
      
            // navigation.navigate('Home');
          }}>
          <Text style={styles.ViewTitle}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal={true} style={{paddingLeft: 10}}>
        {FeatureArray.map((item, index) => (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#EEEEEE',
              borderWidth: 2,
              // alignItems: 'center',
              //justifyContent: 'center',
              paddingTop: 10,
              paddingBottom: 5,
              paddingHorizontal: 15,
              marginRight: 20,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{width: 120, height: 80}}
                source={require('./assests/car.jpg')}
              />
            </View>
            <Text style={styles.itemnumber}>{item?.itemname}</Text>
            <Text style={[styles.itemnumber, {color: '#444444', fontSize: 14}]}>
              {item?.itemtype}
            </Text>

          
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                marginTop: 4,
              }}>
              <Text
                style={[styles.itemnumber, {color: '#444444', fontSize: 18}]}>
                ₹3,75,000{' '}
              </Text>
              <Text
                style={[
                  styles.itemnumber,
                  {
                    color: 'orange',
                    fontSize: 14,
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    paddingTop: 3,
                  },
                ]}>
                ₹10,000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingBottom: 10,
              }}>
                 <Text
                style={[styles.itemnumber, {color: '#444444', fontSize: 18}]}>
                3{' '}
              </Text>
              <Icon name={'star'} size={20}  />
              </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
           <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#01377D',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical:5
          }}
          onPress={() => {
            console.log('hii');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              //alignItems: 'center',
              //justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>
              Buy Now
            </Text>
            <View style={{paddingTop: 4}}>
              <Icon name={'arrow-forward-outline'} size={10} color={'white'} />
            </View>
          </View>
        </TouchableOpacity>

              <View style={{paddingTop: 8,alignItems:'center'}}>
                <Icon
                  name={'heart-outline'}
                  size={30}
                  //color={'white'}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ViewTitle: {
    color: '#0B0B45',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  title: {
    color: '#253D4E',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  itemname: {
    color: '#253D4E',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
  },
  itemnumber: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '500',
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#3BB77E',
  },
  selectedTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3BB77E',
  },
  dropdown: {
    //height: 50,
    borderBottomStyle: 'dotted',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    //borderRadius: 8,
    //paddingHorizontal: 8,
  },
  Itembox: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
    borderWidth: 2,
    borderRadius: 3,
    // alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 10,
    marginRight: 20,
  },
});
