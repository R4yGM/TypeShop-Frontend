/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require('axios');

const app = express();

//per la landing page
/*
app.get("/", function (req, res) {
  console.log("HITTT")
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    data = data.replace(/{{title}}/g, "#1 W2C Italiano");
    data = data.replace(/{{currentUrl}}/g, fullUrl);
    data = data.replace(/{{image}}/g, "src/round.png");
    data = data.replace(
      /{{description}}/g,
      "Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!"
    );
    data = data.replace(/{{keywords}}/g, "pandabuy.com, prodotti, reps");

    res.send(data);
  });
});
*/ //problema non va il route /

//per la ricerca prodotti
app.get("/home", function (req, res) {
    const filePath = path.resolve(__dirname, "./dist", "index.html");
  
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var fullUrl = 'https://w2c.space' + req.originalUrl;
      data = data.replace(/#1 W2C Italiano/g, "Cerca prodotti | w2c.space");
      
      data = data.replace(/<meta property="og:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<meta property="twitter:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<link rel="canonical" href="https:\/\/w2c\.space\/" \/>/g, `<link rel="canonical" href="${fullUrl}" />`);

      data = data.replace(
        /Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!/g,
        "Cerca prodotti aggiunti quotidianamente validi e fidati già acquistati da altri utenti italiani su pandabuy!"
      );
      data = data.replace(/pandabuy.com, prodotti, reps/g, "Prodotti, categorie, brands, ricerca, marca");
  
      res.send(data);
    });
  });

//per la sezione trova
app.get("/trova", function (req, res) {
    const filePath = path.resolve(__dirname, "./dist", "index.html");
  
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var fullUrl = 'https://w2c.space' + req.originalUrl;
      data = data.replace(/#1 W2C Italiano/g, "Trova un prodotto | w2c.space");

      data = data.replace(/<meta property="og:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<meta property="twitter:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<link rel="canonical" href="https:\/\/w2c\.space\/" \/>/g, `<link rel="canonical" href="${fullUrl}" />`);

      data = data.replace(
        /Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!/g,
        "Stai cercando un prodotto di pandabuy e non lo trovi? mandaci la tua richiesta e ti manderemo il prodotto che stavi cercando da un seller trustato e fidato!"
      );
      data = data.replace(/pandabuy.com, prodotti, reps/g, "Contattaci, contact, Suggerimento, find a product,Trova un prodotto, w2c.space, pandabuy, finds, w2c, weidan, reps, reps italia, pandabuy vestiti");
  
      res.send(data);
    });
  });

app.get("/login", function (req, res) {
    const filePath = path.resolve(__dirname, "./dist", "index.html");
  
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var fullUrl = 'https://w2c.space' + req.originalUrl;
      data = data.replace(/#1 W2C Italiano/g, "Accedi sul tuo account | w2c.space");

      data = data.replace(/<meta property="og:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<meta property="twitter:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<link rel="canonical" href="https:\/\/w2c\.space\/" \/>/g, `<link rel="canonical" href="${fullUrl}" />`);

      data = data.replace(
        /Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!/g,
        "Accedi sul tuo account"
      );
      data = data.replace(/pandabuy.com, prodotti, reps/g, "login, account, accedi, profilo, w2c.space");
  
      res.send(data);
    });
});

app.get("/register", function (req, res) {
    const filePath = path.resolve(__dirname, "./dist", "index.html");
  
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var fullUrl = 'https://w2c.space' + req.originalUrl;
      data = data.replace(/#1 W2C Italiano/g, "Registrati - w2c.space");

      data = data.replace(/<meta property="og:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<meta property="twitter:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<link rel="canonical" href="https:\/\/w2c\.space\/" \/>/g, `<link rel="canonical" href="${fullUrl}" />`);

      data = data.replace(
        /Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!/g,
        "Registra il tuo account"
      );
      data = data.replace(/pandabuy.com, prodotti, reps/g, "login, Registrati, account, accedi, profilo, w2c.space");
  
      res.send(data);
    });
});



app.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    // Fai una richiesta API per ottenere i dettagli del prodotto
    const apiResponse = await axios.get(`https://rep-api.onrender.com/api/products/${productId}`);
    const productData = apiResponse.data;

    const filePath = path.resolve(__dirname, "./dist", "index.html");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return console.log(err);
      }

      // Inserisci i dati dinamici nel documento HTML
      var fullUrl = 'https://w2c.space' + req.originalUrl;
      data = data.replace(/#1 W2C Italiano/g, `${productData.name} - w2c.space`);

      data = data.replace(/<meta property="og:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<meta property="twitter:url" content="https:\/\/w2c\.space\/" \/>/g, `<meta property="og:url" content="${fullUrl}" />`);
      data = data.replace(/<link rel="canonical" href="https:\/\/w2c\.space\/" \/>/g, `<link rel="canonical" href="${fullUrl}" />`);

      data = data.replace(/https:\/\/w2c\.space\/src\/round\.png/g, productData.image);
      data = data.replace(/Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!/g, `${productData.name} - w2c.space`);
      data = data.replace(/pandabuy.com, prodotti, reps/g, `${productData.brand},${productData.category},vestiti,reps,pandabuy,w2c,finds`);

      // Inserisci altri dati dinamici nel documento HTML, se necessario

      res.send(data);
    });
  } catch (error) {
    console.error('Errore nella richiesta API:', error.message);
    res.status(500).send('Errore nella richiesta API');
  }
});
  


app.use(express.static(path.resolve(__dirname, "./")));

app.get("*", function (req, res) {
  const filePath = path.resolve(__dirname, "./dist", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    var fullUrl = 'https://w2c.space' + req.originalUrl;
    data = data.replace(/https:\/\/w2c.space\//g, fullUrl);
    data = data.replace(/#1 W2C Italiano/g, "w2c.space");
    data = data.replace(
      /Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!/g,
      "Dove trovare prodotti italiani su pandabuy.com. Registrati per sconti fino a 144$. Prodotti aggiunti quotidianamente, stai cercando un prodotto? te lo troviamo noi per te!"
    );
    //data = data.replace(/https:\/\/w2c\.space\/src\/round\.png/g, "src/round.png");
    data = data.replace(/pandabuy.com, prodotti, reps/g, "pandabuy.com, prodotti, reps");


    res.send(data);
  });
});

exports.w2c = functions.https.onRequest(app);
