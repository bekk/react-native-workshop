'use strict';

import React, {
  Text
} from 'react-native';

export const ErrorMessage = () => (
  <Text style={{ marginLeft: 16, marginTop: 50, color: 'red' }}>
    Wuupsidaisy! Something went wrong while fetching messages
  </Text>
);
