import React, { useState } from 'react';
import {ImageBackground, View, ScrollView, StyleSheet, Text, Button, Image} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ExternalLink } from '@/components/ExternalLink';

export default function Projetos() 
{
    const[expanded, setExpanded] = useState(false)
    const height = useSharedValue(0)
    const toggle = ()=>
        {
            setExpanded(!expanded)
            height.value = withTiming(expanded? 0 : 185, { duration:400 });
        };
    const animatedStyle = useAnimatedStyle(()=> { return { height:height.value, overflow:"hidden" } })

    const[expanded1, setExpanded1] = useState(false)
    const height1 = useSharedValue(0)
    const toggle1 = ()=>
        {
            setExpanded1(!expanded1)
            height1.value = withTiming(expanded1? 0 : 220, { duration:400 });
        };
    const animatedStyle1 = useAnimatedStyle(()=> { return { height:height1.value, overflow:"hidden" } })

    const[expanded2, setExpanded2] = useState(false)
    const height2 = useSharedValue(0)
    const toggle2 = ()=>
        {
            setExpanded2(!expanded2)
            height2.value = withTiming(expanded2? 0 : 100, { duration:400 });
        };
    const animatedStyle2 = useAnimatedStyle(()=> { return { height:height2.value, overflow:"hidden" } })

    return(
        
        <View style = {styles.root}>
            <View style = {styles.header}> 
                <Text style = {styles.headerText}>PROJETOS</Text>
            </View>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <ImageBackground
            style = {styles.background}  source={require('@/assets/images/gbg.png')}>
            <View style = {styles.container}> 
                <Button title ='Flavourit' color ="rgba(55, 8, 143, 0.84);" onPress={toggle}/>
                <Animated.View style = {[styles.content, animatedStyle]}> 
                    <Image source={require('@/assets/images/logoflavourit.png')} style = {styles.tabIcon}/>
                    <Text style = {styles.tabText}>Crie pratos incríveis com os ingredientes que você já tem em casa.</Text>
                    <ExternalLink href="https://github.com/Dhu-a/FlavourIt">
                    <Text style = {styles.linkText}>Github</Text>
                    </ExternalLink>
                </Animated.View>
            </View>

            <View style = {styles.container}> 
                <Button title ='Labyrinth of Leaves' color ="rgba(55, 8, 143, 0.84);" onPress={toggle1}/>
                <Animated.View style = {[styles.content, animatedStyle1]}> 
                    <Image source={require('@/assets/images/sprite_left.png')} style = {styles.tabIcon}/>
                    <Text style = {styles.tabText}>Jogo de Labirinto.{'\n'}desenvolvido em Java{'\n'}{'\n'}Feito para Programação Orientada a Objetos - 2024.1</Text>
                    <ExternalLink href="https://github.com/Roberto20deluxe/Labirinto_OOP_2024.1">
                    <Text style = {styles.linkText}>Github</Text>
                    </ExternalLink>
                </Animated.View>
            </View>

            <View style = {styles.container}> 
                <Button title ='Webissimo' color ="rgba(55, 8, 143, 0.84);" onPress={toggle2}/>
                <Animated.View style = {[styles.content, animatedStyle2]}> 
                    <Image source={require('@/assets/images/web.png')} style = {styles.tabIcon}/>
                    <ExternalLink href="http://webissimo.surge.sh/">
                    <Text style = {styles.linkText}>Webissimo</Text>
                    </ExternalLink>
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
        backgroundColor:"rgba(26, 10, 44, 0.4);",
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
        height:40,
        width:30
    },
    
});