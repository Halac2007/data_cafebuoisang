import * as cheerio from 'cheerio'
import express from 'express'
import cors from 'cors'
import { got } from 'got'
import axios from 'axios'
const app = express()
app.use(cors())

/*---------------data plo----------------*/
app.get('/', async (req, res) => {
  got('https://plo.vn/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')

        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.slice(Math.max(articles.length - 12))
      res.json(newarr)
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*---------------search ---------------*/
app.get('/tim-kiem/:key', async (req, res) => {
  const { key } = req.params

  got(`https://plo.vn/tim-kiem/?q=${key}`)
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')

        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      //const newarr = articles.slice(Math.max(articles.length - 12))
      res.json(articles)
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*-------------data assk---------------*/

app.get('/an-sach-song-khoe', async (req, res) => {
  got('https://plo.vn/an-sach-song-khoe/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)

      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')

        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      const arrNew = articles.slice(4)

      const arrNewC = arrNew.splice(15, 23)

      const arrNewSpliceEnd = arrNew.splice(arrNewC)

      const arrEnd = arrNewSpliceEnd.splice(19)

      // const newarr = articles.splice(15, 27)
      res.json(arrNewSpliceEnd.splice(arrEnd))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*-------------data assk page 2---------------*/

app.get('/an-sach-song-khoe/page2', async (req, res) => {
  got('https://plo.vn/an-sach-song-khoe/?trang=2')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      res.json(articles.slice(4))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})
/*-------------data assk page 3---------------*/

app.get('/an-sach-song-khoe/page3', async (req, res) => {
  got('https://plo.vn/an-sach-song-khoe/?trang=3')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      res.json(articles.slice(4))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*---------data xe và luật-------------------*/

app.get('/xe-va-luat', async (req, res) => {
  got('https://plo.vn/xe-va-luat/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      const arrNew = articles.slice(4)

      const arrNewC = arrNew.splice(15, 23)

      const arrNewSpliceEnd = arrNew.splice(arrNewC)

      const arrEnd = arrNewSpliceEnd.splice(19)

      // const newarr = articles.splice(15, 27)
      res.json(arrNewSpliceEnd.splice(arrEnd))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*----------data xe và luật page 2-----------*/

app.get('/xe-va-luat/page2', async (req, res) => {
  got('https://plo.vn/xe-va-luat/?trang=2')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      const arrNew = articles.slice(4)

      const arrNewC = arrNew.splice(15, 23)

      const arrNewSpliceEnd = arrNew.splice(arrNewC)

      const arrEnd = arrNewSpliceEnd.splice(19)

      // const newarr = articles.splice(15, 27)
      res.json(arrNewSpliceEnd.splice(arrEnd))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*----------data xe và luật page 3-----------*/

app.get('/xe-va-luat/page3', async (req, res) => {
  got('https://plo.vn/xe-va-luat/?trang=3')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      res.json(articles.slice(4))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})
/*-------data kỷ nguyên số home--------------*/
app.get('/ky-nguyen-so', async (req, res) => {
  got('https://kynguyenso.plo.vn/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.rank-1', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('.story').find('a').attr('title')
        const link = $(this).find('.story').find('a').attr('href')
        const image = $(this).find('.story').find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')

        const time = $(this).find('.story').find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,
          image,
          time,
        })
      })
      res.json(articles)
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*------------data nhịp công nghệ-----------------*/

app.get('/nhip-cong-nghe', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/nhip-cong-nghe/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')

        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*---------------------data thiết bị sô----------------*/
app.get('/thiet-bi-so', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/thiet-bi-so/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*-----------------data tuyệt chiêu------------------*/

app.get('/tuyet-chieu', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/tuyet-chieu/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*--------------------data kinh doanh online------------------------*/

app.get('/kinh-doanh-online', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/kinhdoanhonline/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        // const imageTop = $(this).find('a').find('img').attr('src')

        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})
/*----------------------data công nghệ 40--------------------*/
app.get('/cong-nghe-40', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/cong-nghe/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*-----------data full kNS------------*/

/*-----------------gộp data ASSK------------------------*/

app.get('/an-sach-song-khoe/random', async (req, res) => {
  const assk = await axios(`https://data-cafebuoisang.herokuapp.com/an-sach-song-khoe`)
  const res1 = await axios(`https://data-cafebuoisang.herokuapp.com/an-sach-song-khoe/page2`)

  const res2 = await axios(`https://data-cafebuoisang.herokuapp.com/an-sach-song-khoe/page3`)

  const asskhome = assk.data
  const asskpage2 = res1.data
  const asskpage3 = res2.data

  const newPage1 = asskpage2.splice(20)

  const newPage2 = asskpage3.splice(20)

  const arrNews = [...asskhome, ...asskpage2, ...asskpage3]

  const arrSlice = arrNews.splice(1, 4)

  res.send(arrNews)
})

/*-----------------gộp data KNS------------------------*/

app.get('/ky-nguyen-so/random', async (req, res) => {
  const homekns = await axios(`https://data-cafebuoisang.herokuapp.com/ky-nguyen-so`)
  const respRepos = await axios(`https://data-cafebuoisang.herokuapp.com/nhip-cong-nghe`)
  const res1 = await axios(`https://data-cafebuoisang.herokuapp.com/cong-nghe-40`)
  const res2 = await axios(`https://data-cafebuoisang.herokuapp.com/tuyet-chieu`)
  const res3 = await axios(`https://data-cafebuoisang.herokuapp.com/thiet-bi-so`)
  const res4 = await axios(`https://data-cafebuoisang.herokuapp.com/kinh-doanh-online`)

  const pagekns = homekns.data
  const nhipcongnghe = respRepos.data

  const congnghe40 = res1.data
  const tuyetchieu = res2.data
  const thietbiso = res3.data

  const kinhdoanh = res4.data

  const arrNews = [...pagekns, ...nhipcongnghe, ...tuyetchieu, ...thietbiso, ...congnghe40, ...kinhdoanh]

  res.send(arrNews)
})

/*-----------------gộp data xe------------------------*/

app.get('/xe-va-luat/random', async (req, res) => {
  const page1 = await axios(`https://data-cafebuoisang.herokuapp.com/xe-va-luat`)
  const page2 = await axios(`https://data-cafebuoisang.herokuapp.com/xe-va-luat/page2`)
  const page3 = await axios(`https://data-cafebuoisang.herokuapp.com/xe-va-luat/page3`)

  const xepage1 = page1.data
  const xepage2 = page2.data
  const xepage3 = page3.data

  const newPage1 = xepage2.splice(15)

  const newPage3 = xepage3.splice(15)

  const arrNews = [...xepage1, ...xepage2, ...xepage3]
  const arrSlice = arrNews.splice(1, 4)
  res.send(arrNews)
})
// /*-------------------------*/

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server ${port}`)
})
