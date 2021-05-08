import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HTML from 'react-native-render-html';
import Safeview from '../components/common/safeview';

const Search = () => {
  const htmlContent = `<h2>Stock Market Participants and the need to regulate them</h2>`;
  return (
    <Safeview>
      <ScrollView>
        <Text>This is Search Screen</Text>
        <HTML source={{html: htmlContent}} />
      </ScrollView>
    </Safeview>
  );
};

export default Search;

const styles = StyleSheet.create({});
