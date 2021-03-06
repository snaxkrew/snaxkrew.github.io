var CACHE_NAME = 'snaxkrew-v4';

// Register service worker
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('CACHE_NAME').then(function(cache) {
			cache.addAll([
				'/',
				'/index.html',
				'/snaxkrew/css/snaxkrew.min.css',
				'/snaxkrew/js/lazysizes.min.js',
				'/snaxkrew/fonts/OpenSans-Regular.ttf',
				'/snaxkrew/imgs/grey_background.webp',
				'/snaxkrew/imgs/grey_background.jpg',
				'/snaxkrew/imgs/snaxbanner.webp',
				'/snaxkrew/imgs/snaxbanner.png',
				'/snaxkrew/imgs/games/ar.webp',
				'/snaxkrew/imgs/games/ar.png',
				'/snaxkrew/imgs/games/battlerite.webp',
				'/snaxkrew/imgs/games/battlerite.png',
				'/snaxkrew/imgs/games/divinity2.webp',
				'/snaxkrew/imgs/games/divinity2.png',
				'/snaxkrew/imgs/games/fortnite.webp',
				'/snaxkrew/imgs/games/fortnite.png',
				'/snaxkrew/imgs/games/hots.webp',
				'/snaxkrew/imgs/games/hots.png',
				'/snaxkrew/imgs/games/lol.webp',
				'/snaxkrew/imgs/games/lol.png',
				'/snaxkrew/imgs/games/monster_hunter_world.webp',
				'/snaxkrew/imgs/games/monster_hunter_world.png',
				'/snaxkrew/imgs/games/overwatch.webp',
				'/snaxkrew/imgs/games/overwatch.png',
				'/snaxkrew/imgs/games/pubg.webp',
				'/snaxkrew/imgs/games/pubg.png',
				'/snaxkrew/imgs/games/r6siege.webp',
				'/snaxkrew/imgs/games/r6siege.png',
				'/snaxkrew/imgs/games/rl.webp',
				'/snaxkrew/imgs/games/rl.png',
				'/snaxkrew/imgs/games/tts.webp',
				'/snaxkrew/imgs/games/tts.png',
				'/snaxkrew/imgs/pros/agreement.svg',
				'/snaxkrew/imgs/pros/community.svg',
				'/snaxkrew/imgs/pros/games.svg',
				'/snaxkrew/imgs/pros/night-events.svg',
				'/snaxkrew/imgs/pros/plus-18.svg',
				'/snaxkrew/imgs/pros/premium-badge.svg',
				'/snaxkrew/imgs/ranks/champion.svg',
				'/snaxkrew/imgs/ranks/core.svg',
				'/snaxkrew/imgs/ranks/elite.svg',
				'/snaxkrew/imgs/ranks/initiate.svg',
				'/snaxkrew/imgs/ranks/officer.svg',
				'/snaxkrew/imgs/ranks/recruit.svg',
				'/snaxkrew/imgs/ranks/up-arrow.svg',
				'/snaxkrew/imgs/social/discord-small.svg',
				'/snaxkrew/imgs/social/discord.svg',
				'/snaxkrew/imgs/social/facebook.webp',
				'/snaxkrew/imgs/social/facebook.png',
				'/snaxkrew/imgs/social/twitter.svg',
				'/snaxkrew/imgs/social/youtube.webp',
				'/snaxkrew/imgs/social/youtube.png'
			]);

			// CORS
			// let urlsToPrefetch = [
			// 	'https://platform.twitter.com/widgets.js',
			// 	'https://www.google-analytics.com/analytics.js'
			// ];
			// cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
			//   return new Request(urlToPrefetch, { mode: 'no-cors' });
			// }));

			return;
		})
	);
});

// Update service worker
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Get assets from cache
self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});

