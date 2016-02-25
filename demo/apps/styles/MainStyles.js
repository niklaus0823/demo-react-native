import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // FONT
  text: {
    fontSize: 16,
    color: '#48BBEC'
  },
  textBig: {
    fontSize: 20
  },
  textBigger: {
    fontSize: 24
  },
  textSmall: {
    fontSize: 20
  },
  textSmaller: {
    fontSize: 12
  },
  textBold: {
    fontWeight: '600'
  },
  textBolder: {
    fontWeight: '900'
  },
  textWhite: {
    color: '#FFFFFF'
  },
  textBlack: {
    color: '#000000'
  },
  textGold: {
    color: '#FFD700'
  },
  textOrange: {
    color: '#FF8C00'
  },
  textGray: {
    color: '#999999'
  },
  textTop: {
    alignSelf: 'flex-start'
  },
  textRight: {
    textAlign: 'right'
  },

  // ALIGN
  alignCenter: {
    alignItems: 'center'
  },

  alignVerticalCenter: {
    justifyContent: 'center'
  },

  // LAYOUT BOX
  container: {
    flex: 1
  },

  // BUTTON
  button: {
    flex: 1,
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 12,
    color: '#FFFFFF',
    alignSelf: 'center'
  },

  // IMAGES
  imageWithBorder: {
    width: 80,
    height: 80,
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10
  },

  // CELL
  cellRows: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cell10: {
    flex: 10
  },
  cell20: {
    flex: 20
  },
  cell30: {
    flex: 30
  },
  cell40: {
    flex: 40
  },
  cell50: {
    flex: 50
  },
  cell60: {
    flex: 60
  },
  cell70: {
    flex: 70
  },
  cell80: {
    flex: 80
  },
  cell90: {
    flex: 90
  },

  // LIST VIEW
  listRows: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#999999',
    borderBottomWidth: 1
  },

  // HEADER
  headerTitle: {
    flex: 16,
    height: 36,
    marginRight: 50,
    alignItems: 'center'
  },
  headerTitleText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 3
  },

  // INPUT
  inputSearch: {
    flex: 9,
    height: 36,
    marginRight: 10,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8
  },
  inputSearchText: {
    height: 36,
    fontSize: 12,
    color: '#48BBEC',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 10
  }
});