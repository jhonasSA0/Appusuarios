import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

export default function InputText ({
  name,
  placeholder,
  value,
  messageError,
  onChangeText,
  focused = false,
  isInvalid,
  keyboardType = 'default',
  width = '100%',
}) {
  const [handleFocus, setHandleFocus] = useState(false);

  return (
    <View>
      <View style={styles.containerInput}>
        <TextInput
          style={[
            styles.input,
            handleFocus && { backgroundColor: 'white' }, // Adjust styles based on focus
          ]}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          onFocus={() => {
            setHandleFocus(true);
          }}
          onBlur={() => {
            setHandleFocus(false);
          }}
          placeholder={handleFocus ? '' : placeholder}
          value={value}
        />
        {(handleFocus || Boolean(value) || focused) && (
          <View style={styles.containerName}>
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
        )}
        {isInvalid && (
          <View style={styles.errorMessage}>
            {/* Adjust WarningOutlineIcon size based on your design */}
            <Text>
              {messageError}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = {
  containerInput: {
    // Your styles here
  },
  input: {
    // Your styles here
    borderColor: '#7C99FF',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
  },
  containerName: {
    // Your styles here
    backgroundColor: 'white',
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7C99FF',
  },
  errorMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
};