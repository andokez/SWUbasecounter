'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3c9625ff5d64b9a385eb9e9744d93683",
"assets/AssetManifest.bin.json": "edf31b3f34150612e4cdfe94dcd6a12a",
"assets/AssetManifest.json": "b216700cb5446335d0bbb84196792988",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d011db76522282f68c81021b13ddcd54",
"assets/images/25amarillo.jpg": "911ecfc7d36a25351fd800e64361e050",
"assets/images/25amarillo2.png": "4911fd592b576fbb580312cbae4c97de",
"assets/images/25azul.jpg": "209f5312f4a6d59fcb7ef18ce33f31db",
"assets/images/25azul2.png": "263767c5defbae82ac507fb1c29af5a3",
"assets/images/25rojo.jpg": "8991bd871632d60d0842e7f39e284aeb",
"assets/images/25rojo2.png": "9b61cb1b9c1a8093e00ad204a6cf9aa2",
"assets/images/25verde.jpg": "14f0fc1db8ad15c6cc7f5046a6e6dc08",
"assets/images/25verde2.png": "fe3c1b94d597cab59fe0f1a163301231",
"assets/images/30amarillo.jpg": "c1ebd400337bf6b9b10abfe32556447a",
"assets/images/30amarillo2.png": "92a37081a7039eddd3b2c2540d012e6b",
"assets/images/30azul.jpg": "4c149ae1ed3d6763b5aa28974f217a9c",
"assets/images/30azul2.png": "fa415cd9f664cd02336ea90253f2ebd3",
"assets/images/30rojo.jpg": "2fd22d845f877b2f03848f7af76a7def",
"assets/images/30rojo2.png": "20d01b0bf03272ad56050877b231812d",
"assets/images/30verde.jpg": "d31bc28d56f9a5fd6f05d6e53acd36d1",
"assets/images/30verde2.png": "940905ee53b2928cda67f5e8740497f1",
"assets/images/boton1.png": "a97f75d71b9431048df9dd063166ca78",
"assets/images/boton2.png": "ed1cda397316bc7e03f4c9ebe21f5f88",
"assets/images/epicboton.png": "4f15923057848821bb713645c137cbc1",
"assets/images/epicx.png": "72cc4f063d07e3b61aff15d52dff51f9",
"assets/images/fondo.png": "1103d2c8fc32c878922644ef0626f47f",
"assets/images/ini.png": "22d30a02dc3bbe49b4c74f179ab8f044",
"assets/images/iniboton.png": "c2cb92a33541a535b3921bf5275689bb",
"assets/NOTICES": "52a9b265c0560ab8d8960cb5cb94df7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "05a1a436005e9bfb0b819674bbdba07f",
"icons/Icon-512.png": "05a1a436005e9bfb0b819674bbdba07f",
"icons/Icon-maskable-192.png": "05a1a436005e9bfb0b819674bbdba07f",
"icons/Icon-maskable-512%20.png": "05a1a436005e9bfb0b819674bbdba07f",
"index.html": "0a8d58c64acdacaa3da7d46a3f0a8861",
"/": "0a8d58c64acdacaa3da7d46a3f0a8861",
"main.dart.js": "d6aa93ec3795350845d66b9eb10bcead",
"manifest.json": "a48e97b011b172072334c76d24d2a283",
"version.json": "cdf9049cc2397197536bb0b04e0ebe21"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
