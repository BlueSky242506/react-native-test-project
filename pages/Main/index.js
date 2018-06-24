import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { connect } from "react-redux";
import { get_random_dog, get_breed_dog } from "../../actions/dog";

class Main extends Component {

	componentWillMount(props) {
    this.props.dispatch(get_breed_dog(this.props.item.key));
	}

  render() {
    return (
			<View style={styles.dogWrapper}>
				<Image
					style={styles.dogImage}
					source={this.props.dog_url && {uri: this.props.dog_url}}
				/>

				<Text style={styles.label}>{"Look at the dog!"}</Text>
        <Text style={styles.label}>Breed: {this.props.dog_breed ? 
        this.props.dog_breed.capitalize() : ''}</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  dogWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2d324c',
    paddingTop: 100
  },
	dogImage: {
		width: 200,
		height: 200,
    marginBottom: 50
	},
  label: {
    color: "#fff",
    fontSize: 20
  }
});

const mapStateToProps = state => {
	return {
    dog_breed: state.breed,
		dog_url: state.url
	};
};

export default connect(mapStateToProps)(Main);
