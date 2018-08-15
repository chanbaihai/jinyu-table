import '../scss/index.scss'
const isDev = process.env.NODE_ENV === 'development'
if(isDev){
    require('../pages/index.html')
}
