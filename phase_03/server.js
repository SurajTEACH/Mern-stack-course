
import http from "http";

const server = http.createServer((req, res)=>{
  res.write("Hello Server");
  res.end();
});

server.listen(3000, ()=>{
  console.log("Server is running on port 3000");
})

// express with create server

import express from "express";

const app = express();

app.get("/",(req, res)=>{
  res.send("Hello Express");
})

app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})

// ise code se related  question with ans 

/* 

❓ Q1. http.createServer() क्या करता है?

👉 Answer:
http.createServer() एक server बनाता है जो client (browser) की request को handle करता है और response भेजता है।

❓ Q2. req और res क्या होते हैं?

👉 Answer:

req (request) → client से आने वाली information (URL, method, headers)

res (response) → server से client को भेजी जाने वाली response


❓ Q3. res.write() और res.end() में difference क्या है?

👉 Answer:

res.write() → data लिखता है (multiple बार call कर सकते हैं)

res.end() → response खत्म करता है (mandatory है)

❓ Q4. server.listen(3000) क्या करता है?

👉 Answer:
यह server को port 3000 पर run करता है ताकि client request भेज सके।

❓ Q5. Port क्या होता है?

👉 Answer:
Port एक number होता है जो server की specific service को identify करता है (जैसे 3000, 5000, 8080)

❓ Q8. res.send() क्या करता है?

👉 Answer:
Client को response भेजता है (string, JSON, HTML कुछ भी)

❓ Q9. Node.js server asynchronous क्यों होता है?

👉 Answer:
Node.js non-blocking I/O use करता है, इसलिए multiple requests को एक साथ handle कर सकता है।

❓ Q10. Callback function क्या है इस code में?

👉 Answer:

(req, res) => {}

👉 यह callback है जो request आने पर execute होता है

❓ Q11. अगर res.end() नहीं लिखेंगे तो क्या होगा?

👉 Answer:
Browser में request hang हो जाएगी (response complete नहीं होगा)

❓ Q12. Express internally किस पर बना है?

👉 Answer:
👉 Node.js के http module पर


*/