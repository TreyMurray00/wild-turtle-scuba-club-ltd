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

export const COURSES_QUERY = `*[_type == "course"] | order(order asc, _createdAt asc) {
  _id,
  name,
  order,
  description,
  image,
  cost,
  duration,
  includes,
  difficulty
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
  pageTitle,
  subtitle,
  instructorName,
  instructorRole,
  profileImage,
  bio,
  certifications,
  stats
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
}  `;

export const CONTACT_QUERY = `*[_type == "contact"][0] {
  email,
  address,
  phone,
  whatsapp
}`;

export const GALLERY_QUERY = `*[_type == "galleryPhoto"] | order(order asc, _createdAt desc) {
  _id,
  title,
  image,
  altText,
  category,
  description,
  isFeatured,
  order
}`;
