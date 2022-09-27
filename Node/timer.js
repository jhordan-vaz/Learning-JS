const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * 12 * * 2', function (){
    console.log('Executing task 1!', new Date().getSeconds())
})

setTimeout(function() {
      task1.cancel()
      console.log('Canceling Task 1!')
})

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 12
rule.second = 30

const task2 = schedule.scheduleJob(rule, function() {
    console.log('Executing task 2!', new Date().getSeconds())
})