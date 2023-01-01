import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl, appUrl = ''} = appItem
  const openPopup = () => {
    window.open(appUrl, 'PopupWindow', 'height=500,width=500')
  }
  return (
    <li className="app-item">
      <img
        onClick={openPopup}
        src={imageUrl}
        alt={appName}
        className="app-icon"
      />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
