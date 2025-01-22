// http://api.douban.com/v2/movie/subject/1764796
// 服务器通过request向豆瓣api请求详细数据
// request-promise-native库
// request库
const rp = require('request-promise-native')

async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

    const res = await rp(url)
    return res
}
;(
    async ()=>{
        let movies = [
            { doubanId: 26592971,
                title: '瑞克和莫蒂 第三季',
                rate: 9.8,
                poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2453814101.jpg' },
            { doubanId: 5359940,
                title: '是，首相  第二季',
                rate: 9.8,
                poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2187836590.jpg' },
        ]

        movies.map(async movie=>{
            let movieData  = await fetchMovie(movie)

            try {
                movieData = JSON.parse(movieData)
                console.log(movieData.tags);
                console.log(movieData.summary);
            }catch (err) {
                console.log(err);
            }

        })
    }
)()
