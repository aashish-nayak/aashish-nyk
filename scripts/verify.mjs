import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
function walk(dir) { return readdirSync(dir,{withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(resolve(dir,e.name)) : [resolve(dir,e.name)]); }
const files = walk(root).filter(p => p.endsWith('.html'));
const slugs = ['interprep','worldlytic','wickto','tuco2','ai-content-document-generator','chatmodule','news15india','snakegame','blueclubselect','store-for-me','skills-and-more','ad-furniture','redchilli-art','mencureclinic'];
const paths = ['', 'projects', 'about', 'experience', 'writing', 'contact', 'resume', ...slugs.map(s => `projects/${s}`)];
for (const path of paths) assert(existsSync(resolve(root,path,'index.html')), `Missing route: ${path}`);
assert(existsSync(resolve(root,'404.html')), 'Missing custom 404');
const titles = new Set();
const descriptions = new Set();
function invalidHref(html) { return /href=["'](?:#|javascript:)["']/i.test(html); }
assert(invalidHref('<a href="#">bad</a>'), 'Invalid-link positive control must fail');
assert(!invalidHref('<a href="/projects/">good</a>'));
for (const file of files) {
  const html = readFileSync(file,'utf8');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/s)?.[1];
  assert(title && !titles.has(title), `Missing/duplicate title: ${file}`); titles.add(title);
  assert(description, `Missing description: ${file}`);
  if (!file.endsWith('404.html')) { assert(!descriptions.has(description), `Duplicate description: ${file}`); descriptions.add(description); }
  assert.equal((html.match(/<h1\b/g) || []).length,1, `Expected one H1: ${file}`);
  assert(html.includes('Skip to content'), `Missing skip link: ${file}`);
  assert(!invalidHref(html), `Dead href: ${file}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const url = decodeURIComponent(match[1]);
    const target = resolve(root,`.${url}`);
    assert(target.startsWith(root), 'Link escapes build');
    assert(existsSync(target) || existsSync(resolve(target,'index.html')), `Broken local link ${url} in ${file}`);
  }
}
const home = readFileSync(resolve(root,'index.html'),'utf8');
for(const text of ['Aashish','Worldlytic','Wickto','tuCO2','ChatModule','Fondos','AddWeb','Scrum']) assert(home.includes(text), `Homepage missing ${text}`);
const contact = readFileSync(resolve(root,'contact/index.html'),'utf8');
assert(contact.includes('mailto:ashunayakme@gmail.com'));
assert(contact.includes('https://www.linkedin.com/in/aashish-nayak'));
const resume = readFileSync(resolve(root,'resume/index.html'),'utf8');
assert(existsSync('public/resume.pdf') ? resume.includes('/resume.pdf') : !resume.includes('href="/resume.pdf"'));
const robots = readFileSync(resolve(root,'robots.txt'),'utf8');
if(home.includes('rel="canonical"')) { assert(robots.includes('Sitemap: https://')); assert(existsSync(resolve(root,'sitemap-index.xml'))); }
else { assert(home.includes('noindex, follow')); assert(robots.includes('Disallow: /')); }
console.log(`PORTFOLIO VERIFIED: ${files.length} HTML pages, ${slugs.length} project routes, metadata and internal assets checked.`);

