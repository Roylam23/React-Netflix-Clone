self.addEventListener('install', event => {
    console.log('幫緊你幫緊你…');
});


self.addEventListener('activate', event => {
    console.log('搞掂！');
});


self.addEventListener('fetch', event => {
    console.log('開始!');
});