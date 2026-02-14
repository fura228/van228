document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
  let button = document.querySelector('[data-js="t1-btn"]');
  let colorDisplay = document.querySelector('[data-js="t1-hex"]');
  button.addEventListener('click', () => {
    let r = getRandom(0, 255);
    let b = getRandom(0, 255);
    let g = getRandom(0, 255);
    console.log(r, g, b)
    randomColor = rgbToHex(r, g, b);
    button.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
  });
  let m = document.querySelector('[data-js="t2-input"]');
  let c = document.querySelector('[data-js="t2-count"]');
  m.addEventListener('input', () => {
    c.textContent = m.value.length;
  })
  c.textContent = m;
  let t = document.querySelector('[data-js="t3-input"]');
  let btn = document.querySelector('[data-js="t3-add"]');
  let lu = document.querySelector('[data-js="t3-list"]');
  btn.addEventListener("click", () => {
    if (t.value.length != 0){
      let el = document.createElement('li');
      el.textContent = t.value;
      lu.append(el);
    }
  })
  let bt1 = document.querySelector('[data-js="t4-plus"]');
  let bt2 = document.querySelector('[data-js="t4-minus"]');
  let bt3 = document.querySelector('[data-js="t4-reset"]');
  let res = document.querySelector('[data-js="t4-out"]');
  bt1.addEventListener('click', () => {
   res.value = parseInt(res.value) + 1;
  })
  bt2.addEventListener('click', () => {
    res.value = parseInt(res.value) - 1;
  })
  bt3.addEventListener('click', () => {
    res.value=0;
  })
  let btn5 = document.querySelector('[data-js="t5-open"]')
  let btn6 = document.querySelector('[data-js="t5-close"]')
  btn5.addEventListener('click', () => {
    document.querySelector('[data-js="t5-modal"]').removeAttribute('hidden');
  })
  btn6.addEventListener('click', () => {
    document.querySelector('[data-js="t5-modal"]').toggleAttribute('hidden');
  })
  document.addEventListener('click', (event) => {
    if (event.target == document.querySelector('[data-js="t5-backdrop"')){
      document.querySelector('[data-js="t5-modal"]').toggleAttribute('hidden');
    }
      
  })
  document.addEventListener('keydown', (event) => {
      if (event.key == "Escape"){
        document.querySelector('[data-js="t5-modal"]').toggleAttribute('hidden');
      }
    
  })
let vbt = document.querySelector('[data-tab="a"]');
let vkt = document.querySelector('[data-tab="b"]');
let vct = document.querySelector('[data-tab="c"]')
let a1 = document.querySelector('[data-pane="a"]');
let b1 = document.querySelector('[data-pane="b"]');
let c1 = document.querySelector('[data-pane="c"]');
vbt.addEventListener('click', () => {
  b1.classList.remove('is-active');
  c1.classList.remove('is-active');
  a1.classList.add('is-active');
  vkt.classList.remove('is-active');
  vct.classList.remove('is-active');
  vbt.classList.add('is-active');
})
vkt.addEventListener('click', () => {
  b1.classList.add('is-active');
  c1.classList.remove('is-active');
  a1.classList.remove('is-active');
  vkt.classList.add('is-active');
  vct.classList.remove('is-active');
  vbt.classList.remove('is-active');
})
vct.addEventListener('click', () => {
  b1.classList.remove('is-active');
  c1.classList.add('is-active');
  a1.classList.remove('is-active');vkt.classList.remove('is-active');
  vct.classList.add('is-active');
  vbt.classList.remove('is-active');
})

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  let t7Input = document.querySelector('[data-js="t7-input"]')
  let t7Run = document.querySelector('[data-js="t7-run"]')
  let t7Out = document.querySelector('[data-js="t7-out"]')

  t7Run.addEventListener('click', () => {
    let reverseInput = ''
    for(let i = t7Input.value.length; 0 < i; i--) {
      reverseInput += t7Input.value[i - 1]
    }
    t7Out.textContent = reverseInput
  })


  let t8A = document.querySelector('[data-js="t8-a"]')
  let t8B = document.querySelector('[data-js="t8-b"]')
  let t8Add = document.querySelector('[data-js="t8-add"]')
  let t8Mul = document.querySelector('[data-js="t8-mul"]')
  let t8Out = document.querySelector('[data-js="t8-out"]')


  t8Add.addEventListener('click', () => {
    let a = Number(t8A.value)
    let b = Number(t8B.value)
    if (!Number.isNaN(a)) {
      if (!Number.isNaN(b)) {
        t8Out.textContent = a + b
      }
    }
  })

  t8Mul.addEventListener('click', () => {
    let a = Number(t8A.value)
    let b = Number(t8B.value)
    if (!Number.isNaN(a)) {
      if (!Number.isNaN(b)) {
        t8Out.textContent = a * b
      }
    }
  })

  let t9Toggle = document.querySelector('[data-js="t9-toggle"]')
  let t9Text = document.querySelector('[data-js="t9-text"]')

  t9Toggle.addEventListener('click', () => {
    t9Text.classList.toggle('hidden')
    if (t9Text.classList.contains('hidden')) {
      t9Toggle.textContent = "Показать"
    }
    else {
      t9Toggle.textContent = "Скрыть"
    }
  })

  let t10Range = document.querySelector('[data-js="t10-range"]')
  let t10Out = document.querySelector('[data-js="t10-out"]')
  let t10Box = document.querySelector('[data-js="t10-box"]')

  t10Range.addEventListener('input', (event) => {
    t10Out.textContent = event.target.value + "px"
    t10Box.style.width = `${event.target.value}px`
    t10Box.style.height = `${event.target.value}px`
  })

  let t11Seconds = document.querySelector('[data-js="t11-seconds"]')
  let t11Start = document.querySelector('[data-js="t11-start"]')
  let t11Stop = document.querySelector('[data-js="t11-stop"]')
  let t11Out = document.querySelector('[data-js="t11-out"]')
  let checkTimer = null;

  t11Start.addEventListener('click', () => {
    if (!checkTimer) {
      let a = Number(t11Seconds.value)
      if (!Number.isNaN(a)) {
        checkTimer = setInterval(() => {
          t11Out.textContent = a;
          if (a <= 0) {
            clearInterval(checkTimer)
            checkTimer = null;
            return
          }
          a--;
        }, 1000);
      }
      else {
        alert("Ты должен ввести только число")
      }
    }
    else {
      alert("Ты должен закончить таймер")
    }
  })

  t11Stop.addEventListener('click', () => {
    clearInterval(checkTimer)
    checkTimer = null;
    t11Out.textContent = 0;
  })

  let t12Plus = document.querySelector('[data-js="t12-plus"]')
  let t12Label = document.querySelector('[data-js="t12-label"]')
  let t12Bar = document.querySelector('[data-js="t12-bar"]')
  let progess = 0
  t12Plus.addEventListener('click', () => {
    if (progess < 100)
    {
      progess += 10
      t12Label.textContent = progess + "%"
      t12Bar.style.width = `${progess}%`
    }
  })

  let t13Input = document.querySelector('[data-js="t13-input"]')
  let t13Out = document.querySelector('[data-js="t13-out"]')

  t13Input.addEventListener('keydown', (e) => {
    logKey(e)
    if (e.ctrlKey && e.key == "k") {
      t13Out.textContent = ''
    }
  })

  function logKey(e) {
    t13Out.textContent += ` ${e.key}`
  }


  let matrix = ["Соси",
    "Сосни тунца",
    "Мирон",
    "ФОШЫРВОФЫИВРГФЫИВ",
    "МАТВЕЙ МОЛОДЕЦ, если это выпадет",
    "алкашня",
    "Я не Европа с НАТО, но пятый год, как я веду русский хип-хоп на запад",
    "Я всего лишь писатель, моё дело писать — и не ебёт!"
  ]

  let t14Next = document.querySelector('[data-js="t14-next"]')
  let t14Out = document.querySelector('[data-js="t14-out"]')

  t14Next.addEventListener('click', () => {
    let randomCitat = getRandom(0, matrix.length)
    console.log(randomCitat)
    t14Out.textContent = matrix[randomCitat]
  })


  let t15Coords = document.querySelector('[data-js="t15-coords"]')
  let t15Item = document.querySelector('[data-js="t15-item"]')
  let t15Area = document.querySelector('[data-js="t15-area"]')

  let drugable = false

  t15Item.addEventListener('pointerdown', (e) => {
    drugable = true
    let areaRect = t15Area.getBoundingClientRect()
    t15Item.style.left = `${e.clientX - areaRect.left - t15Item.offsetWidth / 2}px`
    t15Item.style.top = `${e.clientY - areaRect.top - t15Item.offsetHeight / 2}px`
  })

  t15Item.addEventListener('pointermove', (e) => {
    if (!drugable) return;

    let rect = t15Item.getBoundingClientRect()
    let areaRect = t15Area.getBoundingClientRect()

    let desiredLeft = e.clientX - areaRect.left - rect.width / 2
    let desiredTop = e.clientY - areaRect.top - rect.height / 2

    let maxLeft = areaRect.width - rect.width
    let maxTop = areaRect.height - rect.height

    let clampedLeft = Math.min(Math.max(desiredLeft, 0), maxLeft)
    let clampedTop = Math.min(Math.max(desiredTop, 0), maxTop)

    t15Item.style.left = `${clampedLeft}px`
    t15Item.style.top = `${clampedTop}px`

    t15Coords.textContent = `X: ${Math.floor(clampedLeft)}, Y: ${Math.floor(clampedTop)}`
  })

  t15Item.addEventListener('pointerup', () => {
    drugable = false
  })


  let t16Animate = document.querySelector('[data-js="t16-animate"]')
  let t16Box = document.querySelector('[data-js="t16-box"]')

  let startLeft = 30
  let distance = 600
  let animId = 0

  t16Animate.addEventListener('click', () => {
    animId++
    const myId = animId

    t16Box.style.left = startLeft + 'px'

    animate({
      duration: 3000,
      timing: bounce,
      draw(progress) {
        if (myId !== animId) return

        t16Box.style.left = (startLeft + progress * distance) + 'px'
      }
    })
  })

  function bounce(timeFraction) {
    for (let a = 0, b = 1; ; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  function animate({ duration, timing, draw }) {
    let start = performance.now()

    requestAnimationFrame(function frame(time) {
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1

      let progress = timing(timeFraction)
      draw(progress)

      if (timeFraction < 1) requestAnimationFrame(frame)
    })
  }
  function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}
});

