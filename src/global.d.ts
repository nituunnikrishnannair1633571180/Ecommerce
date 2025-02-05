declare module '@react-native-community/geolocation' {
    export interface GeolocationOptions {
        enableHighAccuracy?: boolean;
        timeout?: number;
        maximumAge?: number;
    }

    export interface Position {
        coords: {
            latitude: number;
            longitude: number;
            altitude?: number;
            accuracy: number;
            altitudeAccuracy?: number;
            heading?: number;
            speed?: number;
        };
        timestamp: number;
    }

    export interface PositionError {
        code: number;
        message: string;
    }

    type GeoSuccessCallback = (position: Position) => void;
    type GeoErrorCallback = (error: PositionError) => void;

    Geolocation.getCurrentPosition(
        (pos: Position) => {
          setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setLoading(false);
        },
        (error: PositionError) => {
          if (error.code === 1) {
            setErrorMsg('Permission denied.');
          } else if (error.code === 2) {
            setErrorMsg('Location unavailable.');
          } else if (error.code === 3) {
            setErrorMsg('Location request timed out.');
          } else {
            setErrorMsg('Error retrieving location: ' + error.message);
          }
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 10000 }
      );
      
    export default Geolocation;
}
