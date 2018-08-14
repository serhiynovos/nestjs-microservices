import { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  username: string;
  phone: string,
  hash: string;
  avatar: any;
  createdAt: Date;
  enabled: boolean;
  timezone: string;
  local_currency: string;
  legal_details: {
    first_name: string,
    last_name: string,
    birth_day: Date,
    phone: string,
    address_1: string,
    address_2: string,
    city: string,
    state: string,
    post_code: string,
    country: string
  },
  security_settings: {
    tfa: {
      enabled: boolean;
      current_method: string;
      sms: {
        phone: string;
        enabled: boolean;
      },
      google: {
        tfa_secret: string;
        verified: boolean;
      },

      require_tfa: {
        fiat_central: {
          for_all_transactions: boolean,
          for_all_sending_amount: boolean,
          for_amount_above_limit: boolean, // In design it's $500
          never: boolean
        },

        exchange: {
          for_every_trade: boolean,
          for_trade_less_than_interval: boolean, // In design it's 30m
          for_trade_above_limit_1: boolean, // In design it's 0.5 BTC
          for_trade_above_limit_2: boolean, // In design it's 1 BTC
          never: boolean
        },

        account_access: {
          for_every_login: boolean,
          for_every_reset_password: boolean,
          for_login_from_different_device: boolean,
          never_for_account_access: boolean
        }
      }
    }
  }
}