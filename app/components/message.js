'use strict';
import React, {
	View,
  	Text
} from 'react-native';

function Message({id, from, text}) {
	return (
			<View style={styles.container} >
				<View style={styles.from}>
					<Text style={styles.bold} >From: </Text>
					<Text>{from}</Text>
				</View>
				<View style={styles.from}>
					<Text style={styles.bold} >Msg: </Text>
					<Text>{text}</Text>
				</View>
			</View>
		);
}

const styles = {
	container: {
		padding: 10
	},
	from: {
		flex: 1,
		flexDirection: 'row'
	},
	bold: {
		fontWeight: '600'
	}
};

export default Message;
    