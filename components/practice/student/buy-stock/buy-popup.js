import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {icons} from '../../../../constants';
import StartButton from '../../startButton';
import Option from './option';

const BuyPopup = ({handleClose}) => {
  return (
    <View style={styles.modal}>
      <View style={styles.top}>
        <Text style={styles.title}>Tata Motors</Text>
        <TouchableOpacity onPress={handleClose}>
          <Image
            source={icons.close}
            resizeMode="contain"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputBox}>
        <View style={styles.entryBox}>
          <Text style={styles.subtitle}>Quantity</Text>
          <TextInput placeholder="1" style={styles.entry}></TextInput>
        </View>
        <View style={styles.entryBox}>
          <Text style={styles.subtitle}>Price</Text>
          <TextInput placeholder="0.0" style={styles.entry}></TextInput>
        </View>
      </View>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.section,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.productOption}>
            <Option isSelected text="CNC" />
            <Option text="MIS" />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Order</Text>
          <View style={styles.orderOptions}>
            <Option isSelected text="MARKET" />
            <Option text="LIMIT" />
            <Option text="SL" />
            <Option text="SLM" />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Variety</Text>
          <View style={styles.orderOptions}>
            <Option isSelected text="RGLR" />
            <Option text="BO" />
            <Option text="CO" />
            <Option text="AMO" />
          </View>
        </View>
        <View
          style={[
            styles.section,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <Text style={styles.title}>Validity</Text>
          <View style={styles.productOption}>
            <Option isSelected text="DAY" />
            <Option text="IOC" />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <StartButton text="BUY" onPress={() => console.log('Hello')} />
      </View>
    </View>
  );
};

export default BuyPopup;

const styles = StyleSheet.create({
  bottom: {
    alignItems: 'center',
  },
  entry: {
    padding: 12,

    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  entryBox: {
    width: '50%',
    paddingHorizontal: 6,
  },
  icon: {
    height: 25,
    width: 25,
  },
  inputBox: {
    // height: 80,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.21,
    shadowRadius: 10,
    elevation: 21,
  },
  main: {
    flex: 1,
    width: '100%',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    height: '80%',
    borderRadius: 12,
  },
  orderOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 8,
    marginTop: 16,
  },

  productOption: {
    flexDirection: 'row',
  },
  section: {
    marginVertical: 8,
    paddingVertical: 12,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 3,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 4,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
