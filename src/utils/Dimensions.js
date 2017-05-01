import {Dimensions as RNDimensions, Alert} from 'react-native';

// Tablet portrait dimensions
const tablet = {
  width: 552,
  height: 960,
};

class Dimensions {

  constructor() {
    RNDimensions.addEventListener('change', (e) => console.log('change', e))
  }

  isPhone() {
    const dim = this.getPortraitDimensions();
    console.log('isPhone-P', this.getPortraitDimensions());
    return dim.height < tablet.height;
  }

  isTablet() {
    const dim = this.getPortraitDimensions();
    console.log('isTablet-P', this.getPortraitDimensions());
    console.log('isTablet-L', this.getLandscapeDimensions());
    console.log('RNDimensions', RNDimensions);
    return dim.height >= tablet.height;
  }

  isLandscape() {
    const {width, height} = RNDimensions.get("window");
    if (width > height)
      return true;
    else return false;
  }

  isPortrait() {
    return !this.isLandscape();
  }

  getPortraitDimensions() {
    const {width, height} = RNDimensions.get("window");

    return {
      width: Math.min(width, height),
      height: Math.max(width, height),
    };
  }

  getLandscapeDimensions() {
    const {width, height} = RNDimensions.get("window");

    return {
      width: Math.max(width, height),
      height: Math.min(width, height),
    };
  }
}

const dimensions = new Dimensions();
export default dimensions;
