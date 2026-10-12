import {readFile,writeFile,mkdir} from 'node:fs/promises';
const base=new URL('../',import.meta.url);
const manifest=JSON.parse(await readFile(new URL('game-content.json',base),'utf8'));
await mkdir(new URL('assets/cards/',base),{recursive:true});
for(const item of Object.values(manifest.items).filter(item=>item.representation==='action')){
  const size=item.name.length>=5?49:item.name.length===4?57:67;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><text x="120" y="140" text-anchor="middle" fill="#203975" font-family="Arial,sans-serif" font-size="${size}" font-weight="900" letter-spacing="-1">${item.name}</text></svg>`;
  await writeFile(new URL(`assets/cards/${item.asset}`,base),svg);
}
console.log('Generated eight action-word cards.');
