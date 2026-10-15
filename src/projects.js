import assets from './assets.json';
export const imageById=id=>assets.images.find(x=>x.id===id);
export const excludedImages = new Set([0,8,83]);
export const galleryImages=assets.images.filter(x=>!excludedImages.has(x.id)&&x.id!==110);
const definitions=[
 ['seefry','See Fry','看见生活的温度','家居与生活',[87,88,89,95,144,145,146,82],89,'seefry'],
 ['niu','Beyond the city','城市之外 · 出行视觉','汽车与出行',[69,70,97,98],69],
 ['scent','A scent of nature','自然之间 · 香氛视觉','美妆与香氛',[39,79,10],39],
 ['rog','Engineered to move','ROG · 动态视觉','科技与数码',[67],67,'rog'],
 ['tea','山间有茶','茶饮、包装与场景探索','品牌与包装',[91,92,99,100,101,102,103,104,105,106,117,118,132,133,134,135,136,137,138,139,140,141],91],
 ['fortune','福气游记','角色与生活的相遇','概念与IP',[93,119,120,121,122,123,124,142],119],
 ['stars','星团团','小小角色，无限想象','概念与IP',[125,126,127,128,129,130,131],129],
 ['porsche','Form & velocity','保时捷 911 · 光影与速度','汽车与出行',[15,24,25,26],25],
 ['mouse','Precision in motion','鼠标 · 产品动态','科技与数码',[49],49,'mouse'],
 ['xbox','Play without limits','手柄 · 动态探索','科技与数码',[85,86],86,'xbox'],
 ['beauty','Light on beauty','美妆 · 材质与色彩','美妆与香氛',[11,16,18,19,23,35,40,41,42,51,54,64,73],23],
 ['mixue','Fresh expressions','茶饮 · 品牌视觉探索','品牌与包装',[108,109,111,112,113,114,115,116],114],
 ['spaces','Quiet spaces','空间 · 日常光景','家居与生活',[5,9,17,29,31,32,43,44,56,61,63,76],44],
 ['future','Other worlds','概念 · 未来想象','概念与IP',[34,36,48,52,53,77,78,107],36]
];
const used=new Set(definitions.flatMap(x=>x[4]));used.add(110);
export const projects=definitions.map(([id,title,subtitle,theme,ids,cover,video])=>({id,title,subtitle,theme,images:ids.filter(id=>!excludedImages.has(id)).map(imageById),cover:imageById(cover),video,medium:[...new Set(ids.map(id=>imageById(id).medium))]}));
for(const theme of ['科技与数码','汽车与出行','家居与生活','品牌与包装','概念与IP']){const imgs=assets.images.filter(x=>!used.has(x.id)&&!excludedImages.has(x.id)&&x.themes.includes(theme));if(imgs.length){imgs.forEach(x=>used.add(x.id));projects.push({id:`archive-${theme}`,title:theme,subtitle:'视觉习作与探索',theme,images:imgs,cover:imgs[0],medium:[...new Set(imgs.map(x=>x.medium))]});}}
export const films=[{id:'rog',title:'ROG显卡动画',caption:'ROG显卡动画',poster:67},{id:'mouse',title:'Precision in motion',caption:'鼠标动态视觉',poster:49},{id:'xbox',title:'Play without limits',caption:'手柄动态探索',poster:86},{id:'seefry',title:'See Fry',caption:'空气炸锅产品短片',poster:87},{id:'study',title:'手机动画',caption:'手机动画',poster:null}];
const logoNames=['Illustrator','Photoshop','After Effects','即梦 AI','Cinema 4D','ChatGPT','Gemini','KeyShot','Lovart','Octane','Rhino'];
export const logos=[4,10,1,0,2,5,6,3,7,8,9].map(i=>({...assets.logos[i],alt:logoNames[i],invert:i===5||i===8,white:i===9}));
