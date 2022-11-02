const validatePhone = (phone: string) => {
  return  phone.startsWith("+63") ? phone.length === 11 : false
}

export default validatePhone