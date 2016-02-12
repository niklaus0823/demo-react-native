import React,{ Component, View, Text, StyleSheet, Image, ListView, TouchableHighlight } from 'react-native';

const REQUEST_URL = 'http://192.168.1.3:8081/public/data/shop.json';

// 搜索页
class SearchPageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
      navigator:props.navigator,
      goShopView:props.router.goShopView
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.shopList),
          loaded: true
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this.renderShopList.bind(this) }
        style={ styles.listView }
          />
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
    return (
      <TouchableHighlight onPress={() => this.state.goShopView(shop)} underlayColor='#DDDDDD'>
        <View style={ styles.container }>
          <Image
            source={{ uri: shop.thumbnail }}
            style={ styles.thumbnail }
            />
          <View style={ styles.rightContainer }>
            <Text style={ styles.title }>{ shop.title }</Text>
            <Text style={ styles.description }>{ shop.description }</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  container: {
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
  rightContainer: {
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
    backgroundColor: '#FFFFFF'
  }
});

export default SearchPageComponent;