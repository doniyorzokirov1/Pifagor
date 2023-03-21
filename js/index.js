var a = Number(prompt('Birinchi qiymatni kiriting'))
var b = Number(prompt('Ikkinchi qiymatni kiriting'))
var c = Number(prompt('Uchinchi qiymatni kiriting'))

// --> start querySelector
let result = document.querySelector('h1')
let text = document.querySelector('p')
// -->end querySelector

// --> start FUNCTION

function algoritm(n1, n2, n3) {
  if (n1 > n2) {
    if (n1 > n3) {
      result.textContent = n2 ** 2 + n3 ** 2 == n1 ** 2
      if (n2 ** 2 + n3 ** 2 == n1 ** 2) {
        text.textContent =
          'Result: ' + n2 ** 2 + ' + ' + n3 ** 2 + ' = ' + n1 ** 2
      } else {
        text.textContent = `because, Incorrect value included`
      }
    } else {
      result.textContent = n1 ** 2 + n2 ** 2 == n3 ** 2
      if (n1 ** 2 + n2 ** 2 == n3 ** 2) {
        text.textContent =
          'Result: ' + n1 ** 2 + ' + ' + n2 ** 2 + ' = ' + n3 ** 2
      } else {
        text.textContent = `because, Incorrect value included`
      }
    }
  } else if (n2 > n3) {
    result.textContent = n1 ** 2 + n3 ** 2 == n2 ** 2
    if (n1 ** 2 + n3 ** 2 == n2 ** 2) {
      text.textContent = 'Result: ' + n1 ** 2 + '+' + n3 ** 2 + '=' + n2 ** 2
    } else {
      text.textContent = `because, Incorrect value included`
    }
  } else {
    result.textContent = n1 ** 2 + n2 ** 2 == n3 ** 2
    if (n1 ** 2 + n2 ** 2 == n3 ** 2) {
      text.textContent = 'Result: ' + n1 ** 2 + '+' + n2 ** 2 + '=' + n3 ** 2
    } else {
      text.textContent = `because, Incorrect value included`
    }
  }
  return
}

// --> end FUNCTION

algoritm(a, b, c)
