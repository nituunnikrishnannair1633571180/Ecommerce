// src/react-native-blur.d.ts
declare module '@react-native-community/blur' {
    import { ComponentType } from 'react';
    import { ViewStyle } from 'react-native';
  
    export interface BlurViewProps {
      style?: ViewStyle;
      blurType: 'light' | 'extraLight' | 'extraDark' | 'dark' | 'regular';
      blurAmount: number;
      reducedTransparencyFallbackColor?: string;
    }
  
    const BlurView: ComponentType<BlurViewProps>;
    export { BlurView };
  }
  