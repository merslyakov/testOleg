function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        width: '675',
        height: '380',
        videoId: '6bKUwqmuCI8',
        playerVars: {
            controls: 1,
            disablekb: 0,
            loop: 1,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            showinfo: 0,
            autoplay: 1,
            playlist: '6bKUwqmuCI8',
            mute: 1,
        },
        events: {
            'onReady': function (event) {
                setTimeout(onPlayerReady, 2000);
            }
        }
    });
}

function onPlayerReady(event) {
    $('.up_sound,#volume_up').on('click', function () {
        player.unMute();
        $('.up_sound,#volume_up').fadeOut(500);
        console.log('volume_up');
    })
}

setTimeout(function () {
        $('.up_sound,#volume_up').fadeIn(500);
    },
    2500);
// youtubeAPI
if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflN2g023/www-widgetapi.js';a.async = true;var c = document.currentScript;if (c) {var n = c.nonce || c.getAttribute('nonce');if (n) {a.setAttribute('nonce', n);}}var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}


