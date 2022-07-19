import {StyleSheet} from 'react-native';
import PalleteColor from '../../general/PalleteColor';

const styles = StyleSheet.create({
  // Button
  gradientBtnView: {
    marginHorizontal: 20,
    marginBottom: '5%',
  },
  // Text Inputs
  textInput: {
    borderColor: PalleteColor.Grey100,
    borderStyle: 'solid',
    marginTop: 14,
    borderRadius: 6,
    borderWidth: 2,
    padding: 10,
  },
  // Texts
  header: {
    fontSize: 26,
    marginTop: '10%',
    color: '#000',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
  },
  //Views
  mainView: {
    marginHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
  },
});

export default styles;
