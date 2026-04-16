export const HOME_QUERY = `*[_type == "homepage"][0] {
  herotitle,
  herotitle2,
  images
}`;

export const SERVICES_QUERY = `*[_type == "service"] {
  _id,
  name,
  description,
  image,
  price
}`;

export const COURSES_QUERY = `*[_type == "course"] {
  _id,
  name,
  description,
  image,
  cost
}`;

export const RENTALS_QUERY = `*[_type == "rental"] {
  _id,
  name,
  duration,
  category,
  price
}`;

export const ABOUT_QUERY = `*[_type == "about"][0] {
  _id,
  about,
  images
}`;

export const ACCOMMODATION_QUERY = `*[_type == "accomodation"] {
  _id,
  name,
  link,
  image,
  description
}`;

export const DIVES_QUERY = `*[_type == "dive"] {
  _id,
  name,
  description,
  includes,
  cost
}`;


