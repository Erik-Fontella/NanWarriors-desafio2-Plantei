import { Schema, model } from 'mongoose';

const CounterSchema = new Schema({
  _id: { type: String, required: true }, // Nome da sequência
  sequence_value: { type: Number, required: true } // Valor atual da sequência
});

export default model('Counter', CounterSchema);
