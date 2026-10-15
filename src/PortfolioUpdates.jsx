import GooeyNav from './components/GooeyNav';
import TrueFocus from './components/TrueFocus';
import SplitText from './components/SplitText';
import React,{useEffect,useRef} from 'react';
import {galleryImages} from './projects';
import ParticleField from './components/ParticleField';

export function RenderWall({paused,onOpen}){
 const images=galleryImages.filter(x=>x.medium==='3D');
 return <div className={`render-wall ${paused?'is-paused':''}`}><div className="render-tilt">{[0,1,2,3,4,5].map(row=>{
 const items=images.filter((_,i)=>i%6===row);
 return <div className="render-row" key={row} style={{'--duration':`${items.length*7}s`}}>{[0,1].map(copy=><div className="render-sequence" key={copy} aria-hidden={copy===1?true:undefined}>{items.map(img=><button key={img.id} tabIndex={copy===1?-1:0} onClick={()=>onOpen(img)} aria-label={`查看渲染作品 ${img.name}`}><img src={img.thumb} alt={copy?'':img.name} loading="lazy"/></button>)}</div>)}</div>;
 })}</div></div>
}
export function Thumbnail({image,onOpen}){
 const ref=useRef(null);
 useEffect(()=>{const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting){ref.current?.classList.add('revealed');ob.disconnect()}},{threshold:.08});ob.observe(ref.current);return()=>ob.disconnect()},[]);
 return <button ref={ref} className="thumbnail" onClick={()=>onOpen(image)} aria-label={`查看大图：${image.name}`}><div><img src={image.thumb} alt={image.name} loading="lazy"/><span className="thumb-expand">↗</span></div><span className="thumb-label">{image.medium} <span>{String(image.id+1).padStart(3,'0')}</span></span></button>
}
export function ImageViewer({image,images,onChange,onClose}){
 const ref=useRef(null);const index=images.findIndex(x=>x.id===image.id);
 const move=delta=>onChange(images[(index+delta+images.length)%images.length]);
 useEffect(()=>{const before=document.activeElement;ref.current.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old;before?.focus()}},[]);
 return <dialog ref={ref} className="image-viewer" onCancel={onClose} onKeyDown={e=>{if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)}} onClick={e=>{if(e.target===ref.current)onClose()}}><div className="viewer-head"><span>{image.medium} / {index+1} OF {images.length}</span><button onClick={onClose} aria-label="关闭大图">关闭 ×</button></div><img src={image.src} alt={image.name}/><div className="viewer-controls"><button onClick={()=>move(-1)} aria-label="上一张">← 上一张</button><a href={image.src} target="_blank" rel="noreferrer">查看完整图片 ↗</a><button onClick={()=>move(1)} aria-label="下一张">下一张 →</button></div></dialog>
}
export function ContactPage(){
 useEffect(()=>{document.title='Contact — Design Portfolio'},[]);
 return <><div className="ambient" aria-hidden="true"><ParticleField preset="nebula" color="#a48aff" particleCount={8000} motion="drift" hoverStrength={1}/></div><header className="header"><a className="wordmark" href="/" aria-label="PORTFOLIO"><TrueFocus sentence="PORT|FOLIO" separator="|" blurAmount={.7} borderColor="#dfb8ff" animationDuration={.65} pauseBetweenAnimations={1.8}/></a><div className="desktop-nav"><GooeyNav items={[{label:"Work",href:"/#work"},{label:"Motion",href:"/#motion"},{label:"About",href:"/#about"},{label:"Contact",href:"/contact"}]} activeIndex={3}/></div></header><main className="contact-page"><p className="eyebrow">LET’S CREATE SOMETHING</p><SplitText tag="h1" text="Get in touch." textAlign="left" delay={65} duration={1} rootMargin="0px"/><SplitText className="contact-intro" text="让下一个想法，从一次交流开始。" textAlign="left" delay={35} rootMargin="0px"/><div className="contact-details"><a href="tel:17635084269"><span>PHONE / 电话</span><strong>17635084269</strong><b>↗</b></a><a href="mailto:2186236721@qq.com"><span>EMAIL / 邮箱</span><strong>2186236721@qq.com</strong><b>↗</b></a></div><div className="wechat-contact"><div><p className="eyebrow">WECHAT / 微信</p><strong>Pinta123</strong><p>扫描二维码添加微信</p></div><img src="/media/wechat-qr.jpg" alt="微信 Pinta123 的二维码" width="699" height="739"/></div><a className="contact-back" href="/">← BACK TO PORTFOLIO</a></main></>
}
