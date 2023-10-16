import React from 'react'
import { Image, Linking, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from './welcomeStyle.js';

export default function WelcomeButton () {
    return (
        <View style={styles.container}>
            {/* PRINTER STATUS PAGE */}
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Text>Print via email</Text>
                </View>
                <View style={styles.button}>
                    <Text>Print via website</Text>
                </View>
            </View>
            <View style={styles.printerStatusContainer}>
                <View style={styles.imageContainer}><img src={require('/assets/printer.jpeg')}/></View>
                <View style={styles.textContainer}>
                    <View style={[styles.statusText, styles.printerText]}><Text>Printer 1</Text></View>
                    <View style={styles.statusText}><Text>Status: Working</Text></View>
                    <View style={[styles.printerButton]}>
                        <Text>Printer Navigation</Text>
                    </View>
                </View>
            </View>
            <View style={styles.printerStatusContainer}>
                <View style={styles.imageContainer}><img src={require('/assets/printer.jpeg')}/></View>
                <View style={styles.textContainer}>
                    <View style={[styles.statusText, styles.printerText]}><Text>Printer 2</Text></View>
                    <View style={styles.statusText}><Text>Status: Working</Text></View>
                    <View style={[styles.printerButton]}>
                        <Text>Printer Navigation</Text>
                    </View>
                </View>
            </View>

            {/* WELCOME BUTTON PAGE */}
            {/*<View style={[styles.button, styles.shadow]}>*/}
            {/*    <Text style={styles.buttonText}>News</Text>*/}
            {/*    <img src={require('/assets/newspaper.jpeg')}/>*/}
            {/*</View>*/}
            {/*<View style={[styles.button, styles.shadow]}>*/}
            {/*    <Text style={styles.buttonText}>Reserve a Study Space</Text>*/}
            {/*    <img src={require('/assets/study-room.jpeg')}/>*/}
            {/*</View>*/}
            {/*<View style={[styles.button, styles.shadow]}>*/}
            {/*    <Text style={styles.buttonText}>Research Services</Text>*/}
            {/*    <img src={require('/assets/research-services.png')}/>*/}
            {/*</View>*/}
            {/*<View style={[styles.button, styles.shadow]}>*/}
            {/*    <Text style={styles.buttonText}>Print, Copy, and Scan</Text>*/}
            {/*    <img src={require('/assets/printer.jpeg')}/>*/}
            {/*</View>*/}
        </View>
    );
}
