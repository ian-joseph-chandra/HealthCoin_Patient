export class Patient {

  private _userId: number;
  private _firstName: string;
  private _lastName: string;
  private _birthDate: Date;
  private _email: string;
  private _phoneNumber: number;
  private _password: string;
  private _nationalId: number;

  constructor(userId, firstName, lastName) {
    this._userId = userId;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get userId() {
    return this._userId;
  }

  set userId(value) {
    this._userId = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value) {
    this._birthDate = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(value) {
    this._phoneNumber = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get nationalId() {
    return this._nationalId;
  }

  set nationalId(value) {
    this._nationalId = value;
  }
}
