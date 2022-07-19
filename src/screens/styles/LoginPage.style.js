import {StyleSheet} from 'react-native';
import PalleteColor from '../../general/PalleteColor';

const styles = StyleSheet.create({
  // Texts
  logoText: {
    color: PalleteColor.White,
    fontWeight: 'bold',
    fontSize: 50,
  },
  header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: '10%',
  },
  subHeader: {
    fontSize: 16,
  },
  textInput: {
    borderColor: PalleteColor.Grey100,
    borderStyle: 'solid',
    marginTop: 14,
    borderRadius: 6,
    borderWidth: 2,
    padding: 10,
  },
  dontHaveAccountText: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  signUpText: {
    color: PalleteColor.Orange,
    fontWeight: 'bold',
  },
  // Buttons
  forgotStyle: {
    backgroundColor: 'transparent',
    textAlign: 'right',
    color: PalleteColor.Orange,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Views
  bodyView: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  logoView: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 200,
  },
  headerView: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
});

export default styles;
