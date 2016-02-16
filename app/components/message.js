'use strict';
import React, {
  Text
} from 'react-native';

function Message({from, text}) {
	return (
			<Text>{`${from}: ${text}`}</Text>
		);
}

export default Message;
    