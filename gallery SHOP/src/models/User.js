class User {
  name;
  lastName;
  email;
  password;
  business;
  id;
  state;
  country;
  city;
  street;
  house;
  zip;
  phone;
  constructor(name, lastName, email, password, business, id, state, country, city, street, house, zip, phone) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.business = business;
    this.id = id;
    this.state = state;
    this.country = country;
    this.city = city;
    this.street = street;
    this.house = house;
    this.zip = zip;
    this.phone = phone;

  }
}

export default User;
