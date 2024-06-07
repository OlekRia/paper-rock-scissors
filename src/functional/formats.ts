export function formatNumberK(num: number): string {
  if (num < 1000) {
    return num.toString()
  } else {
    let formattedNumber = (num / 1000).toFixed(1)
    // Remove the trailing ".0" if it's an integer
    if (formattedNumber.endsWith('.0')) {
      formattedNumber = formattedNumber.slice(0, -2)
    }
    return formattedNumber + 'k'
  }
}
