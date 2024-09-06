import mongoose from 'mongoose';

const monkeypoxCasesSchema = new mongoose.Schema({
  creationDate: {
    type: Date,
    default: Date.now, 
    immutable: true   
  },
  genre: {
    type: String,
    enum: ['Masculino', 'Femenino', 'No binario'], 
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  lat:{
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  isEmailSent: {
    type: Boolean,
    default: false
  }
});

export const MonkeypoxCasesModel = mongoose.model('MonkeypoxCases', monkeypoxCasesSchema);