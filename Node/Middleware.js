//middleware pattern ( chain of resposability)

const step1 = (sbs, next ) => {
    sbs.valor1 = 'mid1'
    next()
}

const step2 = (sbs, next) => {
    sbs.valor2 = 'mid2'
    next()
}

const step3 = sbs => sbs.valor3 = 'mid3'

const exec = (sbs, ...middlewares) => {
    const exeMid = index => {
        middlewares && index < middlewares.length &&
            middlewares[index](sbs, () => exeMid(index + 1))
    }
    exeMid(0)
  }

  const sbs = {}
  exec(sbs, step1, step2, step3)
  console.log(sbs)