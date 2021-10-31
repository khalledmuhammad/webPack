var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
/*     res.sendFile('/client/views/index.html', { root: __dirname + '/..' }) // /.. elno2ttyn dy m3naha 2rg3 5twa lwra  l2n dirname da byro7 l7d lserver
 */
   res.sendFile("../../dist/index.html")
   

})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
