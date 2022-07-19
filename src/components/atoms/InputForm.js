import React from 'react';
import PalleteColor from '../../general/PalleteColor';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FormInput = props => {
  const {error} = props.meta;
  let touched = false;

  const isErrorVisible = () => {
    return touched && error ? <Text>{error}</Text> : null;
  };

  return (
    <Controller
      control={props.input.control}
      rules={props.input.rules}
      render={({field: {onChange, onBlur, value}}) => (
        <TouchableOpacity onPress={() => (touched = true)}>
          <TextInput
            {...props}
            onEndEditing={_ => (touched = false)}
            value={value}
            onChangeText={onChange}
            onFocus={props.input.onFocus}
            onBlur={onBlur}
            style={styles.textInput}
          />
        </TouchableOpacity>
      )}
      name={props.input.name}>
      <View>
        <Text>{props.label}</Text>
        {isErrorVisible()}
      </View>
    </Controller>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: PalleteColor.Grey100,
    borderStyle: 'solid',
    marginTop: 14,
    borderRadius: 6,
    borderWidth: 2,
    padding: 10,
  },
});

export default FormInput;
