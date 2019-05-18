export const circle = (radius) => {
  const proto = {
    type: 'Circle',
    //code
  }
  return Object.assign(Object.create(proto), {radius})
}
export const square = (length) => {
  const proto = {
    type: 'Square',
    //code
  }
  return Object.assign(Object.create(proto), {length})
}
export const rect = (a, b) => {
  const proto = {
    type: 'Rect',
    //code
  }
  return Object.assign(Object.create(proto), {a, b})
}
