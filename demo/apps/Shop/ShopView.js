import React, { Component, View, Text, TextInput, Image, StyleSheet, ListView, TouchableHighlight } from 'react-native';

const REQUEST_URL = 'http://172.17.67.168:8081';
class ShopViewComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainNavigator: props.mainNavigator,
      shop:props.router.shop,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log(this.state.shop.menuList);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.shop.menuList),
      loaded: true
    });
  }

  goBack() {
    this.state.mainNavigator.pop();
  }

  render() {
    return (
      <View style={ styles.container }>

        <View style={ styles.header }>
          <TouchableHighlight style={ styles.button } onPress={ this.goBack.bind(this) } underlayColor='#99d9f4'>
            <Text style={ styles.buttonText }> 〈 </Text>
          </TouchableHighlight>
          <View style={ styles.headerTitle }>
            <Text style={ styles.headerTitleText }>{ this.state.shop.title }</Text>
          </View>
        </View>

        <ListView
          style={ styles.context }
          dataSource={ this.state.dataSource }
          renderRow={ this.renderMenuList.bind(this) }
          />

      </View>
    );
  }


  drawStar(count, stars= '') {
    for (let i = 0; i < count; i++) {
      stars += '★';
    }
    return stars;
  }

  renderMenuList(menu) {
    let menuThumbnail = REQUEST_URL + menu.thumbnail;
    let menuStar = this.drawStar(menu.star);

    return (
      <TouchableHighlight underlayColor='#99d9f4'>
        <View style={ styles.listRows }>

          <Image style={ styles.image } source={{ uri: menuThumbnail }} />

          <View style={ styles.container }>
            <Text style={ [styles.text, styles.textBlack] }>{ menu.title }</Text>
            <Text style={ [styles.textSmaller, styles.textGray] }>{ menu.description }</Text>
            <Text style={ [styles.textSmaller, styles.textGray] }>
              <Text style={ styles.textGold }>{ menuStar }</Text>
               { menu.star } 月售{ menu.totalSell }份
            </Text>
            <Text style={ [styles.text, styles.textBolder, styles.textOrange] }>￥{ menu.price }</Text>
          </View>

        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  // FONT
  text: {
    fontSize: 26,
    color: '#48BBEC'
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

  // LAYOUT BOX
  container: {
    flex: 1
  },
  header: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#48BBEC',
    paddingLeft: 20,
    paddingRight: 20
  },
  context: {
    flex: 90,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20
  },

  // BUTTON
  button: {
    flex: 1
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
    alignSelf: 'center'
  },

  // INPUT
  headerTitle: {
    flex: 16,
    height: 36,
    marginLeft: 10
  },
  headerTitleText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 3
  },

  // IMAGES
  image: {
    width: 80,
    height: 80,
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 20
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
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: '#999999',
    borderBottomWidth: 1
  }
});


export default ShopViewComponent;