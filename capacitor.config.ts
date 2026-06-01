import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  android: {
    allowMixedContent: true,
  },
  appId: 'com.donetick.app',
  appName: 'Donetick',
  plugins: {
    LocalNotifications: {
      iconColor: '#488AFF',
      smallIcon: 'ic_stat_icon_config_sample',
      sound: 'beep.wav',
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    //   GoogleAuth: {
    //     scopes: ['profile', 'email', 'openid'],
    //     clientId: process.env.VITE_APP_GOOGLE_CLIENT_ID,
    //     androidClientId: process.env.VITE_APP_ANDRIOD_CLIENT_ID,
    //     iosClientId: process.env.VITE_APP_IOS_CLIENT_ID,
    // },
  },
  webDir: 'dist',
}

export default config
