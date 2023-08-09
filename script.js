//Defining password class
class password {
    constructor(type) {
      this.type = type
    }
    static generateWeakPass() {
      let Weakarray = ['123456', '123456789', '123456789', '1234', '1234567', 'qwertyuiop', 'qwerty', 'pass', 'password', '111111', 'qwerty111', 'dragon', 'letmein', 'football', 'Passkey', 'master', 'key', 'masterkey']
      return Weakarray[Math.floor(Math.random() * Weakarray.length)]
    }
    static generateMediumPass() {
      let length = 5 + Math.floor(Math.random() * 8)
      let pass = ''
      for (let i = 0; i < length; i++) {
        pass = pass.concat(String.fromCharCode(97 + Math.floor(Math.random() * 26)))
      }
      if (Math.random() >= 0.5) {
        pass = pass.charAt(0).toUpperCase() + pass.substr(1, pass.length)
      }
      return pass
    }
    static generateStrongPass() {
      let length =8  + Math.floor(Math.random() * 8)
      let pass = ''
      for (let i = 0; i < length; i++) {
        if (Math.random() >= 0.5) {
          pass = pass.concat(String.fromCharCode(97 + Math.floor(Math.random() * 26)))
        }
        else {
          pass = pass.concat(String.fromCharCode(65 + Math.floor(Math.random() * 26)))
        }
      }
      pass = pass.replace(pass.charAt(Math.floor(Math.random() * pass.length)), String.fromCharCode(32 + Math.floor(Math.random() * 6)))
      pass = pass.replace(pass.charAt(Math.floor(Math.random() * pass.length)), String.fromCharCode(63 + Math.floor(Math.random() * 2)))
      pass = pass.replace(pass.charAt(Math.floor(Math.random() * pass.length)), String.fromCharCode(48 + Math.floor(Math.random() * 9)))
  
      return (pass)
    }
  }
  
  
  //Managing Checkboxes
  let checkBox = Array.from(document.getElementsByClassName('pBox'))
  let currentTargetIndex;
  checkBox.forEach((e) => {
    e.addEventListener('click', () => {
      for (let i = 0; i < 3; i++) {
        checkBox[i].setAttribute('fill', 'white')
      }
      currentTargetIndex = checkBox.indexOf(e)
      console.log(currentTargetIndex)
      e.setAttribute('fill', '#af24ff')
    })
  })
  
  //Managing generate button
  
  let generate = document.getElementById('generate')
  let passInput = document.getElementById('passInput')
  let keySVG = document.getElementById('key')
  generate.addEventListener('click', () => {
    let generatedPass;
    if (currentTargetIndex == 0) {
      generatedPass = password.generateMediumPass()
    }
    else if (currentTargetIndex == 1) {
      generatedPass = password.generateStrongPass()
    }
    else if (currentTargetIndex == 2) {
      generatedPass = password.generateWeakPass()
    }
    else {
      alert('Please choose a type of password')
    }
    
    passInput.setAttribute('value', '- - - - -')
    passInput.classList.add('BlinkAnim')
  
    //key animation
    // keySVG.firstElementChild.setAttribute('fill','white')
    keySVG.firstElementChild.setAttribute('style', 'stroke-dashoffset: 1402.37px;')
    keySVG.firstElementChild.classList.add('fill')
    keySVG.firstElementChild.classList.add('KeyAnimation')
  
    setTimeout(() => {
      passInput.classList.remove('BlinkAnim')
      passInput.setAttribute('value', generatedPass)
      keySVG.firstElementChild.setAttribute('fill', '#FFCC17')
      keySVG.firstElementChild.setAttribute('style', 'stroke-dashoffset: 0px;')
      keySVG.firstElementChild.classList.remove('fill')
      keySVG.firstElementChild.classList.remove('KeyAnimation')
    }, 4000)
  
  })
  
  //total length of svg key for using stroke offset
  // console.log(keySVG.firstElementChild.getTotalLength())
  
  
  //Managing copy button
  let Copybtn = document.getElementById('Copy');
  Copybtn.addEventListener('click', () => {
  
    let ToBeCopied = passInput.getAttribute('value')
    if (ToBeCopied == '') {
      alert('Please generate a password to Copy!')
    }
    else {
      navigator.clipboard.writeText(ToBeCopied)
      alert('Password Copied To Clipboard')
    }
  })