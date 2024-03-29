import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

import Safeview from '../../../common/safeview';
import {icons} from '../../../../constants';
import PriceChart from './price-chart';
import StartButton from '../../startButton';
import BuyPopup from './buy-popup';
const BuyStock = ({navigation, route}) => {
  const [currentPrice, setCurrentPrice] = useState();
  const [dayChange, setDayChange] = useState();
  const [high52, setHigh52] = useState();
  const [low52, setLow52] = useState();
  const [open, setOpen] = useState();
  const [prevClose, setPrevClose] = useState();
  const [dayHigh, setDayHigh] = useState();
  const [dayLow, setDayLow] = useState();
  const [vol, setVol] = useState();
  const [percentChange, setPercentChange] = useState();
  const [finalData, setFinalData] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(!showModal);
  };
  const getData = async () => {
    const data = await fetch(
      `https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/TEL`,
    );
    const res = await data.json();
    setCurrentPrice(res.data.pricecurrent);
    setDayChange(res.data.pricechange);
    setHigh52(res.data[`52H`]);
    setLow52(res.data[`52L`]);
    setOpen(res.data.OPN);
    setPrevClose(res.data.priceprevclose);
    setDayHigh(res.data.HP);
    setDayLow(res.data.LP);
    setVol(res.data.VOL);
    setPercentChange(res.data.pricepercentchange);
  };
  const getChartData = async () => {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/TATAMOTORS.NS?region=IN&lang=en-IN&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=in.finance.yahoo.com&.tsrc=finance`,
    );
    const data = await res.json();
    const chartXData = data.chart.result[0].timestamp.map(
      item => (item % 1614656700) / 300,
    );
    const chartYData = data.chart.result[0].indicators.quote[0].open.map(item =>
      parseFloat(item).toFixed(2),
    );

    const length = data.chart.result[0].indicators.quote[0].open.length;
    const tempData = [];
    for (i = 0; i < length; i++) {
      if (i % 3 === 0) continue;
      tempData.push({
        x: chartXData[i],
        y: chartYData[i],
      });
    }
    setFinalData(tempData);
  };
  useEffect(() => {
    getData();
    getChartData();
  }, []);
  return (
    // copying from groww
    <Safeview style={styles.container}>
      <Modal isVisible={showModal}>
        <BuyPopup handleClose={handleClose} />
      </Modal>
      <View style={styles.navigatior}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.stock} showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
          <Image
            style={styles.companyLogo}
            source={{
              uri: `https://assets-netstorage.groww.in/stock-assets/logos/INE155A01022.png`,
            }}
          />
          <View style={styles.headTitle}>
            <Text style={styles.symbol}>Tata Motors</Text>
            <Text style={styles.companyName}>Tata Motors</Text>
          </View>
        </View>
        <View style={styles.price}>
          {currentPrice && (
            <Text style={styles.currentPrice}>₹ {currentPrice}</Text>
          )}
          {dayChange && (
            <Text
              style={{
                ...styles.changePrice,
                color: percentChange < 0 ? 'green' : 'red',
              }}>
              {`${dayChange} (${percentChange}%)`}
            </Text>
          )}
        </View>
        <View
          style={{
            marginBottom: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>{finalData && <PriceChart data={finalData} />}</View>
        </View>
        <View>
          <Text style={styles.sectionName}>Performance</Text>
          <View style={{marginBottom: 18}}>
            <View style={styles.lowHigh}>
              <View style={styles.lowHighLowContainer}>
                <Text style={styles.lowHighLow}>Low Today</Text>
                {dayLow && <Text style={styles.lowHighLow}>₹ {dayLow}</Text>}
              </View>
              <View style={styles.lowHighHighContainer}>
                <Text style={styles.lowHighHigh}>High Today</Text>
                {dayHigh && <Text style={styles.lowHighHigh}>₹ {dayHigh}</Text>}
              </View>
            </View>
            <View style={styles.priceBar}></View>
          </View>
          <View>
            <View style={styles.lowHigh}>
              <View style={styles.lowHighLowContainer}>
                <Text style={styles.lowHighLow}>52 Weeks Low</Text>
                {dayLow && <Text style={styles.lowHighLow}>₹ {low52}</Text>}
              </View>
              <View style={styles.lowHighHighContainer}>
                <Text style={styles.lowHighHigh}>52 Weeks High</Text>
                {dayHigh && <Text style={styles.lowHighHigh}>₹ {high52}</Text>}
              </View>
            </View>
            <View style={styles.priceBar}></View>
          </View>

          <View style={styles.performanceBottom}>
            <View>
              {open && <Text style={styles.sectionPrice}>₹ {open}</Text>}
              <Text style={styles.sectionTitle}>Open Price</Text>
            </View>
            <View>
              {prevClose && (
                <Text style={styles.sectionPrice}>₹ {prevClose}</Text>
              )}
              <Text style={styles.sectionTitle}>Prev. Close</Text>
            </View>
            <View>
              {vol && <Text style={styles.sectionPrice}>{vol}</Text>}
              <Text style={styles.sectionTitle}>Volume Traded</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buyButtonContainer}>
        <StartButton text="BUY" onPress={() => setShowModal(!showModal)} />
      </View>
    </Safeview>
  );
};

export default BuyStock;

const styles = StyleSheet.create({
  backIcon: {
    height: 30,
    width: 30,
  },
  buyButtonContainer: {
    borderTopWidth: 4,
    borderColor: '#f5f5f5',
  },

  container: {
    backgroundColor: 'white',
    padding: 12,
    flex: 1,
    paddingHorizontal: 16,
  },
  companyLogo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  companyName: {
    fontSize: 18,
    fontWeight: '600',
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: '400',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 6,
  },

  lowHigh: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  lowHighHigh: {
    color: 'grey',
    textAlign: 'right',
  },
  lowHighLow: {
    color: 'grey',
  },
  navigatior: {
    borderBottomWidth: 2,
    borderColor: '#f5f5f5',
    marginBottom: 12,
  },
  performanceBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  price: {
    marginVertical: 12,
  },
  priceBar: {
    height: 12,
    backgroundColor: 'grey',
    marginVertical: 6,
    borderRadius: 6,
  },
  sectionName: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 6,
  },
  sectionTitle: {
    color: 'grey',
  },
  sectionPrice: {
    textAlign: 'center',
  },
  stock: {
    flex: 1,
  },
  symbol: {
    color: 'grey',
  },
});
