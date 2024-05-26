'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f53baa79c683df629018f7728e3c24e4",
"assets/AssetManifest.bin.json": "7c0a2569f25e6bc4f5b976499b17b4b3",
"assets/AssetManifest.json": "f377de7cd7b9be8a10254aeb55fbba66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d011db76522282f68c81021b13ddcd54",
"assets/images/25amarillo1.png": "28fd68c522730e177495a24fc15cb58b",
"assets/images/25amarillo2.png": "e799b1ee7a3705c72498e685309af7c3",
"assets/images/25azul1.png": "a1ef8ccee84fd91522ddc39857415a69",
"assets/images/25azul2.png": "d84b8559aade1065758482933a3beee4",
"assets/images/25rojo1.png": "64373fe57d57977152313adb04c1752d",
"assets/images/25rojo2.png": "ec559d45117aeacddb69b7f0cee8f1b0",
"assets/images/25verde1.png": "31537b0b81ea7e9c16772362c58471fa",
"assets/images/25verde2.png": "e7ec015eb4783e4a61130c258f6d85e3",
"assets/images/30aamarillo1.png": "038dd6c0d0b12df634e9ae28c6c56984",
"assets/images/30aamarillo2.png": "93862da1bd074aeb4d5595e6b069c732",
"assets/images/30aazul1.png": "f5c732f71171225e7fbec61dfb29663d",
"assets/images/30aazul2.png": "c8f437de2c90fa07a39761815ddb6e4a",
"assets/images/30amarillo1.png": "ff446391f8e9a735dac5182ad9d6e7e7",
"assets/images/30amarillo2.png": "fe95240071ba5ce6a3706a115efac511",
"assets/images/30arojo1.png": "df1b09401f618c3ae663b1e1776ad4de",
"assets/images/30arojo2.png": "b3c6b63005af9e26935c8b05f5bfc196",
"assets/images/30averde1.png": "4355ec8fed0053464d17578ed9c86e03",
"assets/images/30averde2.png": "4a3336579a799e0b63eac0eebaf944f1",
"assets/images/30azul1.png": "5e5f1c57d78a6d40ee753ea8405c57cb",
"assets/images/30azul2.png": "7a83d22a77bc92eaa2d3ee542b1153d4",
"assets/images/30rojo1.png": "63fb3df285bde3df1b27aea5b9cde354",
"assets/images/30rojo2.png": "5f41df4c8e0117ce77deb7e47637ba2b",
"assets/images/30verde1.png": "2008ac8217cdf4a6a33226e946b86c86",
"assets/images/30verde2.png": "35294f5568a62e883fc33804814acceb",
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
"index.html": "744bc3385de0cbd304e9ed2dcf7837cb",
"/": "744bc3385de0cbd304e9ed2dcf7837cb",
"main.dart.js": "77d52fdfd26bcd994e93d60d680c8eef",
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
