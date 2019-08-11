/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "32d68918e134c989ad885363c50b31a5"
  },
  {
    "url": "assets/css/0.styles.39776749.css",
    "revision": "014833e9307ee3c4496f4bf096ed5e1f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.77b5917e.js",
    "revision": "11b2c7c71eed40abf7ab5be55b4d74ff"
  },
  {
    "url": "assets/js/10.4b03feda.js",
    "revision": "a5eaa80a84d9b8ffb6a4f128ed877038"
  },
  {
    "url": "assets/js/11.05af1a37.js",
    "revision": "2a0cde9c93767e4dc7d4577fe84bc753"
  },
  {
    "url": "assets/js/12.99ff680a.js",
    "revision": "57525088803f16aa4f2809285ff007e9"
  },
  {
    "url": "assets/js/13.69f759d7.js",
    "revision": "7eb42925b1081dc77d452ffbd1f3142a"
  },
  {
    "url": "assets/js/14.81f310c6.js",
    "revision": "681808824683657e81a28209caca822b"
  },
  {
    "url": "assets/js/15.05ea6294.js",
    "revision": "7cca4a3b9e60c67929be6b1bc2a1b9c1"
  },
  {
    "url": "assets/js/16.092e9ca5.js",
    "revision": "33605f306efe30b2c05774e73bd420a4"
  },
  {
    "url": "assets/js/17.6c1502ef.js",
    "revision": "f3123b1dd874529d0b2e41efd47a859e"
  },
  {
    "url": "assets/js/18.c52ed65e.js",
    "revision": "3016a50c754274374b00050be0396ed9"
  },
  {
    "url": "assets/js/19.dca94fe5.js",
    "revision": "1a692aee5b5689638732e0c3c532f962"
  },
  {
    "url": "assets/js/2.27760cc5.js",
    "revision": "b1628728b6e28782c2d22e11f0723b96"
  },
  {
    "url": "assets/js/20.2ca7978f.js",
    "revision": "f46f16b6e6cd890cb5c5ca718cdde29a"
  },
  {
    "url": "assets/js/21.b4eb13d8.js",
    "revision": "f8616826dd26cfad135fc7f81974d59a"
  },
  {
    "url": "assets/js/22.e1f1cde0.js",
    "revision": "a9437d8336a89184c176ae04b2cafdc1"
  },
  {
    "url": "assets/js/23.8636d71b.js",
    "revision": "99fdb019f4917233d5dd9517bef324e5"
  },
  {
    "url": "assets/js/24.77344953.js",
    "revision": "716799ad0f0c5d3bd41594def89be2e6"
  },
  {
    "url": "assets/js/25.9fa65829.js",
    "revision": "5106b94d6eebd7eaa2991fc0bdcf3ce9"
  },
  {
    "url": "assets/js/26.98bd67af.js",
    "revision": "ee4e4c1448cc561a87299e53295f5f7a"
  },
  {
    "url": "assets/js/27.bdbe8636.js",
    "revision": "effee73bb2725583d7df4804f1803d3c"
  },
  {
    "url": "assets/js/28.6521fefd.js",
    "revision": "b5905cca74506a3d2b043e470f6af60e"
  },
  {
    "url": "assets/js/29.0ea436c6.js",
    "revision": "b9e3f40a84501b3ab10c864f5e0046f1"
  },
  {
    "url": "assets/js/3.411659b1.js",
    "revision": "904b68bdd2534f681a19e9c5d1d1096b"
  },
  {
    "url": "assets/js/30.88152e92.js",
    "revision": "02824e5267152d4c3e157629ba45e22a"
  },
  {
    "url": "assets/js/31.86ff9c68.js",
    "revision": "9f11f307251f29c05124df421b33c293"
  },
  {
    "url": "assets/js/32.279146b1.js",
    "revision": "1e27281a1171b4576c8993659c876480"
  },
  {
    "url": "assets/js/33.1d16bae5.js",
    "revision": "d34d3a240f2bd49318e9bf7323186d38"
  },
  {
    "url": "assets/js/34.b8366e2d.js",
    "revision": "83651af97c007db2357d6b4ae35e7f53"
  },
  {
    "url": "assets/js/35.1f6dbf12.js",
    "revision": "34df77210c048fe602b4914d2bfcbf93"
  },
  {
    "url": "assets/js/36.66147178.js",
    "revision": "2deedab1f643d1150754725306f56764"
  },
  {
    "url": "assets/js/37.6327bec9.js",
    "revision": "88670202bc85e580721b04ce34d84e43"
  },
  {
    "url": "assets/js/38.5b4d2f4b.js",
    "revision": "3d5226c2a768410a1c678767926abe9e"
  },
  {
    "url": "assets/js/39.c635d2bf.js",
    "revision": "99a12c24f61bd1eb9a832ee345797e58"
  },
  {
    "url": "assets/js/40.4d1b2991.js",
    "revision": "32219138763fb1991936bedcda054aba"
  },
  {
    "url": "assets/js/41.3cd64a98.js",
    "revision": "58da867e4888bd2beb5d3187333118de"
  },
  {
    "url": "assets/js/42.b1739bfe.js",
    "revision": "c1c045a58e1ded218621397f5d1a960c"
  },
  {
    "url": "assets/js/43.bcadad00.js",
    "revision": "f4f80410506e5f21a2d035edef314c8c"
  },
  {
    "url": "assets/js/44.1e9c6c2e.js",
    "revision": "49e159bb272a849306d11083ac605a76"
  },
  {
    "url": "assets/js/45.5a3e7445.js",
    "revision": "80e652a84c8c494eab187b86e2c9fec6"
  },
  {
    "url": "assets/js/46.f22e0ce7.js",
    "revision": "1380246d0ce59dbdccdd4542a6baba69"
  },
  {
    "url": "assets/js/5.d71e7982.js",
    "revision": "17510a369bf9ef2f7c9a02afadf96928"
  },
  {
    "url": "assets/js/6.7705e672.js",
    "revision": "5176713b6c2095c84124b93f3bfeb04f"
  },
  {
    "url": "assets/js/7.e28b6c66.js",
    "revision": "51be90b92826a6d308e72028b6d1f7af"
  },
  {
    "url": "assets/js/8.4feaffd1.js",
    "revision": "f73e847754583d899a0b6285f9f28082"
  },
  {
    "url": "assets/js/9.30c2bdb8.js",
    "revision": "7101f6387221177b16f1fbcd94568859"
  },
  {
    "url": "assets/js/app.2de85986.js",
    "revision": "d208558e5ab108fa16953869eecac851"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "2af055954151434138fb650b5374b4b9"
  },
  {
    "url": "contributing/index.html",
    "revision": "4b688a28bed976b45e707ad9b11d301f"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "366e1542ce474f7110259a45f9dbee08"
  },
  {
    "url": "examples/all-features.html",
    "revision": "f9b79399ece1afb75732da76c77d1838"
  },
  {
    "url": "examples/comments.html",
    "revision": "723f335d10f2f1d02e368cf8ed67de8b"
  },
  {
    "url": "examples/each-with.html",
    "revision": "7cd63f8b8944fd6b4d194661e6ee3a1b"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "c046e629c1a770d9755280bd9e455c6e"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "0bf9c0e30da69cc4d589a0807f745939"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "b3b5035ea055d056afca7ff5a1ad8a8e"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "9868a7e20ef1f63c5f69cf756fffb581"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "aae79d5580c98869988293ae6c8b99c8"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "360d52f71089729e49f789d23fdacccc"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "776385a2ae4b5d93a7b877f111d01c1e"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "c7a003b60dece5af064225d6d17f39c3"
  },
  {
    "url": "examples/partials.html",
    "revision": "c476d0140167947388d1b654c894c6b4"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "a46aa0c4cd5dce1466ae17adaa284d97"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "4be4b408ea4041e82fb70983ab4be0c0"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "c99e7b4109a0e42a513e460d0464993b"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "e354e7907c98a11ef30b0d68799aa91a"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "04cfd71ffe9cac78e0184955d6ae9b32"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "f077924d41f0c6601b6a0b967f9626f8"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "550b899687d1a6e892177b45164c4f5f"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "066b6fec38905956f40dbeb2e79f1852"
  },
  {
    "url": "guide/decorators.html",
    "revision": "98407f54e212bb7a252415c32a9d87e8"
  },
  {
    "url": "guide/execution.html",
    "revision": "b13e3c9c7d31808aeddc3c0b017aad13"
  },
  {
    "url": "guide/expressions.html",
    "revision": "5b81f3dae477a7f5514d5e1c6bb7832d"
  },
  {
    "url": "guide/index.html",
    "revision": "099b39286ea731cb1f114295e27e535e"
  },
  {
    "url": "guide/installation.html",
    "revision": "d2315e635c4cc6fcd48dbd6eba9e3b2b"
  },
  {
    "url": "guide/partials.html",
    "revision": "ba6068cb1f2c2537d0f02948958be66f"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "68a99c7d09974cf6d4984f918059b0ae"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "021c96d35a7916814364b51e07bb85f9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b6a0aed6bd43766cb72aed892883e78e"
  },
  {
    "url": "icons/handlebarsjs-icon.svg",
    "revision": "fa8fee4fad92619161a2b667a14511d4"
  },
  {
    "url": "images/favicon.png",
    "revision": "112f1b3a6d29f9cc655473c67bcad303"
  },
  {
    "url": "images/handlebars_logo.png",
    "revision": "bc9e95fc4a3ea4998503a65683cdd37d"
  },
  {
    "url": "images/handlebars-devswag.png",
    "revision": "9f39cc93300584f7454c24825cc7ce92"
  },
  {
    "url": "index.html",
    "revision": "8b5f540a0e4e509e00c2ad774d9c34a4"
  },
  {
    "url": "topics/installation.html",
    "revision": "da777639b7a5e09a4def78a3a140a9be"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})