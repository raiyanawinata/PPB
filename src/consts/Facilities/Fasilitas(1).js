import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const DATA =[
  {
    id: 1,
    nama: "Bedroom",
    image: require("../../assets/Dubai/Dashboard/bedroom.jpg")
  },
  {
    id: 2,
    nama: "Ballroom",
    image: require("../../assets/Dubai/Dashboard/ballroom.jpg")
  },
  {
    id: 3,
    nama: "Pool",
    image: require("../../assets/Dubai/Dashboard/pool.jpg")
  },
  {
    id: 4,
    nama: "Restaurant",
    image: require("../../assets/Dubai/Dashboard/restaurant.jpg")
  },
]

const Fasilitas = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "10%",
          marginHorizontal: 10,
        }}
      >

        <View style={{flexDirection:"row"}}>
          {DATA.map((v)=>(
            
        
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Bedroom")}
        >
          <View style={styles.btn}>
            <Image source={v.image}
            style= {styles.ImageFacilities} 
            />
            </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#534390",
            }}
          >
            {v.nama}
          </Text>
        </TouchableOpacity>
        ))}
        </View>

        
      </View>
    </ScrollView>
  );
};

export default Fasilitas;

const styles = StyleSheet.create({
  ImageFacilities: {
    height: "100%",
    width: "100%",
    margin: 0,
    borderRadius: 25,
  },
  btn: {
    flexDirection:"row",
    height: 100,
    width: 100,
    backgroundColor: "#534390",
    margin: 10,
    borderRadius: 25,
  },
});
