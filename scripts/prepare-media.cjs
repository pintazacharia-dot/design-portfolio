const fs=require('node:fs');const path=require('node:path');
const sharp=require('C:/Users/Administrator/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root=path.resolve(__dirname,'../..');const out=path.resolve(__dirname,'../public/media');fs.mkdirSync(out,{recursive:true});
const data=JSON.parse(fs.readFileSync(path.join(root,'planning/grouped-assets.json'),'utf8').replace(/^\uFEFF/,''));
(async()=>{
for(const a of data){await sharp(a.path).rotate().resize({width:1600,height:1600,fit:'inside',withoutEnlargement:true}).webp({quality:82}).toFile(path.join(out,`${a.id}.webp`));await sharp(a.path).rotate().resize({width:700,height:700,fit:'inside',withoutEnlargement:true}).webp({quality:78}).toFile(path.join(out,`${a.id}-thumb.webp`));}
const logos=[];for(const [i,f] of fs.readdirSync(path.join(root,'软件logo')).entries()){await sharp(path.join(root,'软件logo',f)).resize({width:100,height:100,fit:'inside'}).webp().toFile(path.join(out,`logo-${i}.webp`));logos.push({src:`/media/logo-${i}.webp`,alt:f.replace(/\.(png|webp)$/i,'')});}
for(const [name,source] of Object.entries({'rog':'ROG显卡动画30s.mp4','mouse':'罗技鼠标动画.mp4','seefry':'See Fry-1780048776858.mp4','xbox':'Xbox Elite Gaming Controller.mp4','study':'72141ea1ed06dd49cb9baeef9a962cdd_raw.mp4'}))fs.copyFileSync(path.join(root,'渲染',source),path.join(out,`${name}.mp4`));
fs.writeFileSync(path.resolve(__dirname,'../src/assets.json'),JSON.stringify({images:data.map(a=>({id:a.id,src:`/media/${a.id}.webp`,thumb:`/media/${a.id}-thumb.webp`,name:path.basename(a.path),medium:a.medium,themes:a.themes,width:a.width,height:a.height})),logos},null,2));
console.log(`Prepared ${data.length} images, ${logos.length} logos, 5 videos`);
})();
