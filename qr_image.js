const QRCode = require('qrcode');
const fs = require('fs');

// Ye URL Netlify deploy hone ke baad replace karna
const url = "https://your-netlify-site.netlify.app"; 

QRCode.toFile('surprise.png', url, {
  color: {
    dark: '#000000',
    light: '#ffffff'
  }
}, function (err) {
  if (err) throw err;
  console.log('✅ QR code image ban gayi: surprise.png');
});
