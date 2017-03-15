const express = require('express')
const path = require('path')
const next = require('next')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 5000

app.prepare()
  .then(_ => {
    const server = express()
    
    server.use(bodyParser.json()); // for parsing application/json
    server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    
    // serve service worker
    server.get('/sw.js', (req, res) => res.jsonFile(path.resolve('./.next/sw.js')))

    server.get('*', (req, res) => handle(req, res))

    server.listen(PORT, err => {
      if (err) throw error

      console.log('> App running on port ', PORT)
    })

    server.post('/contact', function(req, res) {

      console.log(req.body)
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
          }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"MTX Web & Art" mtxdesigngo@gmail.com', // jsoner address
          replyTo: req.body.email, // list of receivers
          to: 'pousadacaninde@gmail.com', // list of receivers
          subject: ' ✔ Mensagem do Site Pousada Canindé - '+req.body.name, // Subject line
          // text: 'Hello world ?', // plain text body
          html: '<h3>Mensagem enviada pelo site:</h3><p>Nome: <strong>'+req.body.name+'</strong></p><p>Email: <strong>'+req.body.email+'</strong></p><p>Mensagem: <strong>'+req.body.comment+'</strong></p>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res.json('ERROR: '+ error);
          } else {
            res.json('success');  
          }
      });

      
    });
  })