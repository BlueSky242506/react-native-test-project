import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View, FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import { get_breed_list } from "../../actions/dog";

class List extends Component {

    componentWillMount(props) {
        this.props.dispatch(get_breed_list());
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.breed_list}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => {
                            this.props.navigator.push(
                                {
                                    passProps: {item}, 
                                    screen: 'inkind.test.Main'
                                }
                            )
                        }}>
                            <Text style={styles.item}>{item.key.capitalize()}</Text>
                        </TouchableOpacity>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#2d324c',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: '#fff'
    },
})

const mapStateToProps = state => {
    return {
        breed_list: state.list,
    };
};

export default connect(mapStateToProps)(List);
