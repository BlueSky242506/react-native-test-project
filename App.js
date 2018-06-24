import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { register_screens } from "./pages/screens";
import { Provider, connect } from "react-redux";
import { Navigation } from 'react-native-navigation';
import get_random_dog from "./actions/dog";

import store from "./store";

console.log("store = ", store);
console.log("Provider = ", Provider);

register_screens(store, Provider);

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export default class App extends Component {

	componentWillMount() {}

	constructor(props) {
		super(props);

    console.log("starting single screen app...");

		Navigation.startSingleScreenApp({
			screen: {
				screen: "inkind.test.List",
				navigatorStyle: {
					statusBarTextColorScheme: "light",
					navBarHidden: true
				}
			},
			appStyle: {
				navBarBackgroundColor: "#2d324c",
				statusBarTextColorScheme: "light",
				navBarTextColor: "#ffffff",
				navBarButtonColor: "#ffffff",
				navBarNoBorder: true
			}
		});

	}
}

