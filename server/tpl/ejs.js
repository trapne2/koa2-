module.exports = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="with=device-with, inital-scale =1"/>
  <link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js"></script>
  <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
  <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1>Hi <%= you %></h1>
          <p>This is <%= me %></p>
       </div>
        <div class="col-md-4">
           <p>测试静态 HTML 页面</p>
         </div>
     </div>
 </div>
</body>
</html>
`

// <% if (names.length) { %>
// <ul>
//     <% names.forEach(function(name){ %>
//     <li foo='<%= name + "'" %>'><%= name %></li>
//         <% }) %>
//     </ul>
//     <% } %>
//
// <html>
// <head>
// <script src="../ejs.js"></script>
//     <script id="users" type="text/template">
//     <% if (names.length) { %>
// <ul>
//     <% names.forEach(function(name){ %>
//     <li><%= name %></li>
//             <% }) %>
//     </ul>
//     <% } %>
// </script>
// <script>
// onload = function(){
//         var users = document.getElementById('users').innerHTML;
//         var names = ['loki', 'tobi', 'jane'];
//         var html = ejs.render(users, { names: names });
//         document.body.innerHTML = html;
//     }
//     </script>
//     </head>
//     <body>
//     </body>
//     </html>