import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flare',
  appName: 'flare',
  webDir: 'dist',
  server: {
    url: 'http://localhost:8080/',
    cleartext: true
  }
};

export default config;
