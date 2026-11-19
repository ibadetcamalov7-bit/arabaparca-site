// ლოკალური სადემონსტრაციო სერვერი: ხელმისაწვდომია მხოლოდ ამ კომპიუტერიდან.
import http from 'node:http';
import {readFile,writeFile,rename} from 'node:fs/promises';
const catalog=new URL('./data/catalog.json',import.meta.url);
const files={'/':['index.html','text/html; charset=utf-8'],'/app.js':['app.js','text/javascript; charset=utf-8'],'/style.css':['style.css','text/css; charset=utf-8']};
let queue=Promise.resolve();
const server=http.createServer(async(req,res)=>{
 const send=(status,body,type='application/json; charset=utf-8')=>{res.writeHead(status,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(body)};
 try{
  const path=new URL(req.url,'http://localhost').pathname;
  if(path==='/api/catalog'){
   if(req.method==='GET')return send(200,await readFile(catalog));
   if(req.method!=='PUT')return send(405,JSON.stringify({error:'მეთოდი დაუშვებელია'}));
   if(!['http://localhost:3000','http://127.0.0.1:3000'].includes(req.headers.origin))return send(403,JSON.stringify({error:'მოთხოვნის წყარო უარყოფილია'}));
   let body='';for await(const chunk of req){body+=chunk;if(body.length>1_000_000)return send(413,'{}')}
   let d;try{d=JSON.parse(body);if(!Array.isArray(d.products)||d.products.length>500||typeof d.phone!=='string'||d.phone.length>30)throw Error();for(const p of d.products){for(const k of ['id','name','brand','model','years','category'])if(typeof p[k]!=='string'||!p[k].trim()||p[k].length>150)throw Error();if(!Number.isFinite(p.price)||p.price<0)throw Error();if(p.image&&!/^https:\/\//.test(p.image))throw Error()}}catch{return send(400,JSON.stringify({error:'პროდუქტის მონაცემები არასწორია'}))}
   // ჩანაწერები ინახება თანმიმდევრულად და ატომურად.
   queue=queue.catch(()=>{}).then(async()=>{const tmp=new URL('./data/catalog.tmp',import.meta.url);await writeFile(tmp,JSON.stringify(d,null,2));await rename(tmp,catalog)});await queue;return send(200,JSON.stringify({ok:true}));
  }
  if(req.method!=='GET'||!files[path])return send(404,'ვერ მოიძებნა','text/plain');
  const [name,type]=files[path];return send(200,await readFile(new URL('./public/'+name,import.meta.url)),type);
 }catch(err){console.error(err.message);send(500,JSON.stringify({error:'სერვერის შეცდომა'}))}
});
server.listen(3000,'127.0.0.1',()=>console.log('TONY Auto Parts: http://localhost:3000'));
