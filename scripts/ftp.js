const folders = [
  'css',
  'js'
];

if (process.env.FTP_SKIP_IMAGES == 0) {
  folders.push('images');
}
