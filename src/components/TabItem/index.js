import './index.css'

const TabItem = props => {
  const {tabItem, activeTabUpdate, isActive} = props
  const {tabId, displayText} = tabItem

  const onClickTab = () => {
    activeTabUpdate(tabId)
  }

  const tabStyle = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button onClick={onClickTab} type="button" className="tab-button">
        <p className={`tab-name ${tabStyle}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
