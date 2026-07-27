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
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#488AFF',
      sound: 'beep.wav',
    },
    CapacitorSQLite: {
      // The offline cache opens databases with encrypted: false / no-encryption.
      // @capacitor-community/sqlite defaults native encryption to true when this
      // block is absent; on Android that can make plugin load fail with
      // "CapacitorSQLitePlugin: null" before JS gets a chance to open the DB.
      iosIsEncryption: false,
      androidIsEncryption: false,
    },
    SocialLogin: {
      providers: {
        google: true,
        facebook: false,
        apple: true,
        twitter: false,
      },
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
