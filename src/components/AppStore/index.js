import {Component} from 'react'
import TabItem from '../TabItem'
import AppItem from '../AppItem'
import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
    appUrl: 'https://play.google.com/store/apps/details?id=com.facebook.katana',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
    appUrl: 'https://play.google.com/store/apps/details?id=com.facebook.orca',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
    appUrl: 'https://play.google.com/store/apps/details?id=com.whatsapp',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.instagram.android',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.snapchat.android',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
    appUrl: 'https://play.google.com/store/apps/details?id=com.twitter.android',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
    appUrl: 'https://play.google.com/store/apps/details?id=com.pinterest',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.tencent.mm&hl=en_US&gl=US&referrer=utm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_term%3Dwechat&pcampaignid=APPU_1_6BKxY6DSMtjd4-EPzLGGoAc',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.linkedin.android',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
    appUrl:
      'https://play.google.com/store/apps/details?id=org.telegram.messenger',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.yodo1.crossyroad',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.ministone.game.risingsuperchef2',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
    appUrl: 'https://play.google.com/store/apps/details?id=com.rovio.baba',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
    appUrl: 'https://play.google.com/store/apps/details?id=com.fingersoft.hcr2',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.imangi.templerun',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.ansangha.drdriving',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.sonypicturestelevision.smurfslostvillage',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.kevinbradford.games.firstgrade',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.outfit7.mytalkingtomfree',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
    appUrl: 'https://play.google.com/store/apps/details?id=com.nis.app',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
    appUrl: 'https://play.google.com/store/apps/details?id=sun.way2sms.hyd.com',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.google.android.apps.magazines',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
    appUrl: 'https://play.google.com/store/apps/details?id=flipboard.app',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
    appUrl:
      'https://play.google.com/store/apps/details?id=jp.gocro.smartnews.android',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
    appUrl: 'https://play.google.com/store/apps/details?id=bbc.mobile.news.ww',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.cnn.mobile.android.phone',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.dailywire.thedailywire',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
    appUrl: 'https://play.google.com/store/apps/details?id=mnn.Android',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
    appUrl: 'https://play.google.com/store/apps/details?id=com.opera.app.news',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.application.zomato',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
    appUrl: 'https://play.google.com/store/apps/details?id=in.swiggy.android',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
    appUrl: 'https://play.google.com/store/apps/details?id=com.Dominos',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
    appUrl:
      'https://play.google.com/store/apps/details?id=order.food.online.delivery.offers.deals',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.instacart.client',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
    appUrl: 'https://play.google.com/store/apps/details?id=com.saucey',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
    appUrl: 'https://play.google.com/store/apps/details?id=com.waitrapp',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
    appUrl: 'https://play.google.com/store/apps/details?id=com.grubhub.android',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.mercato.android.client',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.inceptory.delivery_on_time',
  },
]

class AppStore extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
    searchInput: '',
  }

  activeTabUpdate = id => {
    this.setState({activeTabId: id})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {activeTabId, searchInput} = this.state
    const filteredList = appsList.filter(
      appItem => appItem.category === activeTabId,
    )

    const finalList = filteredList.filter(item =>
      item.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <h1 className="heading">App Store</h1>
        <div className="search-bar">
          <input
            placeholder="Search"
            onChange={this.onChangeInput}
            className="search-space"
            type="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            alt=" search icon"
            className="search-icon"
          />
        </div>
        <ul className="tabs-container">
          {tabsList.map(tabItem => (
            <TabItem
              activeTabUpdate={this.activeTabUpdate}
              key={tabItem.tabId}
              tabItem={tabItem}
              isActive={activeTabId === tabItem.tabId}
            />
          ))}
        </ul>

        <ul className="apps-container">
          {finalList.map(appItem => (
            <AppItem key={appItem.appId} appItem={appItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AppStore
