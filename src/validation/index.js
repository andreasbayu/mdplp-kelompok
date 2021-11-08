const verifyPassword = (password, confirmPassword) => {
  if (password === confirmPassword) return true
  return false
}

const isEmpty = (value) => {
  if (value == null || value === '') return true
  return false
}

export {
  verifyPassword,
  isEmpty
}