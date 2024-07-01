'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d43cec015e729edd056c98a4cd1c07fe",
"assets/AssetManifest.bin.json": "03c93bf0750ab44e7452eb656911e80d",
"assets/AssetManifest.json": "2c605f018a0b5b1cfb0b6250a29246b6",
"assets/assets/icon/adaptive-icon.png": "ca97f0c575d228cd8e2724d719a52dd3",
"assets/assets/icon/icon.png": "13036c04bd039e5777b7d3be2771bdb2",
"assets/assets/icon/install_desktop.png": "5ee201ab015ab85868ef7b2b46fb58c9",
"assets/assets/icon/install_mobile.png": "d95a97a6170b15580aa3049d3bc04871",
"assets/assets/icon/notification-icon.png": "23c1a47106aed95513c47a4d03016778",
"assets/assets/icon/skip-back.png": "dff4a39b1a483bdf69b4cddc3641b425",
"assets/assets/icon/skip-forward.png": "cf363c9633f6173d9d9af895c0e9a68e",
"assets/assets/icon/update.png": "77dff3ad46e51f7583014651bc75a41e",
"assets/assets/images/no-internet.png": "7d8876b0eeab315d1f7de3d464141dad",
"assets/assets/images/SoundForYourHeart.png": "ff35b73b59025177a326f4fc74374489",
"assets/assets/images/splashScreen.png": "badcb863a5ce36c0b3c7efff094006ec",
"assets/assets/team/Alin_Vasilescu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Andreea_Mihalache.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Cosmin_Dinu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Dana_Mercioniu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Daniel_Cirstoveanu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Emanuel_Popa.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Larisa_Badea.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Rebecca_Antonov.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/team/Sabin_Cirstoveanu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "cfde9e362259196217e5d1dcbdc1cb55",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "81977bd60017c204cc4c2f4b4873311a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3619e03e8286cfc4d168c7ff6e17eda9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2035c51026e7c34c4bbb71a1198f8acf",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8b4571078526b417744a1a0d465a269c",
"icons/Icon-192.png": "5af6c7373aff662e061d1bcc77d38cdc",
"icons/Icon-512.png": "e951ec271dba381a80ce01f271728a36",
"icons/Icon-maskable-192.png": "5af6c7373aff662e061d1bcc77d38cdc",
"icons/Icon-maskable-512.png": "e951ec271dba381a80ce01f271728a36",
"index.html": "b2c9c24862f16363b7410cd98e285864",
"/": "b2c9c24862f16363b7410cd98e285864",
"install-icons/add-to-dock.svg": "0ef197d1c701593176c117d7f9db2a89",
"install-icons/add-to-home-screen.svg": "e7e3f7585dbdbdc9c6be65416846f566",
"install-icons/add-to-phone.svg": "d22dab54423717ccb9c8ae6119af1699",
"install-icons/arrow-forward.svg": "e9d4db9234c0f2ac4d4317151e8fd866",
"install-icons/close.svg": "bd8d31d8feb2a162a184229db533a93b",
"install-icons/install-phone.svg": "9dcc81f5637b30fc4463df01f1daf128",
"install-icons/ios-share.svg": "9555399268c9119141c458f3536315d2",
"install-icons/menu-vert.svg": "23da267b3e4a3f7341f45b93ece349ab",
"install-icons/menu.svg": "b236d8984b7c6957b278353b5621bb95",
"main.dart.js": "3aaf6e13ca1fa0d3b4398e11a32cdfcf",
"manifest.json": "c4a28172c82f962aba4ce1aa226578a5",
"screenshots/image1.jpg": "93e3f175ea528097eab9b1f42866f3c1",
"screenshots/image10.jpg": "9bf80431c488a8c18b36f48ac4a78375",
"screenshots/image2.jpg": "7b2fccb2c7ff13285e9e98ea328dd8e2",
"screenshots/image3.jpg": "00e61f864850009a7d5e6acd1a495371",
"screenshots/image4.jpg": "71c7c59f39aca10e4d855b44d2a157fc",
"screenshots/image5.jpg": "a1b860d593b09ec4202a35c131d861a3",
"screenshots/image6.jpg": "6bc3e252df43a40fe610b4d8b73da1fd",
"screenshots/image7.jpg": "1abfa1218f7482f6cbdc34a8c2c3eb93",
"screenshots/image8.jpg": "e3277bc5fd754fd7d16b418c52393587",
"screenshots/image9.jpg": "11790c74dd20b7b1dba43dcae896688d",
"splash/img/dark-1x.png": "52b73da6053af581beee5b123122b72b",
"splash/img/dark-2x.png": "1be5080da7135b51f4c46f4a92a3e423",
"splash/img/dark-3x.png": "0ba6a40a480682667dd4b14a58306890",
"splash/img/dark-4x.png": "d79725059f270dc1e7619a22b887e6fe",
"splash/img/light-1x.png": "52b73da6053af581beee5b123122b72b",
"splash/img/light-2x.png": "1be5080da7135b51f4c46f4a92a3e423",
"splash/img/light-3x.png": "0ba6a40a480682667dd4b14a58306890",
"splash/img/light-4x.png": "d79725059f270dc1e7619a22b887e6fe",
"version.json": "aeaaeb6e5faf18dd38825d6554931be5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
