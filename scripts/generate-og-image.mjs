import sharp from 'sharp';
import path from 'node:path';

const width = 1200;
const height = 630;

// High-fidelity SVG banner reflecting Aashish Nayak's personal brand & styling
const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(96,97,80,0.12)" stroke-width="1.2"/>
    </pattern>
    <filter id="shadow" x="-5%" y="-5%" width="115%" height="115%">
      <feDropShadow dx="4" dy="6" stdDeviation="0" flood-color="#242522" flood-opacity="1"/>
    </filter>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#242522" flood-opacity="0.18"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#faf9f5"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>

  <!-- Border Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#242522" stroke-width="3"/>

  <!-- Top Wordmark & Status -->
  <text x="64" y="86" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="#60615a" letter-spacing="2">// AASHISH NAYAK • PORTFOLIO</text>
  <rect x="870" y="60" width="265" height="38" rx="19" fill="#d9edc4" stroke="#242522" stroke-width="2"/>
  <circle cx="890" cy="79" r="6" fill="#16a34a"/>
  <text x="906" y="84" font-family="'Courier New', monospace" font-size="14" font-weight="bold" fill="#242522">OPEN FOR ROLES &amp; CLIENTS</text>

  <!-- Hero Name -->
  <text x="64" y="210" font-family="'Arial Black', Impact, sans-serif" font-size="88" font-weight="900" fill="#aa1e2c" letter-spacing="-1">Aashish Nayak</text>

  <!-- Tagline / Value Proposition -->
  <text x="64" y="275" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#242522">Software Engineer • Backend Architecture &amp; Full-Stack Products</text>

  <!-- Description paragraph -->
  <text x="64" y="335" font-family="Arial, sans-serif" font-size="22" fill="#505449">5+ years building robust Laravel backends, payment &amp; insurance integrations,</text>
  <text x="64" y="370" font-family="Arial, sans-serif" font-size="22" fill="#505449">real-time applications, and production AI engineering workflows.</text>

  <!-- Badges / Tech Highlights -->
  <!-- PHP / Laravel -->
  <g transform="translate(64, 430)">
    <rect x="0" y="0" width="175" height="46" rx="23" fill="#ffe55b" stroke="#242522" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="87" y="29" font-family="Arial, sans-serif" font-size="19" font-weight="bold" fill="#242522" text-anchor="middle">PHP / Laravel</text>
  </g>
  <!-- Full-Stack Web -->
  <g transform="translate(260, 430)">
    <rect x="0" y="0" width="190" height="46" rx="23" fill="#cbe5f5" stroke="#242522" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="95" y="29" font-family="Arial, sans-serif" font-size="19" font-weight="bold" fill="#242522" text-anchor="middle">Vue.js • React • TS</text>
  </g>
  <!-- APIs & SQL -->
  <g transform="translate(470, 430)">
    <rect x="0" y="0" width="180" height="46" rx="23" fill="#f5cdd6" stroke="#242522" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="90" y="29" font-family="Arial, sans-serif" font-size="19" font-weight="bold" fill="#242522" text-anchor="middle">REST APIs • SQL</text>
  </g>
  <!-- AI Integrations -->
  <g transform="translate(670, 430)">
    <rect x="0" y="0" width="180" height="46" rx="23" fill="#d9edc4" stroke="#242522" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="90" y="29" font-family="Arial, sans-serif" font-size="19" font-weight="bold" fill="#242522" text-anchor="middle">AI &amp; LLM Systems</text>
  </g>

  <!-- Location & URL Footer -->
  <g transform="translate(64, 545)">
    <text x="0" y="0" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="#60615a">📍 Jaipur, India (Remote Available)</text>
    <text x="1070" y="0" font-family="'Courier New', monospace" font-size="22" font-weight="bold" fill="#aa1e2c" text-anchor="end">aashish-nyk.vercel.app</text>
  </g>
</svg>
`;

async function main() {
  const outPath = path.resolve('public/images/og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(outPath);
  console.log('OG image successfully generated at:', outPath);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
