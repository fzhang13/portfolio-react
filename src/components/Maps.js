import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDH19TQ00A_tuEQiQStjrgAMt98WTSBcf8&callback=initMap"
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100vh` }} />,
    containerElement: <div style={{ height: `500vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={2.7}
    defaultCenter={{ lat: 24.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 43.6532, lng: -79.3832 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.2827, lng: -123.1207 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 40.7128, lng: -74.0060 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 34.0522, lng: -118.2437 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 37.7749, lng: -122.4194 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 42.3601, lng: -71.0589 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 41.8781, lng: -87.6298 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 38.9072, lng: -77.0369 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 45.5017, lng: -73.5673 }} onClick={props.onMarkerClick} />}
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

