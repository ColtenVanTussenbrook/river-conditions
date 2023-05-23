const celsiusToFarenheit = (temp: string) => {
  const farNumber = parseInt(temp, 10) * (9 / 5) + 32
  return farNumber.toString()
}

export default celsiusToFarenheit
