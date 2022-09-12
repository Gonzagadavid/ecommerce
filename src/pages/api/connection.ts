import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { URL_DB = 'mongodb://localhost:27017', USER_DB, PASSWORD_DB } = process.env;

const options = {
  user: USER_DB, 
  pass: PASSWORD_DB, 
  autoIndex: false, 
  dbName: 'ecommerce'
};



connect(URL_DB, options);