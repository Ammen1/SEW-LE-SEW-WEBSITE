// let check = true

// let invalid = document.querySelector('#next')
// let invalid2 = document.querySelector('.forms-container')
// let input1 = document.querySelector('#fname')
// let input2 = document.querySelector('#mname')
// let input3 = document.querySelector('#lname')
// let input4 = document.querySelector('#age')
// let input5 = document.querySelector('#email')
// let input6 = document.querySelector('#city')
// let input7 = document.querySelector('#phone')
// let input8 = document.querySelector('#department')
// let input9 = document.querySelector('#location')
// let input10 = document.querySelector('#how')
// input1.addEventListener('keyup', inputTypeError)
// input2.addEventListener('keyup', inputTypeError1)
// input3.addEventListener('keyup', inputTypeError2)
// input4.addEventListener('keyup', inputTypeError3)
// input5.addEventListener('keyup', inputTypeError4)
// input6.addEventListener('keyup', inputTypeError5)
// input7.addEventListener('keyup', inputTypeError6)
// input8.addEventListener('keyup', inputTypeError7)
// input9.addEventListener('keyup', inputTypeError8)
// input10.addEventListener('keyup', inputTypeError9)

// function inputTypeError() {
//   let regex = /^[a-zA-Z]{2,20}$/
//   let str = document.querySelector('#fname').value
//   console.log(str)
//   let test = document.querySelector('#fname-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'fname-err'
//       error.textContent = 'Invalid Firstname'
//       document
//         .querySelector('.forms')
//         .insertAdjacentElement('afterbegin', error)
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#fname-err').remove()
//   }
// }
// function inputTypeError1() {
//   let regex = /^[a-zA-Z]{2,20}$/
//   let str = document.querySelector('#mname').value
//   console.log(str)
//   let test = document.querySelector('#mname-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'mname-err'
//       error.textContent = 'Invalid Midlename'
//       document
//         .querySelector('.mname')
//         .insertAdjacentElement('beforebegin', error)
//       check = false
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#mname-err').remove()
//   }
// }

// function inputTypeError2() {
//   let regex = /^[a-zA-Z]{2,20}$/
//   let str = document.querySelector('#lname').value
//   console.log(str)
//   let test = document.querySelector('#lname-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'lname-err'
//       error.textContent = 'Invalid Lastname'
//       document
//         .querySelector('.lname')
//         .insertAdjacentElement('beforebegin', error)
//       check = false
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#lname-err').remove()
//   }
// }

// function inputTypeError3() {
//   let regex = /^100|[1-9]?\d$/
//   let str = document.querySelector('#age').value
//   console.log(str)
//   let test = document.querySelector('#age-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'age-err'
//       error.textContent = 'Invalid Age'
//       document.querySelector('.age').insertAdjacentElement('beforebegin', error)
//       check = false
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#age-err').remove()
//   }
// }

// function inputTypeError4() {
//   let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//   let str = document.querySelector('#email').value
//   console.log(str)
//   let test = document.querySelector('#email-err')
//   console.log(test)
//   if (!test) {
//     let val = regex.test(str)
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'email-err'
//       error.textContent = 'Invalid Email'
//       document
//         .querySelector('.email')
//         .insertAdjacentElement('beforebegin', error)
//       check = false
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#email-err').remove()
//   }
// }

// function inputTypeError5() {
//   let regex = /[a-zA-Z0-9]/
//   let str = document.querySelector('#city').value
//   console.log(str)
//   let test = document.querySelector('#city-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'city-err'
//       error.textContent = 'Invalid input'
//       document
//         .querySelector('.city')
//         .insertAdjacentElement('beforebegin', error)
//       check = false
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#city-err').remove()
//   }
// }

// function inputTypeError6() {
//   let regex = /[a-zA-Z]/
//   let str = document.querySelector('#phone').value
//   console.log(str)
//   let test = document.querySelector('#phone-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'phone-err'
//       error.textContent = 'Invalid number'
//       document
//         .querySelector('.phone')
//         .insertAdjacentElement('beforebegin', error)
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#phone-err').remove()
//   }
// }

// function inputTypeError7() {
//   let regex = /[a-zA-Z]/
//   let str = document.querySelector('#department').value
//   console.log(str)
//   let test = document.querySelector('#dept-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'dept-err'
//       error.textContent = 'Invalid input'
//       document
//         .querySelector('.department ')
//         .insertAdjacentElement('beforebegin', error)
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#dept-err').remove()
//   }
// }

// function inputTypeError8() {
//   let regex = /[a-zA-Z0-9]/
//   let str = document.querySelector('#location').value
//   console.log(str)
//   let test = document.querySelector('#location-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'location-err'
//       error.textContent = 'Invalid input'
//       document
//         .querySelector('.location ')
//         .insertAdjacentElement('beforebegin', error)
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#location-err').remove()
//   }
// }

// function inputTypeError9() {
//   let regex = /[a-zA-Z0-9]/
//   let str = document.querySelector('#how').value
//   console.log(str)
//   let test = document.querySelector('#how-err')
//   console.log(test)
//   if (!test) {
//     if (!regex.test(str)) {
//       let error = document.createElement('p2')
//       error.className = 'error'
//       error.id = 'how-err'
//       error.textContent = 'Invalid input'
//       document.querySelector('.how').insertAdjacentElement('beforebegin', error)
//     }
//   } else if (regex.test(str)) {
//     document.querySelector('#how-err').remove()
//   }
// }

// //Progressive step
// const progress = document.getElementById('progress')
// const prev = document.getElementById('prev')
// const next = document.getElementById('next')
// const submit = document.getElementById('submit')
// const circles = document.querySelectorAll('.circle')
// const forms = document.querySelectorAll('.forms')
// let currentCircle = document.querySelectorAll('#circle')

// let currentActive = 1

// next.addEventListener('click', () => {
//   currentActive++
//   currentCircle++

//   if (currentActive > circles.length) {
//     currentActive = circles.length
//   }
//   update()
// })

// prev.addEventListener('click', () => {
//   currentActive--
//   currentCircle--

//   if (currentActive < 1) {
//     currentActive = 1
//     currentCircle = 0
//   }

//   update()
// })

// submit.addEventListener('click', () => {
//   circles[2].innerHTML = ` <img
//   src="check-right.png"
//   alt="step icon"
//   width="30px"
//   height="30px"
//   style="border-radius: 50% "
// />`
//   // prev.disabled = true
// })

// function update() {
//   circles.forEach((circle, index) => {
//     if (index < currentActive) {
//       circle.classList.add('active')
//       if (index < currentActive - 1) {
//         circle.innerHTML = `<img
//         src="check-right.png"
//         alt="step icon"
//         width="30px"
//         height="30px"
//         style="border-radius: 50%"
//       />`
//       }
//     } else {
//       circle.classList.remove('active')
//       circle.textContent = ''
//     }
//   })

//   forms.forEach((form, index) => {
//     if (index < currentActive) {
//       form.classList.add('active-forms')

//       for (i = 0; i <= currentActive - 2; i++) {
//         if (forms[i] != undefined && currentActive > 0) {
//           forms[i].classList.remove('active-forms')
//           console.log('current for i: ' + i)
//         } else {
//           console.log('sorry roobaa')
//         }
//       }
//     } else {
//       form.classList.remove('active-forms')
//     }
//   })

//   const actives = document.querySelectorAll('.active')

//   progress.style.width =
//     ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

//   if (currentActive === 1) {
//     prev.disabled = true
//     submit.disabled = true
//   } else if (currentActive === circles.length) {
//     next.disabled = true
//     console.log('NExt')
//   } else {
//     prev.disabled = false
//     next.disabled = false
//     submit.disabled = true
//   }

//   if (next.disabled == true) {
//     submit.disabled = false
//   }
// }
// //========================Donate buttons=========================//
// let cbeNumb = document.getElementById('cbe-numb')
// let cbeBtn = document.querySelector('.cbe-btn')
// let hibreNumb = document.getElementById('hibre-numb')
// let hibreBtn = document.querySelector('.hibre-btn')

// cbeBtn.addEventListener('click', () => {
//   if (cbeNumb.style.display == 'none') {
//     cbeNumb.style.display = 'block'
//     console.log('its displaying')
//   } else {
//     console.log('Hello roobaa')
//   }
// })

// hibreBtn.addEventListener('click', () => {
//   if (hibreNumb.style.display == 'none') {
//     hibreNumb.style.display = 'block'
//   }
// })

// Regex for form
inputCheck()
let input1 = document.querySelector('#fname')
let input2 = document.querySelector('#mname')
let input3 = document.querySelector('#lname')
let input4 = document.querySelector('#age')
let input5 = document.querySelector('#email')
let input6 = document.querySelector('#city')
let input7 = document.querySelector('#phone')
let input8 = document.querySelector('#department')
let input9 = document.querySelector('#location')
let input10 = document.querySelector('#how')
input1.addEventListener('keyup', inputTypeError)
input2.addEventListener('keyup', inputTypeError1)
input3.addEventListener('keyup', inputTypeError2)
input4.addEventListener('keyup', inputTypeError3)
input5.addEventListener('keyup', inputTypeError4)
input6.addEventListener('keyup', inputTypeError5)
input7.addEventListener('keyup', inputTypeError6)
input8.addEventListener('keyup', inputTypeError7)
input9.addEventListener('keyup', inputTypeError8)
input10.addEventListener('keyup', inputTypeError9)

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const submit = document.getElementById('submit')
const circles = document.querySelectorAll('.circle')
const forms = document.querySelectorAll('.forms')
let currentCircle = document.querySelectorAll('#circle')

function inputTypeError() {
  let regex = /^[a-zA-Z]{2,20}$/
  let str = document.querySelector('#fname').value
  let test = document.querySelector('#fname-err')
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'fname-err'
      error.textContent = 'Invalid Firstname'
      document
        .querySelector('.forms')
        .insertAdjacentElement('afterbegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#fname-err').remove()
    if (str !== '') next.disabled = false
  }
}
function inputTypeError1() {
  let regex = /^[a-zA-Z]{2,20}$/
  let str = document.querySelector('#mname').value
  let test = document.querySelector('#mname-err')
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'mname-err'
      error.textContent = 'Invalid Midlename'
      document
        .querySelector('.mname')
        .insertAdjacentElement('beforebegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#mname-err').remove()
    next.disabled = false
  }
}

function inputTypeError2() {
  let regex = /^[a-zA-Z]{2,20}$/
  let str = document.querySelector('#lname').value
  let test = document.querySelector('#lname-err')
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'lname-err'
      error.textContent = 'Invalid Lastname'
      document
        .querySelector('.lname')
        .insertAdjacentElement('beforebegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#lname-err').remove()
    if (str !== '') next.disabled = false
  }
}

function inputTypeError3() {
  let regex = /^100|[1-9]?\d$/
  let str = document.querySelector('#age').value
  let test = document.querySelector('#age-err')
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'age-err'
      error.textContent = 'Invalid Age'
      document.querySelector('.age').insertAdjacentElement('beforebegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#age-err').remove()
    if (str !== '') next.disabled = false
  }
}

function inputTypeError4() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let str = document.querySelector('#email').value
  let test = document.querySelector('#email-err')
  if (!test) {
    let val = regex.test(str)
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'email-err'
      error.textContent = 'Invalid Email'
      document
        .querySelector('.email')
        .insertAdjacentElement('beforebegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#email-err').remove()
    if (str !== '') next.disabled = false
  }
}

function inputTypeError5() {
  let regex = /[a-zA-Z]/
  let str = document.querySelector('#city').value
  let test = document.querySelector('#city-err')
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'city-err'
      error.textContent = 'Invalid input'
      document
        .querySelector('.city')
        .insertAdjacentElement('beforebegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#city-err').remove()
    if (str !== '') next.disabled = false
  }
}

function inputTypeError6() {
  let regex = /[0-9]/
  let str = document.querySelector('#phone').value
  let test = document.querySelector('#phone-err')
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'phone-err'
      error.textContent = 'Invalid number'
      document
        .querySelector('.phone')
        .insertAdjacentElement('beforebegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#phone-err').remove()
    next.disabled = false
  }
}

function inputTypeError7() {
  let regex = /[a-zA-Z]/
  let str = document.querySelector('#department').value
  let test = document.querySelector('#dept-err')
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'dept-err'
      error.textContent = 'Invalid input'
      document
        .querySelector('.department ')
        .insertAdjacentElement('beforebegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#dept-err').remove()
    next.disabled = false
  }
}

function inputTypeError8() {
  let regex = /[a-zA-Z0-9]/
  let str = document.querySelector('#location').value
  let test = document.querySelector('#location-err')
  console.log(test)
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'location-err'
      error.textContent = 'Invalid input'
      document
        .querySelector('.location ')
        .insertAdjacentElement('beforebegin', error)
      next.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#location-err').remove()
    next.disabled = false
  }
}

function inputTypeError9() {
  let regex = /[a-zA-Z0-9]/
  let str = document.querySelector('#how').value
  console.log(str)
  let test = document.querySelector('#how-err')
  console.log(test)
  if (!test) {
    if (!regex.test(str)) {
      let error = document.createElement('p2')
      error.className = 'error'
      error.id = 'how-err'
      error.textContent = 'Invalid input'
      document.querySelector('.how').insertAdjacentElement('beforebegin', error)
      submit.disabled = true
    }
  } else if (regex.test(str)) {
    document.querySelector('#how-err').remove()
    submit.disabled = false
  }
}

//Progressive step

let currentActive = 1

next.addEventListener('click', function next() {
  currentActive++
  currentCircle++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', function prev() {
  currentActive--
  currentCircle--

  if (currentActive < 1) {
    currentActive = 1
    currentCircle = 0
  }

  update()
})

submit.addEventListener('click', function submit() {
  circles[2].innerHTML = ` <img
  src="check-right.png"
  alt="step icon"
  width="30px"
  height="30px"
  style="border-radius: 50% "
/>`
  // prev.disabled = true
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
      if (index < currentActive - 1) {
        circle.innerHTML = `<img
        src="check-right.png"
        alt="step icon"
        width="30px"
        height="30px"
        style="border-radius: 50%"
      />`
      }
    } else {
      circle.classList.remove('active')
      circle.textContent = ''
    }
  })

  forms.forEach((form, index) => {
    if (index < currentActive) {
      form.classList.add('active-forms')

      for (i = 0; i <= currentActive - 2; i++) {
        if (forms[i] != undefined && currentActive > 0) {
          forms[i].classList.remove('active-forms')
          console.log('current for i: ' + i)
        } else {
          console.log('sorry roobaa')
        }
      }
    } else {
      form.classList.remove('active-forms')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
    submit.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
    submit.disabled = true
  }

  if (next.disabled == true) {
    submit.disabled = false
  }
}

function inputCheck() {
  const next = document.getElementById('next')
  let str = document.querySelector('#fname').value
  let str1 = document.querySelector('#mname').value
  let str2 = document.querySelector('#lname').value
  let str3 = document.querySelector('#age').value
  let str4 = document.querySelector('#email').value
  console.log(next)
  if (str === '') {
    next.disabled = true
  }
  if (str1 === '') {
    next.disabled = true
  }
  if (str2 === '') {
    next.disabled = true
  }
  if (str3 === '') {
    next.disabled = true
  }
  if (str4 === '') {
    next.disabled = true
  }
}
