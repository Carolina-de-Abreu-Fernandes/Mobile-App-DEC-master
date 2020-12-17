import React, {Component} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';
import { Button } from 'react-native-elements';
import { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';
import { Grid, LineChart, XAxis, YAxis, ProgressCircle } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#111', '#152525']}
      style={{
        flex: 1,
        paddingTop: 30,
        marginTop: 25,
      }}
    >
      {children}
    </LinearGradient>
  );
};
const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
  color: white;
  text-transform: uppercase;
`;

export default function Consume({ navigation }){

  function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(response.statusText)
}

function json(response) {
  return response.json()
}
fetch('http://private-anon-3943faed58-blynkapi.apiary-proxy.com/pRUnjW4a-As-hGkUM4IdcupQRMgr-JnN/project', {
  method: 'get',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
  })
}).then(status)
  .then(json)
  .then(function(json) {
    console.log('request succeeded with json response', json)
  }).catch(function(error) {
    console.log('request failed', error)
  })

         const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 };
        const xAxisHeight = 30;
  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <Button
            type="clear"
            onPress={() => navigation.goBack()}
            icon={<Icon name="chevron-left" size={16} color="#fffceb" />}
          />
        </TopBar.Left>
        <TopBar.Middle>
          <TopBar.SubTitle> Consumo</TopBar.SubTitle>
        </TopBar.Middle>
        <TopBar.Right>
          <Button
            type="clear"
            icon={
              <Icon
                name="more-vertical"
                size={16}
                color="#fffceb"
                backgroundColor="transparent"
              />
            }
          />
        </TopBar.Right>
      </TopBar>
<View>
 <Text style={{ paddingLeft:30, paddingTop: 10, paddingBottom: 10, color: '#fffceb'}}>
            Consumo de Energia (kWh)
            </Text>
</View>
             <View style={{ height: 230, padding: 25, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: '#55a630' }}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.none}>
            <Text style={styles.title}>
            Corrente (A)
            </Text>
            <ProgressCircle
                style={ { height: 60, flex: 1, flexDirection: 'row', marginBottom: 45  } }
                progress={ 0.1 }
                progressColor={'#ffa200'}
                startAngle={0}
                endAngle={Math.PI * 3.2}
            />
            </View>
            <View style={styles.none}>
            <Text style={styles.title}>
            Potência (W)
            </Text>
            <ProgressCircle
                style={ { height: 60,flex: 1, flexDirection: 'row', marginBottom: 45 } }
                progress={ 0.1 }
                progressColor={'#1e96fc'}
                startAngle={ 0 }
                endAngle={ Math.PI * 3.2 }
            />
             </View>
            </View>
    </Background>
  );
}

const styles = StyleSheet.create({
 title: {
   flex: 1,
   color: '#fffceb',
   justifyContent: 'center',
   paddingLeft:40
  },
  none: {
    flex:1,
    padding: 10,
  },
})