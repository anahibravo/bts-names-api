const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const bts = {
    'rm': {
        'age': 28,
        'birthName': 'Kim Nam-joon',
        'hangul': '김남준',
        'birthLocation':'Seoul, South Korea'
    },
    'jin': {
        'age': 29,
        'birthName': 'Kim Seok-jin',
        'hangul': '김석진',
        'birthLocation':'Gwacheon, South Korea'
    },
    'suga': {
        'age': 29,
        'birthName': 'Min Yoon-gi',
        'hangul': '민윤기',
        'birthLocation':'Daegu, South Korea'
    },
    'jhope': {
        'age': 28,
        'birthName': 'Jung Ho-seok',
        'hangul': '정호석',
        'birthLocation':'Gwangju, South Korea'
    },
    'jimin': {
        'age': 26,
        'birthName': 'Park Ji-min',
        'hangul': '박지민',
        'birthLocation':'Busan, South Korea'
    },
    'v': {
        'age': 26,
        'birthName': 'Kim Tae-hyung',
        'hangul': '김태형',
        'birthLocation':'Daegu, South Korea'
    },
    'jungkook': {
        'age': 25,
        'birthName': 'Jeon Jung-kook',
        'hangul': '전정국',
        'birthLocation':'Busan, South Korea'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'hangul': 'unknown',
        'birthLocation':'unknown'
    }
}
//like a click(event listener) but it's a network request
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request, response)=>{
    const btsName = request.params.name.toLowerCase()
    if( bts[btsName]){
        response.json(bts[btsName])
    }else{
        response.json(bts['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
//console log to make sure the port is running
    console.log(`Server is running on ${PORT}!`)
})