"use client";
import React, { Component } from 'react'
import GetStarted from "@/components/GetStarted/GetStarted"
import CardSection from "@/components/CardSection/CardSection"
import HelpJourney from '../HelpJourney/HelpJourney';
import MiddleHome from '../MiddleHome/MiddleHome';
import Carousal from '../Caruosal/Caruosal';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default class LandingPage extends Component {
    render() {
        return (
            <div className=' relative overflow-hidden'>
                <NavBar />
                <Carousal />
                <MiddleHome />
                <HelpJourney />
                <CardSection />
                <GetStarted />
                <Footer />
            </div>
        )
    }
}
