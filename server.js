const express = require('express')
const app = express()
const PORT = 8000

const bts = {
    'rm': {
        'age': 28,
        'birthname': 'Kim Nam-joon',
        'hangul': '김남준',
        'birthlocation':'Seoul, South Korea'
    },
    'jin': {
        'age': 29,
        'birthname': 'Kim Seok-jin',
        'hangul': '김석진',
        'birthlocation':'Gwacheon, South Korea'
    },
    'suga': {
        'age': 29,
        'birthname': 'Min Yoon-gi',
        'hangul': '민윤기',
        'birthlocation':'Daegu, South Korea'
    },
    'jhope': {
        'age': 28,
        'birthname': 'Jung Ho-seok',
        'hangul': '정호석',
        'birthlocation':'Gwangju, South Korea'
    },
    'jimin': {
        'age': 26,
        'birthname': 'Park, Ji-min',
        'hangul': '박지민',
        'birthlocation':'Busan, South Korea'
    },
    'v': {
        'age': 26,
        'birthname': 'Kim Tae-hyung',
        'hangul': '김태형',
        'birthlocation':'Daegu, South Korea'
    },
    'jungkook': {
        'age': 25,
        'birthname': 'Jeon Jung-kook',
        'hangul': '전정국',
        'birthlocation':'Busan, South Korea'
    },
    'unknown':{
        'age': 0,
        'birthname': 'unknown',
        'hangul': 'unknown',
        'birthlocation':'unknown'
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