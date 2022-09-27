const unnamed = process.argv.indexOf('-a') !== -1
//console.log(unnamed)

if(unnamed) {
    process.stdout.write("Say annonymous!\n")
    process.exit()
} else {
    process.stdout.write('Type your name: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n', '')

        process.stdout.write(`Tell ${name}!!\n`)
        process.exit()
    })
}

// evento pra pegar dados de entradas de usuarios
