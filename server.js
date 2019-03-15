// // This file doesn't go through babel or webpack transformation.
// // Make sure the syntax and sources this file requires are compatible with the current node version you are running
// // See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
// const { createServer } = require('http')
// //const express = require('express')
// const { parse } = require('url')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/a') {
//       app.render(req, res, '/b', query)
//     } else if (pathname === '/b') {
//       app.render(req, res, '/a', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(3000, err => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })

const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
//const handle =  app.getRequestHandler()
const handle =  routes.getRequestHandler(app)


app.prepare()
.then(() => {
    const server = express()

    // server.get('/portfolio/:id', (req, res) => {
    //     const actualPage = '/portfolio'
    //     const queryParams = { id: req.params.id }
    //     app.render(req, res, actualPage, queryParams)
    // })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.use.(handle).listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
 .catch((ex) => {
     console.error(ex.stack)
     process.exit(1)
 })
