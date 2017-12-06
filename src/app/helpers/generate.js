function renderUserData(data){
  return {
    _id : data._id,
    serial : data.serial,
    name: data.name,
    email: data.email,
    phone: data.phone,
    status: data.status,
    role: data.role,
    rating : data.rating,
    ratedBy : data.ratedBy
  }
}

module.exports = {
  renderUserData
}
