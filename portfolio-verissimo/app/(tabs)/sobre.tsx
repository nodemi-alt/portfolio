import React, { useState } from 'react';
import {ImageBackground, View, ScrollView, StyleSheet, Text, Button, Image} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ExternalLink } from '@/components/ExternalLink';

export default function Sobre() 
{
    const[expanded, setExpanded] = useState(false)
    const height = useSharedValue(0)
    const toggle = ()=>
        {
            setExpanded(!expanded)
            height.value = withTiming(expanded? 0 : 280, { duration:400 });
        };
    const animatedStyle = useAnimatedStyle(()=> { return { height:height.value, overflow:"hidden" } })

    const[expanded1, setExpanded1] = useState(false)
    const height1 = useSharedValue(0)
    const toggle1 = ()=>
        {
            setExpanded1(!expanded1)
            height1.value = withTiming(expanded1? 0 : 180, { duration:400 });
        };
    const animatedStyle1 = useAnimatedStyle(()=> { return { height:height1.value, overflow:"hidden" } })


    return(
        
        <View style = {styles.root}>
            <View style = {styles.header}> 
                <Text style = {styles.headerText}>SOBRE</Text>
            </View>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <ImageBackground
            style = {styles.background}  source={require('@/assets/images/dbbg.png')}>
            <View style = {styles.container}> 
                <Button title ='Tecnologias Usadas' color ="rgba(55, 8, 143, 0.84);" onPress={toggle}/>
                <Animated.View style = {[styles.content, animatedStyle]}> 
                    <Image source={require('@/assets/images/react-icon.png')} style = {styles.tabIcon}/>
                    <ExternalLink href="https://reactnative.dev/">
                    <Text style = {styles.linkText}>React Native{'\n'}{'\n'}</Text>
                    </ExternalLink>

                    <Image source={require('@/assets/images/nodejs.png')} style = {styles.tabIcon}/>
                    <ExternalLink href="https://nodejs.org/en">
                    <Text style = {styles.linkText}>Node.js{'\n'}{'\n'}</Text>
                    </ExternalLink>

                    <Image source={require('@/assets/images/expogo.png')} style = {styles.tabIcon}/>
                    <ExternalLink href="https://expo.dev/go">
                    <Text style = {styles.linkText}>Expo Go</Text>
                    </ExternalLink>
                </Animated.View>
            </View>

            <View style = {styles.container}> 
                <Button title ='Sobre o projeto' color ="rgba(55, 8, 143, 0.84);" onPress={toggle1}/>
                <Animated.View style = {[styles.content, animatedStyle1]}> 
                    <Text style = {styles.tabText}>Feito por:{'\n'}Matheus Veríssimo{'\n'}00000850062{'\n'}{'\n'}UNICAP - PWM2025.1{'\n'}Prof. Marcio Bueno</Text>
                </Animated.View>
            </View>

        </ImageBackground>
        </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create
({
  
    root: { flex: 1 },

    background:
    {
        flex: 1, justifyContent : 'center', backgroundColor: 'transparent'
    },

    button:
    {
        
    },

    header:
    {
        width: '100%',
        height: '10.5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor: 'rgba(26, 10, 44, 0.75)'
    },

    container:
    {
        justifyContent: 'center',
        alignItems:'center',
        padding: 20,
        fontFamily: 'Inconsolata', 
    },

    content:
    {
        backgroundColor:"rgba(26, 10, 44, 0.75);",
        borderRadius:12,
        marginTop:10,
        paddingHorizontal:10,
        justifyContent: 'center',
        alignItems:'center',
    },

    headerText:
    {
        fontFamily: 'Inconsolata', 
        color: 'color:rgb(187, 251, 253);',
        fontSize: 28,
        marginTop: 15
    },

    tabText:
    {
        fontFamily: 'Inconsolata', 
        color: 'color:rgb(187, 251, 253);',
        fontSize: 20,
        textAlign: 'center'
    },

    linkText:
    {
        fontFamily: 'Inconsolata', 
        color: 'color:rgb(187, 251, 253);',
        fontSize: 20,
        textDecorationLine: 'underline',
    },

    tabIcon:
    {
        height:25,
        width:28
    },
    
});