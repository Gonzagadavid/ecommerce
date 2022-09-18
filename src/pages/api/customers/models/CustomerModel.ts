import { model, Schema } from 'mongoose';

export interface CustomerType {
  name: string;
  lastName: string;
  zipCode: string;
  street: string;
  district: string;
  city: string;
  state: string;
  number: string;
  complement?: string;
}


export const CustomerSchema = new Schema<CustomerType>({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  complement: {
    type: String,
  },
});

export const CunstomerModel = model<CustomerType>('customer', CustomerSchema);
