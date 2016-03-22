'use strict';

import React, {
  Text
} from 'react-native';
import Red from './../config/colors';

export const ErrorMessage = () => (
  <Text style={{ marginLeft: 16, marginTop: 100, color: Red }}>
    Wuupsidaisy! Something went wrong while fetching messages
  </Text>
);
