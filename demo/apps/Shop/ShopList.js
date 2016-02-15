import React, { Component, View, Text, TextInput, Image, StyleSheet, ListView, TouchableHighlight } from 'react-native';

const REQUEST_URL = 'http://172.17.67.168:8081';
const REQUEST_DATA_API = REQUEST_URL + '/public/data/shop.json';

class ShopListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainNavigator: props.mainNavigator,
      keyword:props.router.keyword,
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
    fetch(REQUEST_DATA_API)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.shopList),
          loaded: true
        });
      })
      .done();
  }

  goBack() {
    this.state.mainNavigator.pop();
  }

  goShopView(shop) {
    this.state.mainNavigator.push({ name:"ShopView", shop:shop });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={ styles.container }>
        <View style={ styles.searchBar }>
          <TouchableHighlight style={ styles.button } onPress={ this.goBack.bind(this) } underlayColor='#99d9f4'>
            <Text style={ styles.buttonText }> 〈 </Text>
          </TouchableHighlight>
          <View style={ styles.searchInput }>
            <Text style={ styles.textInput }>搜索:{ this.state.keyword }</Text>
          </View>
        </View>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderShopList.bind(this) }
          style={ styles.listView }
          />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={ styles.container }>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderShopList(shop) {
    let shopThumbnail = REQUEST_URL + shop.thumbnail;
    return (
      <TouchableHighlight onPress={ () => this.goShopView.bind(this)(shop) } underlayColor='#99d9f4'>
        <View style={ styles.listViewRows }>
          <Image source={{ uri: shopThumbnail }} style={ styles.thumbnail } />
          <View style={ styles.right }>
            <Text style={ styles.title }>{ shop.title }</Text>
            <Text style={ styles.star }>{ shop.star }★</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#48BBEC',
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    flex: 1
  },
  searchInput: {
    flex: 16,
    height: 36,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8
  },
  textInput: {
    fontSize: 18,
    color: '#48BBEC',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 3
  },
  listViewRows: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: '#999999',
    borderBottomWidth: 1
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left'
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 20
  },
  listView: {
    flex: 90,
    backgroundColor: '#FFFFFF',
    paddingLeft: 50,
    paddingRight: 50
  }
});


export default ShopListComponent;