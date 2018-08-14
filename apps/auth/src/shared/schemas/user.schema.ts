import * as mongoose from 'mongoose';

const legalDetailsSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  birth_day: { type: Date },
  phone: { type: String },
  address_1: { type: String },
  address_2: { type: String },
  city: { type: String },
  state: { type: String },
  post_code: { type: String },
  country: { type: String }
});

const securitySettingsSchema = new mongoose.Schema({
  tfa: {
    enabled: { type: Boolean, default: true },
    current_method: { type: String, enum: ['google, authy', 'sms'], default: 'sms' },
    sms: {
      phone: { type: String },
      // By default it can be true because we will take user's phone number by default and when user signs up he verifies phone number
      verified: { type: Boolean, default: true }
    },
    google: {
      tfa_secret: { type: String },
      tfa_otp_auth_url: { type: String },
      verified: { type: Boolean, default: false }
    },

    require_tfa: {
      fiat_central: {
        for_all_transactions: { type: Boolean, default: true },
        for_all_sending_amount: { type: Boolean, default: false },
        for_amount_above_limit: { type: Boolean, default: false }, // In design it's $500
        never: { type: Boolean, default: false }
      },

      exchange: {
        for_every_trade: { type: Boolean, default: true },
        for_trade_less_than_interval: { type: Boolean, default: false }, // In design it's 30m
        for_trade_above_limit_1: { type: Boolean, default: false }, // In design it's 0.5 BTC
        for_trade_above_limit_2: { type: Boolean, default: false }, // In design it's 1 BTC
        never: { type: Boolean, default: false }
      },

      account_access: {
        for_every_login: { type: Boolean, default: true },
        for_every_reset_password: { type: Boolean, default: false },
        for_login_from_different_device: { type: Boolean, default: false },
        never_for_account_access: { type: Boolean, default: false }
      }
    }
  }
});

export const UserSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  public_name: { type: String, unique: [true, 'User with public name already exists'] },
  phone: { type: String, required: false },
  country: { type: String, required: false },
  avatar: { type: mongoose.Schema.Types.ObjectId, ref: "File" },
  pid: { type: String, unique: true },
  email: { type: String, unique: [true, 'User with public name already exists'] },
  email_confirmed: { type: Boolean, default: false },
  email_confirmation_hash: { type: String },
  hash: { type: String, required: true },
  enabled: { type: Boolean, default: true },
  timezone: { type: String },
  local_currency: { type: String },
  current_card: { type: mongoose.Schema.Types.ObjectId, ref: "Card" },
  roles: { type: [String], default: [] },
  permissions: { type: [String], default: [] },
  security_settings: { type: securitySettingsSchema },
  legal_details: { type: legalDetailsSchema },
  created_at: { type: Date },
  updated_at: { type: Date },
  password_strenght: { type: String }
}, {
    timestamps: {
      updatedAt: 'updated_at',
      createdAt: 'created_at'
    }
  });