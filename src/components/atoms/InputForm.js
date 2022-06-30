import React from 'react';
import PalleteColor from '../../general/PalleteColor';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const FormInput = props => {
  const {touched, error} = props.meta;

  const isErrorVisible = () => {
    return touched && error ? <Text>{error}</Text> : null;
  };

  return (
    <Controller
      control={props.input.control}
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          {...props}
          value={value}
          onChangeText={onChange}
          onFocus={props.input.onFocus}
          onBlur={onBlur}
          style={styles.textInput}
        />
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
