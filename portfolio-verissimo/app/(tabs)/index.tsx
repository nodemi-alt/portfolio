import React, { useState } from 'react';
import {ImageBackground, View, ScrollView, StyleSheet, Text, Button, Image} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ExternalLink } from '@/components/ExternalLink';

export default function Home() 
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
            height1.value = withTiming(expanded1? 0 : 285, { duration:400 });
        };
    const animatedStyle1 = useAnimatedStyle(()=> { return { height:height1.value, overflow:"hidden" } })

    const[expanded2, setExpanded2] = useState(false)
    const height2 = useSharedValue(0)
    const toggle2 = ()=>
        {
            setExpanded2(!expanded2)
            height2.value = withTiming(expanded2? 0 : 280, { duration:400 });
        };
    const animatedStyle2 = useAnimatedStyle(()=> { return { height:height2.value, overflow:"hidden" } })

    return(
        
        <View style = {styles.root}>
            <View style = {styles.header}> 
                <Text style = {styles.headerText}>VERÍSSIMO</Text>
            </View>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <ImageBackground
            style = {styles.background}  source={require('@/assets/images/bbg.png')}>
            <View style = {styles.container}> 
                <Button title ='Quem é veríssimo?' color ="rgba(55, 8, 143, 0.84);" onPress={toggle}/>
                <Animated.View style = {[styles.content, animatedStyle]}> 
                    <Text style = {styles.tabText}>Sou um estudante de ciência da computação do quinto periodo.{'\n'}{'\n'}Procurando experiências, primariamente profissionais.{'\n'}(mas não exclusivamente) </Text>
                </Animated.View>
            </View>

            <View style = {styles.container}> 
                <Button title ='Interesses' color ="rgba(55, 8, 143, 0.84);" onPress={toggle1}/>
                <Animated.View style = {[styles.content, animatedStyle1]}> 
                    <Text style = {styles.tabText}>Videogames{'\n'}{'\n'}Música{'\n'}{'\n'}Cybersegurança{'\n'}{'\n'}Desenvolvimento Web{'\n'}{'\n'}Engenharia de Redes{'\n'}{'\n'}Forums antigos</Text>
                </Animated.View>
            </View>

            <View style = {styles.container}> 
                <Button title ='Meus Links' color ="rgba(55, 8, 143, 0.84);" onPress={toggle2}/>
                <Animated.View style = {[styles.content, animatedStyle2]}> 
                    <Image source={require('@/assets/images/github.png')} style = {styles.tabIcon}/>
                                        <ExternalLink href="https://github.com/nodemi-alt">
                                        <Text style = {styles.linkText}>Github{'\n'}{'\n'}</Text>
                                        </ExternalLink>
                    
                                        <Image source={require('@/assets/images/yt.png')} style = {styles.tabIcon}/>
                                        <ExternalLink href="https://www.youtube.com/@Azuresh_">
                                        <Text style = {styles.linkText}>Youtube{'\n'}{'\n'}</Text>
                                        </ExternalLink>
                    
                                        <Image source={require('@/assets/images/steam.png')} style = {styles.tabIcon}/>
                                        <ExternalLink href="https://steamcommunity.com/id/Azuresh/">
                                        <Text style = {styles.linkText}>Steam</Text>
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
        height:28,
        width:28
    },
    
});