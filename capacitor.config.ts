import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flare',
  appName: 'flare',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
