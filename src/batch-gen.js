const fs = require('fs')
const fetch = require('node-fetch-commonjs')

const generateMetadata = async (domain) => {
    const response = await fetch(`https://1ns-registrar-relayer.hiddenstate.xyz/gen`, {
        method: 'POST',
        body: JSON.stringify({
            domain,
        }),
        headers: {'Content-Type': 'application/json'},
    })

    const {metadata, error} = await response.json()

    if (error) {
        if(error === 'domain expired') {
            console.log(error + ' ' + domain)
        } else {
            throw Error(error)
        }
    }
    return metadata
}

const runBatchGen = async () => {
    const data = fs.readFileSync(__dirname + '/batch-gen.txt', 'utf8');
    const lines = data.split('\n').filter(line => line)

    for(let i = 0; i < lines.length; i++) {
        const line = lines[i]
        const [, domain] = line.split('  ')

        if(domain && domain.endsWith('country')) {
            await generateMetadata(domain)
            await new Promise(resolve => setTimeout(resolve, 1000))
        }

        console.log('Completed ', domain, ', ', i + 1, 'of', lines.length)
    }
}

module.exports = {
    runBatchGen
}
