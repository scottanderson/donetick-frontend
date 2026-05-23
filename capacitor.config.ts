import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  android: {
    allowMixedContent: true,
  },
  appId: 'com.donetick.app',
  appName: 'Donetick',
  plugins: {
    GoogleAuth: {
      androidClientId: process.env['VITE_APP_ANDRIOD_CLIENT_ID'],
      clientId: process.env['VITE_APP_GOOGLE_CLIENT_ID'],
      iosClientId: process.env['VITE_APP_IOS_CLIENT_ID'],
      scopes: ['profile', 'email', 'openid'],
    },
    LocalNotifications: {
      iconColor: '#488AFF',
      smallIcon: 'ic_stat_icon_config_sample',
      sound: 'beep.wav',
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
  webDir: 'dist',
}

export default config
