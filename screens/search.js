import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HTML from 'react-native-render-html';
import Safeview from '../components/common/safeview';

const Search = () => {
  const htmlContent = `<h2 style="margin: 25px 0px 15px; font-weight: 700; font-size: 3rem; line-height: 1.25; letter-spacing: normal; font-family: Inter, sans-serif; color: rgb(34, 34, 34); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Stock Market Participants and the need to regulate them</h2>`;
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
