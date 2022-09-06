class Release {
    constructor( name = "Generic", valor = 0) {
      this.name = name
      this.valor = valor
    }
}

class FinancialCycle {
  constructor (month, year) {
      this.month = month
      this.year = year
      this.releases = []
   }

   addReleases(releases) {
    releases.forEach( r => this.releases.push(r))
   }
   summary() {
    let consolidatedValor = 0
    this.releases.forEach(r => {
        consolidatedValor += r.valor
    })
    return consolidatedValor
   }
 }

 const salary = new Release('Salary', 25000)
 const lightBill = new Release('light', -250)

 const account = new FinancialCycle(31, 2020)
 account.addReleases(salary, lightbill)
 console.log(account.summary())