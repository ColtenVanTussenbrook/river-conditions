// TODO: this may need to be looked at again...it's close, but there may be a rounding error.
const celsiusToFarenheit = (temp: string) => {
  const farNumber = Math.round(parseInt(temp, 10) * (9 / 5) + 32)
  return farNumber.toString()
}

export default celsiusToFarenheit
