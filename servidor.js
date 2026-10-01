const http = require("http");

const PORT = 3000;


const cards = [
 { name: "Bimgbong", type: "Objeto", attack: 20, defense: 20},
 { name: "tralalero", type: "??", attack: 67, defense: 42 },
 { name: "basilisco", type: "Criatura", attack: 20, defense: 9 },
 { name: "cavaleiro_oco", type: "inseto", attack: 70, defense: 10 },
 { name: "impulso_sombrio", type: "hipnose", attack: 60, defense: 5 },
  
];
let contagem = cards.length;
const items = cards.map(card => `<li>${card.name}</li>`).join("");





const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
if (req.url === "/") {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>Funciona</h1><p>Diogo</p><p>TGPSIU-24<p><p>Tenho: ${contagem} Cartas <p>`);

    return;
}
else if(req.url === "/sobre") {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<p>Diogo<p><p> TGPSIU-24<p>");
    return;
}

else if (req.url === "/cartas")
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
       
        res.end(items);
        return;
    }

   else if (req.url === "/agora")
    {
      const now = new Date().toLocaleString("pt-PT");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`${now}`);
        return;
    }

    else if (req.url === "/batatas")
    {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
         res.end("not found");
  
        return;
    }

   

});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});



    
 