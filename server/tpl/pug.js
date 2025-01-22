module.exports = `
doctype html
html
head
 meta(charset='utf-8')
 meta(name='viewport' content='with=device-with, inital-scale =1')
 title Koa Server Pug
 link(href='https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css' rel='stylesheet')
 script(src='https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js')
 script(src='https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js')
body
  .container 
     .row 
       .col-md-8
         h1 Hi #{you}
         p This is #{me}
       .col-md-4
         p 测试动态 Pug 模板引擎  
`