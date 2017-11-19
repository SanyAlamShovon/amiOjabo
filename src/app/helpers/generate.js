function renderUserData(data){
  return {
    _id : data._id,
    serial : data.serial,
    name: data.name,
    email: data.email,
    password: data.password,
    phone: data.phone,
    status: data.status,
    role: data.role
  }
}

module.exports = {
  renderUserData
}
