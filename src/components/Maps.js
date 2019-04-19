import React from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const demoFancyMapStyles = require("react-google-maps/src/components/addons/demoFancyMapStyles.json");


const MyMapComponent = compose(
  withProps({
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDH19TQ00A_tuEQiQStjrgAMt98WTSBcf8&callback=initMap"
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100vh` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />,
  }),
  withStateHandlers(
    props => ({
      infoWindows: props.places.map(p => {
        return { isOpen: false };
      })
    }),
    {
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={2.7}
    defaultCenter={{ lat: 24.397, lng: 145.644 }}
    defaultOptions = {{styles: demoFancyMapStyles}}
    >
   

    
    <Marker
      position={{ lat: 35.41, lng: 139.46 }}
      onClick={props.onToggleOpen}>
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}>
        <div style={{ backgroundColor: `red`, opacity: 0.5, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Japan
          </div>
        </div>
      </InfoBox>}
    </Marker>

    <Marker
      position={{ lat: 37.34, lng: 126.58 }}
      onClick={props.onToggleOpen}>
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}>
        <div style={{ backgroundColor: `red`, opacity: 0.5, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Taipei
          </div>
        </div>
      </InfoBox>}
    </Marker>


    <Marker
      position={{ lat: 22.3193, lng: 114.1694 }}
      onClick={props.onToggleOpen}>
      {props.isOpen && <InfoBox
        >
        <div style={{ backgroundColor: `red`, opacity: 0.5, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Hong Kong
          </div>
        </div>
      </InfoBox>}
    </Marker>
  </GoogleMap>
)

class Maps extends React.Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }



  render() {
    return (
      <div class="container-fluid">
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
      </div>
    )
  }
}
export default Maps

