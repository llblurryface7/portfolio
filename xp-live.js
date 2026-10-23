/* Recent experiments: the deck (Deal · scroll), Big art cards, the Zoom detail */
(function(){ var sec = document.getElementById('experiments'); if (!sec) return; var old = sec.querySelector('.xq-w'); if (old) old.remove();
  sec.setAttribute('data-lab', 'deal'); sec.setAttribute('data-face', 'square'); var sh = sec.querySelector('.shelf');
  sh.insertAdjacentHTML('afterend', "<div class=\"lab-w\"><div class=\"lv lv-deal\" data-v=\"deal\"><div class=\"ld-stage\"><div class=\"xq-c lc \" data-k=\"0\" style=\"--c:#EE7A2B\" tabindex=\"0\" role=\"link\" aria-label=\"Tank game: A multiplayer tank game, built end to end\"><i class=\"xq-sh\" aria-hidden=\"true\"></i><span class=\"xq-tilt\"><span class=\"xq-flip\"><span class=\"xq-f xq-front\"><span class=\"xq-art\"><img src=\"assets/exp/tank-lobby.jpg\" alt=\"\" loading=\"lazy\" style=\"object-position:50% 50%\"><i class=\"xk-holo\"></i></span><span class=\"xq-nm\">Tank game</span><span class=\"gc-b\"><span class=\"gc-top\"><b>Tank game</b><span class=\"xk-gem\" aria-hidden=\"true\"><i></i></span></span><span class=\"gc-text\">A multiplayer tank game, built end to end</span><span class=\"gc-foot\"><span class=\"gc-type\">Game</span><span class=\"gc-go\" aria-hidden=\"true\">Open<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></span></span><i class=\"xk-chr\"></i><i class=\"xk-foil\"></i><i class=\"xk-glit\"></i><i class=\"xk-glare\"></i></span><span class=\"xq-f xq-back\"><i class=\"xk-chr\"></i></span></span></span></div><div class=\"xq-c lc \" data-k=\"1\" style=\"--c:#35C9A6\" tabindex=\"0\" role=\"link\" aria-label=\"Game Radar: Daily game-deal posts, and I approve every one\"><i class=\"xq-sh\" aria-hidden=\"true\"></i><span class=\"xq-tilt\"><span class=\"xq-flip\"><span class=\"xq-f xq-front\"><span class=\"xq-art\"><img src=\"assets/exp/game-radar.jpg\" alt=\"\" loading=\"lazy\" style=\"object-position:50% 50%\"><i class=\"xk-holo\"></i></span><span class=\"xq-nm\">Game Radar</span><span class=\"gc-b\"><span class=\"gc-top\"><b>Game Radar</b><span class=\"xk-gem\" aria-hidden=\"true\"><i></i></span></span><span class=\"gc-text\">Daily game-deal posts, and I approve every one</span><span class=\"gc-foot\"><span class=\"gc-type\">Desktop app</span><span class=\"gc-go\" aria-hidden=\"true\">Open<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></span></span><i class=\"xk-chr\"></i><i class=\"xk-foil\"></i><i class=\"xk-glit\"></i><i class=\"xk-glare\"></i></span><span class=\"xq-f xq-back\"><i class=\"xk-chr\"></i></span></span></span></div><div class=\"xq-c lc \" data-k=\"2\" style=\"--c:#4C7DF0\" tabindex=\"0\" role=\"link\" aria-label=\"Venti: Fan control for the Mac that feels native\"><i class=\"xq-sh\" aria-hidden=\"true\"></i><span class=\"xq-tilt\"><span class=\"xq-flip\"><span class=\"xq-f xq-front\"><span class=\"xq-art\"><img src=\"assets/exp/venti.jpg\" alt=\"\" loading=\"lazy\" style=\"object-position:50% 0%\"><i class=\"xk-holo\"></i></span><span class=\"xq-nm\">Venti</span><span class=\"gc-b\"><span class=\"gc-top\"><b>Venti</b><span class=\"xk-gem\" aria-hidden=\"true\"><i></i></span></span><span class=\"gc-text\">Fan control for the Mac that feels native</span><span class=\"gc-foot\"><span class=\"gc-type\">Mac app</span><span class=\"gc-go\" aria-hidden=\"true\">Open<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></span></span><i class=\"xk-chr\"></i><i class=\"xk-foil\"></i><i class=\"xk-glit\"></i><i class=\"xk-glare\"></i></span><span class=\"xq-f xq-back\"><i class=\"xk-chr\"></i></span></span></span></div><div class=\"xq-c lc \" data-k=\"3\" style=\"--c:#E7C13A\" tabindex=\"0\" role=\"link\" aria-label=\"Garage sale: My move-out sale, run by three sellers\"><i class=\"xq-sh\" aria-hidden=\"true\"></i><span class=\"xq-tilt\"><span class=\"xq-flip\"><span class=\"xq-f xq-front\"><span class=\"xq-art\"><img src=\"assets/exp/garage-sale.jpg\" alt=\"\" loading=\"lazy\" style=\"object-position:50% 50%\"><i class=\"xk-holo\"></i></span><span class=\"xq-nm\">Garage sale</span><span class=\"gc-b\"><span class=\"gc-top\"><b>Garage sale</b><span class=\"xk-gem\" aria-hidden=\"true\"><i></i></span></span><span class=\"gc-text\">My move-out sale, run by three sellers</span><span class=\"gc-foot\"><span class=\"gc-type\">Website</span><span class=\"gc-go\" aria-hidden=\"true\">Open<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></span></span><i class=\"xk-chr\"></i><i class=\"xk-foil\"></i><i class=\"xk-glit\"></i><i class=\"xk-glare\"></i></span><span class=\"xq-f xq-back\"><i class=\"xk-chr\"></i></span></span></span></div></div></div><p class=\"lab-cap\" aria-live=\"polite\"><b></b><span></span></p></div>");
  document.body.insertAdjacentHTML('beforeend', "<template id=\"xpt-tank\"><article class=\"xpd\" data-id=\"tank\" style=\"--xc:#EE7A2B;--hpos:50% 50%\"><div class=\"xpd-card\"><div class=\"xq-c lc big\" data-k=\"0\" style=\"--c:#EE7A2B\" aria-hidden=\"true\" aria-label=\"Tank game: A multiplayer tank game, built end to end\"><i class=\"xq-sh\" aria-hidden=\"true\"></i><span class=\"xq-tilt\"><span class=\"xq-flip\"><span class=\"xq-f xq-front\"><span class=\"xq-art\"><img src=\"assets/exp/tank-lobby.jpg\" alt=\"\" loading=\"lazy\" style=\"object-position:50% 50%\"><i class=\"xk-holo\"></i></span><span class=\"xq-nm\">Tank game</span><span class=\"gc-b\"><span class=\"gc-top\"><b>Tank game</b><span class=\"xk-gem\" aria-hidden=\"true\"><i></i></span></span><span class=\"gc-text\">A multiplayer tank game, built end to end</span><span class=\"gc-foot\"><span class=\"gc-type\">Game</span><span class=\"gc-go\" aria-hidden=\"true\">Open<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></span></span><i class=\"xk-chr\"></i><i class=\"xk-foil\"></i><i class=\"xk-glit\"></i><i class=\"xk-glare\"></i></span><span class=\"xq-f xq-back\"><i class=\"xk-chr\"></i></span></span></span></div></div><div class=\"xpd-text\"><header class=\"xpd-head\"><h2 class=\"xpd-ttl\">Tank game</h2><p class=\"xpd-line\">A multiplayer tank game, built end to end</p><div class=\"xpd-row\"><div class=\"xpd-meta\"><span>2026</span><span>Game</span></div><span class=\"xpd-act\"><button class=\"key\" type=\"button\" data-pop=\"play\" aria-haspopup=\"dialog\" aria-expanded=\"false\"><span class=\"metal\"></span><span class=\"face\">Play<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></button></span></div></header><dl class=\"xpd-lines\"><div><dt>Why<span class=\"xp-tbc\">TO CONFIRM</span></dt><dd>A game for evenings with friends, with an interface I’d enjoy using myself.</dd></div><div><dt>How it works</dt><dd>You build a tank from a gun, a hull and a paint, then pick a team and a map.</dd></div><div><dt>Decision<span class=\"xp-tbc\">TO CONFIRM</span></dt><dd>Picking parts had to be quick, so each part shows what it adds and what it costs.</dd></div></dl></div><figure class=\"xpd-hero\"><img src=\"assets/exp/tank-lobby.jpg\" alt=\"The tank game lobby: part charts, the tank, teams and map\"></figure><div class=\"xpd-stills\"><div class=\"xpd-srow\"><figure class=\"xpd-s\"><img src=\"assets/exp/x/tk-2.jpg\" alt=\"Three of the eight guns, the picked one marked in orange\" loading=\"lazy\"></figure><figure class=\"xpd-s\"><img src=\"assets/exp/x/tk-3.jpg\" alt=\"The two teams, each player ready or still choosing\" loading=\"lazy\"></figure><figure class=\"xpd-s\"><span class=\"xpd-ph\">Lobby to first shot · 10–20 s loop</span></figure></div></div></article></template><template id=\"xpt-game-radar\"><article class=\"xpd\" data-id=\"game-radar\" style=\"--xc:#35C9A6;--hpos:50% 50%\"><div class=\"xpd-card\"><div class=\"xq-c lc big\" data-k=\"1\" style=\"--c:#35C9A6\" aria-hidden=\"true\" aria-label=\"Game Radar: Daily game-deal posts, and I approve every one\"><i class=\"xq-sh\" aria-hidden=\"true\"></i><span class=\"xq-tilt\"><span class=\"xq-flip\"><span class=\"xq-f xq-front\"><span class=\"xq-art\"><img src=\"assets/exp/game-radar.jpg\" alt=\"\" loading=\"lazy\" style=\"object-position:50% 50%\"><i class=\"xk-holo\"></i></span><span class=\"xq-nm\">Game Radar</span><span class=\"gc-b\"><span class=\"gc-top\"><b>Game Radar</b><span class=\"xk-gem\" aria-hidden=\"true\"><i></i></span></span><span class=\"gc-text\">Daily game-deal posts, and I approve every one</span><span class=\"gc-foot\"><span class=\"gc-type\">Desktop app</span><span class=\"gc-go\" aria-hidden=\"true\">Open<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></span></span><i class=\"xk-chr\"></i><i class=\"xk-foil\"></i><i class=\"xk-glit\"></i><i class=\"xk-glare\"></i></span><span class=\"xq-f xq-back\"><i class=\"xk-chr\"></i></span></span></span></div></div><div class=\"xpd-text\"><header class=\"xpd-head\"><h2 class=\"xpd-ttl\">Game Radar</h2><p class=\"xpd-line\">Daily game-deal posts, and I approve every one</p><div class=\"xpd-row\"><div class=\"xpd-meta\"><span>2026</span><span>Desktop app</span></div><span class=\"xpd-act\"><a class=\"key\" href=\"https://t.me/gameradar_ua\" target=\"_blank\" rel=\"noopener\"><span class=\"metal\"></span><span class=\"face\">Open channel<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></a></span></div></header><dl class=\"xpd-lines\"><div><dt>Why</dt><dd>I run a Telegram channel about game deals and wanted a post every day without writing each one.</dd></div><div><dt>How it works</dt><dd>It finds the day’s deals, drafts the post in Ukrainian, renders the cover and schedules the week.</dd></div><div><dt>Decision</dt><dd>Nothing posts until I approve it, and it warns me when the week runs empty.</dd></div></dl></div><figure class=\"xpd-hero\"><img src=\"assets/exp/game-radar.jpg\" alt=\"Game Radar: the week of scheduled deal posts above the radar that finds them\"></figure><div class=\"xpd-stills\"><div class=\"xpd-srow\"><figure class=\"xpd-s\"><img src=\"assets/exp/x/gr-1.jpg\" alt=\"Three days of the week, each post approved and scheduled\" loading=\"lazy\"></figure><figure class=\"xpd-s\"><img src=\"assets/exp/x/gr-3.jpg\" alt=\"The history dial: 134 posts so far\" loading=\"lazy\"></figure><figure class=\"xpd-s\"><span class=\"xpd-ph\">Approving a post · 10–20 s loop</span></figure></div></div></article></template><template id=\"xpt-venti\"><article class=\"xpd\" data-id=\"venti\" style=\"--xc:#4C7DF0;--hpos:50% 0%\"><div class=\"xpd-card\"><div class=\"xq-c lc big\" data-k=\"2\" style=\"--c:#4C7DF0\" aria-hidden=\"true\" aria-label=\"Venti: Fan control for the Mac that feels native\"><i class=\"xq-sh\" aria-hidden=\"true\"></i><span class=\"xq-tilt\"><span class=\"xq-flip\"><span class=\"xq-f xq-front\"><span class=\"xq-art\"><img src=\"assets/exp/venti.jpg\" alt=\"\" loading=\"lazy\" style=\"object-position:50% 0%\"><i class=\"xk-holo\"></i></span><span class=\"xq-nm\">Venti</span><span class=\"gc-b\"><span class=\"gc-top\"><b>Venti</b><span class=\"xk-gem\" aria-hidden=\"true\"><i></i></span></span><span class=\"gc-text\">Fan control for the Mac that feels native</span><span class=\"gc-foot\"><span class=\"gc-type\">Mac app</span><span class=\"gc-go\" aria-hidden=\"true\">Open<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></span></span><i class=\"xk-chr\"></i><i class=\"xk-foil\"></i><i class=\"xk-glit\"></i><i class=\"xk-glare\"></i></span><span class=\"xq-f xq-back\"><i class=\"xk-chr\"></i></span></span></span></div></div><div class=\"xpd-text\"><header class=\"xpd-head\"><h2 class=\"xpd-ttl\">Venti</h2><p class=\"xpd-line\">Fan control for the Mac that feels native</p><div class=\"xpd-row\"><div class=\"xpd-meta\"><span>2026</span><span>Mac app</span></div><span class=\"xpd-act\"><a class=\"key\" href=\"#\"><span class=\"metal\"></span><span class=\"face\">Download<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></a><span class=\"xp-tbc\">TO CONFIRM</span></span></div></header><dl class=\"xpd-lines\"><div><dt>Why</dt><dd>My Mac runs hot, and the fan app I used couldn’t hold an exact speed.</dd></div><div><dt>How it works</dt><dd>Auto, Boost and Manual sit in the menu bar, with the temperature always in view.</dd></div><div><dt>Decision</dt><dd>Manual hands control back to Auto after a time you set, so the fan is never left loud.</dd></div></dl></div><figure class=\"xpd-hero\"><img src=\"assets/exp/venti.jpg\" alt=\"Venti: the menu-bar panel in Manual mode, fan set to 3,800 rpm\"></figure><div class=\"xpd-stills\"><div class=\"xpd-srow\"><figure class=\"xpd-s\"><img src=\"assets/exp/x/vn-1.jpg\" alt=\"The temperature in the menu bar and at the top of the panel\" loading=\"lazy\"></figure><figure class=\"xpd-s\"><img src=\"assets/exp/x/vn-2.jpg\" alt=\"Manual mode: an exact speed and when it goes back to Auto\" loading=\"lazy\"></figure><figure class=\"xpd-s\"><span class=\"xpd-ph\">Auto to Manual and back · 10–20 s loop</span></figure></div></div></article></template><template id=\"xpt-garage-sale\"><article class=\"xpd\" data-id=\"garage-sale\" style=\"--xc:#E7C13A;--hpos:50% 50%\"><div class=\"xpd-card\"><div class=\"xq-c lc big\" data-k=\"3\" style=\"--c:#E7C13A\" aria-hidden=\"true\" aria-label=\"Garage sale: My move-out sale, run by three sellers\"><i class=\"xq-sh\" aria-hidden=\"true\"></i><span class=\"xq-tilt\"><span class=\"xq-flip\"><span class=\"xq-f xq-front\"><span class=\"xq-art\"><img src=\"assets/exp/garage-sale.jpg\" alt=\"\" loading=\"lazy\" style=\"object-position:50% 50%\"><i class=\"xk-holo\"></i></span><span class=\"xq-nm\">Garage sale</span><span class=\"gc-b\"><span class=\"gc-top\"><b>Garage sale</b><span class=\"xk-gem\" aria-hidden=\"true\"><i></i></span></span><span class=\"gc-text\">My move-out sale, run by three sellers</span><span class=\"gc-foot\"><span class=\"gc-type\">Website</span><span class=\"gc-go\" aria-hidden=\"true\">Open<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></span></span><i class=\"xk-chr\"></i><i class=\"xk-foil\"></i><i class=\"xk-glit\"></i><i class=\"xk-glare\"></i></span><span class=\"xq-f xq-back\"><i class=\"xk-chr\"></i></span></span></span></div></div><div class=\"xpd-text\"><header class=\"xpd-head\"><h2 class=\"xpd-ttl\">Garage sale</h2><p class=\"xpd-line\">My move-out sale, run by three sellers</p><div class=\"xpd-row\"><div class=\"xpd-meta\"><span>2026</span><span>Website</span></div><span class=\"xpd-act\"><a class=\"key\" href=\"https://llblurryface7.github.io/garazh-sale/\" target=\"_blank\" rel=\"noopener\"><span class=\"metal\"></span><span class=\"face\">Open site<span class=\"arrows\" aria-hidden=\"true\"><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg><svg viewBox=\"0 0 14 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 10.5 10.5 3.5M5 3.5h5.5V9\"/></svg></span></span></a></span></div></header><dl class=\"xpd-lines\"><div><dt>Why</dt><dd>I was moving and wanted my things to go to people I know, not strangers.</dd></div><div><dt>How it works</dt><dd>Three sellers stand by a row of garages, each with a rug of my things to reserve.</dd></div><div><dt>Decision</dt><dd>No product grid. You browse one seller at a time, like at a real market.</dd></div></dl></div><figure class=\"xpd-hero\"><img src=\"assets/exp/garage-sale.jpg\" alt=\"Garage sale: three market sellers by old garages, each with a rug of things for sale\"></figure><div class=\"xpd-stills\"><div class=\"xpd-srow\"><figure class=\"xpd-s\"><img src=\"assets/exp/x/gs-1.jpg\" alt=\"Nadiya’s rug: books and prints\" loading=\"lazy\"></figure><figure class=\"xpd-s\"><img src=\"assets/exp/x/gs-2.jpg\" alt=\"Mykola’s rug: the tech\" loading=\"lazy\"></figure><figure class=\"xpd-s\"><span class=\"xpd-ph\">Walking from seller to seller · 10–20 s loop</span></figure></div></div></article></template><div class=\"xpop\" id=\"xpop-play\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"xpop-play-t\" hidden><p class=\"xpop-t\" id=\"xpop-play-t\">Wanna play?</p><p class=\"xpop-b\">It only runs on my computer for now, and it’s still in testing. Write to me and we’ll have a battle.</p><div class=\"xpop-m\"><a href=\"mailto:vmarchenko.design@gmail.com?subject=Let%E2%80%99s%20have%20a%20battle\">vmarchenko.design@gmail.com</a><button type=\"button\" class=\"xpop-c\" data-copy=\"vmarchenko.design@gmail.com\" aria-label=\"Copy email address\"><svg class=\"c1\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5.5\" y=\"5.5\" width=\"8\" height=\"8\" rx=\"1.6\"/><path d=\"M10.5 5.5V3.9c0-.8-.6-1.4-1.4-1.4H3.9c-.8 0-1.4.6-1.4 1.4v5.2c0 .8.6 1.4 1.4 1.4h1.6\"/></svg><svg class=\"c2\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m3.5 8.5 3 3 6-6.5\"/></svg></button></div></div>"); })();
window.XP = [{"id": "tank", "name": "Tank game", "line": "A multiplayer tank game, built end to end", "col": "#EE7A2B", "hero": "assets/exp/tank-lobby.jpg"}, {"id": "game-radar", "name": "Game Radar", "line": "Daily game-deal posts, and I approve every one", "col": "#35C9A6", "hero": "assets/exp/game-radar.jpg"}, {"id": "venti", "name": "Venti", "line": "Fan control for the Mac that feels native", "col": "#4C7DF0", "hero": "assets/exp/venti.jpg"}, {"id": "garage-sale", "name": "Garage sale", "line": "My move-out sale, run by three sellers", "col": "#E7C13A", "hero": "assets/exp/garage-sale.jpg"}];
/* Foil: the card under the pointer leans toward it and its foil and glare follow; the card in focus drifts a little at rest.
   One loop for every card; it sleeps when nothing moves. */
(function(){
  if (window.Foil) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, K = ['px', 'py', 'rx', 'ry', 'h'], all = [], raf = 0, t0 = performance.now();
  function clamp(x, a, b){ return Math.max(a, Math.min(b, x)); }
  (function(){ var root = document.documentElement; if (getComputedStyle(root).getPropertyValue('--glit')) return; var c = document.createElement('canvas'), N = 220; c.width = c.height = N; var g = c.getContext('2d'); g.fillStyle = '#000'; g.fillRect(0, 0, N, N);
    var seed = 7; function rnd(){ seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    for (var i = 0; i < 900; i++) { var x = rnd() * N, y = rnd() * N, rr = rnd() < .9 ? .5 + rnd() * .7 : 1 + rnd() * 1.2, l = 140 + rnd() * 115; g.fillStyle = 'rgb(' + l + ',' + l + ',' + l + ')'; g.beginPath(); g.arc(x, y, rr, 0, Math.PI * 2); g.fill(); }
    try { root.style.setProperty('--glit', 'url(' + c.toDataURL('image/png') + ')'); } catch (e) {} })();
  function rest(S){ return {px: .5, py: .5, rx: 0, ry: 0, h: 0}; }
  function step(now){ raf = 0; var t = (now - t0) / 1000, more = false;
    all.forEach(function(S){ var g = S.tg;
      if (!S.hov) g = S.idle && !reduce ? {px: .5 + .3 * Math.sin(t * .5 + S.ph), py: .45 + .18 * Math.cos(t * .37 + S.ph), rx: 2 * Math.cos(t * .37 + S.ph), ry: 3 * Math.sin(t * .5 + S.ph), h: .32 + .1 * Math.sin(t * .8)} : rest();
      K.forEach(function(k){ var d = g[k] - S.v[k]; S.sp[k] = (S.sp[k] + d * .12) * .75; S.v[k] += S.sp[k]; if (Math.abs(d) > .0006 || Math.abs(S.sp[k]) > .0006) more = true; });
      var y = S.el.style; y.setProperty('--px', S.v.px.toFixed(4)); y.setProperty('--py', S.v.py.toFixed(4)); y.setProperty('--rx', S.v.rx.toFixed(3)); y.setProperty('--ry', S.v.ry.toFixed(3)); y.setProperty('--h', clamp(S.v.h, 0, 1).toFixed(3));
      if (S.idle && !reduce && S.vis) more = true; });
    if (more) raf = requestAnimationFrame(step); }
  function kick(){ if (!raf) raf = requestAnimationFrame(step); }
  function attach(el){ if (el.__foil) return el.__foil; var S = {el: el, v: rest(), sp: {px: 0, py: 0, rx: 0, ry: 0, h: 0}, tg: rest(), hov: false, idle: false, vis: true, ph: Math.random() * 6};
    el.__foil = S; all.push(S);
    el.addEventListener('pointermove', function(e){ if (e.pointerType === 'touch' || reduce) return; var r = el.getBoundingClientRect(), x = clamp((e.clientX - r.left) / r.width, 0, 1), y = clamp((e.clientY - r.top) / r.height, 0, 1);
      S.hov = true; S.tg = {px: x, py: y, rx: (.5 - y) * 12, ry: (x - .5) * 16, h: clamp(.5 + Math.hypot(x - .5, y - .5) * 1.1, 0, 1)}; kick(); });
    el.addEventListener('pointerleave', function(){ S.hov = false; kick(); });
    if (window.IntersectionObserver) new IntersectionObserver(function(es){ S.vis = es[0].isIntersecting; if (S.vis) kick(); }).observe(el);
    return S; }
  window.Foil = {attach: attach, idle: function(el, on){ var S = attach(el); S.idle = !!on; kick(); }, kick: kick};
  /* cards on experiment pages and in the zoom view */
  function scan(){ [].forEach.call(document.querySelectorAll('.xpd-card .xq-c'), function(c){ window.Foil.idle(c, true); }); }
  if (document.readyState !== 'loading') scan(); else document.addEventListener('DOMContentLoaded', scan);
})();

;
/* Experiments Lab: designs for the Recent experiments section, and the ways an experiment opens. */
(function(){
  var D = window.XP, ids = D.map(function(e){ return e.id; }), N = D.length;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  var SECT = ['deal', 'dealt', 'spread', 'slot', 'dock', 'belt', 'hand', 'queue', 'pile', 'lift', 'list'], OPEN = ['reel', 'split', 'board', 'cardp', 'sheet', 'panel', 'theatre', 'zoom', 'unfold'];
  var PAGE = {reel: 1, split: 1, board: 1, cardp: 1}, CARDY = {cardp: 1, zoom: 1};
  function $(s, r){ return (r || document).querySelector(s); }
  function $$(s, r){ return [].slice.call((r || document).querySelectorAll(s)); }
  function clamp(x, a, b){ return Math.max(a, Math.min(b, x)); }
  function get(k, d){ try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function put(k, v){ try { localStorage.setItem(k, v); } catch (e) {} }
  var sec = $('#experiments'), w = $('.lab-w', sec), cap = $('.lab-cap', sec);
  var lab = 'deal', v = 'zoom'; if (SECT.indexOf(lab) < 0) lab = 'deal'; if (OPEN.indexOf(v) < 0) v = 'zoom';
  var cur = 0, strip = false;

  /* ---------- the caption: the name and one line of the experiment in focus ---------- */
  var capT = 0;
  function caption(i){ var b = $('b', cap), s = $('span', cap); if (b.textContent === D[i].name) return;
    if (reduce || !b.textContent) { b.textContent = D[i].name; s.textContent = D[i].line; return; }
    cap.classList.add('swap'); clearTimeout(capT); capT = setTimeout(function(){ b.textContent = D[i].name; s.textContent = D[i].line; cap.classList.remove('swap'); }, 180); }

  /* ---------- which cards belong to the design on show ---------- */
  function view(){ return lab === 'dealt' ? 'deal' : lab; }
  function cards(){ var lv = $('.lv[data-v="' + view() + '"]', w); return lv ? $$('.lc:not(.dup)', lv) : []; }
  function allCards(){ var lv = $('.lv[data-v="' + view() + '"]', w); return lv ? $$('.lc', lv) : []; }
  function focus(i, quiet){ cur = i; allCards().forEach(function(c){ var on = i >= 0 && +c.dataset.k === i; c.classList.toggle('on', on); if (window.Foil) window.Foil.idle(c, on && !c.classList.contains('dup')); });
    if (i >= 0) caption(i); if (E[view()] && E[view()].focus) E[view()].focus(i, quiet); }

  /* ---------- the review bar ---------- */
  var bar = document.createElement('nav'); bar.className = 'xpv'; bar.setAttribute('aria-label', 'Study');
  var SN = {deal: 'Deal · scroll', dealt: 'Deal · arrive', spread: 'Spread', slot: 'Slot', dock: 'Dock', belt: 'Belt', hand: 'Hand', queue: 'Queue', pile: 'Pile', lift: 'Lift', list: 'List'};
  var ON = {reel: 'Reel', split: 'Split', board: 'Overlap', cardp: 'Card', sheet: 'Sheet', panel: 'Panel', theatre: 'Theatre', zoom: 'Zoom', unfold: 'Unfold'};
  var FACES = ['classic', 'square', 'corner'], FN = {classic: 'Classic', square: 'Big art', corner: 'Arrow up top'}, face = 'square'; if (FACES.indexOf(face) < 0) face = 'classic';
  bar.innerHTML = '<b>Card</b>' + FACES.map(function(k){ return '<button data-f="' + k + '">' + FN[k] + '</button>'; }).join('') + '<i></i>' + '<b>Section</b>' + SECT.map(function(k){ return '<button data-s="' + k + '">' + SN[k] + '</button>'; }).join('') + '<i></i>'
    + '<b>Page</b>' + ['reel', 'split', 'board', 'cardp'].map(function(k){ return '<button data-o="' + k + '">' + ON[k] + '</button>'; }).join('') + '<i></i>'
    + '<b>On home</b>' + ['sheet', 'panel', 'theatre', 'zoom', 'unfold'].map(function(k){ return '<button data-o="' + k + '">' + ON[k] + '</button>'; }).join('');
  
  function setFace(x){ face = x; sec.dataset.face = x; document.documentElement.dataset.face = x; $$('[data-face]').forEach(function(el){ el.dataset.face = x; }); $$('button[data-f]', bar).forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.f === x)); }); }
  function mark(){ $$('button[data-s]', bar).forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.s === lab)); }); $$('button[data-o]', bar).forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.o === v)); }); }
  bar.addEventListener('click', function(e){ var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.f) { setFace(b.dataset.f); return; }
    if (b.dataset.s) setLab(b.dataset.s); else { closeNow(); foldUp(); v = b.dataset.o; put('lab-o', v); mark(); }
    var r = sec.getBoundingClientRect(); if (b.dataset.s && (r.bottom < 0 || r.top > innerHeight * .5)) scrollTo({top: scrollY + r.top - (lab === 'deal' ? innerHeight * .7 : 80), behavior: reduce ? 'auto' : 'smooth'}); });

  function setLab(x){ var old = view(); lab = x; put('lab-s', x); sec.dataset.lab = x; mark();
    if (x === 'lift' || x === 'list') { if (window.xsSet) window.xsSet(x); sec.dataset.xs = x; }
    if (E[old] && E[old].off) E[old].off();
    if (E[view()] && E[view()].on) E[view()].on();
    layout(); if (E[view()]) focus(view() === 'deal' && !strip ? -1 : Math.max(cur, 0), true); }

  /* ======================= the section designs ======================= */
  var E = {};
  function W(){ return w.clientWidth; }

  /* Deal: a packed deck sits right after the barrel; as you scroll on, it deals itself into a row.
     Deal · arrive does the same once, when the section comes into view. */
  E.deal = !$('.lv-deal', w) ? {} : (function(){ var lv = $('.lv-deal', w), st = $('.ld-stage', lv), cs = $$('.lc', lv), cw = 0, gap = 22, slots = [], sx = 0, p = 0, raf = 0, played = false, t0 = 0, armed = false;
    function size(){ var Wd = st.clientWidth; cw = Math.min(250, (Wd - 3 * gap) / 4); var tot = cw * 4 + gap * 3, l = (Wd - tot) / 2;
      slots = cs.map(function(c, i){ return l + i * (cw + gap); }); sx = (Wd - cw) / 2; lv.style.setProperty('--cw', cw.toFixed(1) + 'px'); }
    function ease(x){ return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
    function paint(){ cs.forEach(function(c, i){ var t = ease(clamp((p - i * .13) / .61, 0, 1)), x = sx + (slots[i] - sx) * t,
        y = -30 * Math.sin(Math.PI * t) + (1 - t) * (-i * 3), r = (1 - t) * (i - 1.5) * 1.6, on = p > .99 && i === cur, s = on ? 1.035 : 1;
        if (on) y -= 12;
        c.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) rotate(' + r.toFixed(2) + 'deg) scale(' + s + ')';
        /* one stacking order for the whole deal (the card dealt first stays on top), so no card ever jumps forward mid-flight */
        c.style.zIndex = on ? 20 : 10 - i; });
      lv.classList.toggle('dealt', p > .99); }
    function fromScroll(){ var r = st.getBoundingClientRect(); return clamp((innerHeight * .95 - r.top) / (innerHeight * .55), 0, 1); }
    function tick(now){ raf = 0; if (lab === 'deal') p = reduce ? 1 : fromScroll();
      else if (played) { p = reduce ? 1 : clamp((now - t0) / 1500, 0, 1); if (p < 1) raf = requestAnimationFrame(tick); }
      paint(); }
    function kick(){ if (!raf) raf = requestAnimationFrame(tick); }
    /* follow the scroll only while the stage is within half a screen of the viewport */
    var near = true; if (window.IntersectionObserver) new IntersectionObserver(function(es){ near = es[0].isIntersecting; if (lab === 'deal' && !strip) kick(); }, {rootMargin: '50% 0px'}).observe(st);
    addEventListener('scroll', function(){ if (near && lab === 'deal' && !strip) kick(); }, {passive: true});
    new IntersectionObserver(function(es){ if (es[0].isIntersecting && lab === 'dealt' && !played && !strip) { played = true; t0 = performance.now(); kick(); } }, {threshold: .45}).observe(st);
    return {layout: function(){ size(); if (lab === 'dealt' && !played) p = 0; kick(); },
      on: function(){ if (lab === 'dealt') { played = false; p = 0; var r = st.getBoundingClientRect(); if (r.top < innerHeight * .6 && r.bottom > 0) { played = true; t0 = performance.now() + 250; } } kick(); },
      focus: function(){ kick(); }, ready: function(){ return p > .99; }, clear: function(){ cs.forEach(function(c){ c.style.transform = ''; c.style.zIndex = ''; }); }};
  })();

  /* Slot: the cards stand in a glass slot like cartridges, only their tops showing; the one in focus rises out of it. */
  E.slot = !$('.lv-slot', w) ? {} : (function(){ var lv = $('.lv-slot', w), bay = $('.ls-bay', lv);
    function size(){ var Wd = bay.clientWidth || W(), cw = Math.min(232, (Wd - 3 * 18) / 4); lv.style.setProperty('--cw', cw.toFixed(1) + 'px'); }
    new IntersectionObserver(function(es){ if (es[0].isIntersecting && view() === 'slot') lv.classList.add('in'); }, {threshold: .1}).observe(bay);
    return {layout: size, on: function(){ lv.classList.remove('in'); var r = bay.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) setTimeout(function(){ lv.classList.add('in'); }, 120); }, ready: function(){ return true; }};
  })();

  /* Dock: small cards on one line that grow under the pointer and push their neighbours aside. */
  E.dock = !$('.lv-dock', w) ? {} : (function(){ var lv = $('.lv-dock', w), row = $('.lk-row', lv), cs = $$('.lc', lv), b = 110, gap = 14, cx = [], px = null, raf = 0;
    function size(){ var Wd = row.clientWidth || W(); b = Math.max(84, Math.min(118, Wd / 9.5)); lv.style.setProperty('--b', b.toFixed(1) + 'px');
      var tot = b * 4 + gap * 3, l = (Wd - tot) / 2; cx = cs.map(function(c, i){ return l + i * (b + gap) + b / 2; }); paint(); }
    function scales(){ if (px === null) return cs.map(function(c, i){ var d = Math.abs(i - cur); return d === 0 ? 2.05 : d === 1 ? 1.3 : 1; });
      return cs.map(function(c, i){ var d = (cx[i] - px) / (b * 1.7); return 1 + 1.15 * Math.exp(-d * d); }); }
    function paint(){ raf = 0; var sc = scales(), best = 0; sc.forEach(function(s, i){ cs[i].style.setProperty('--s', s.toFixed(3)); if (s > sc[best]) best = i; });
      if (px !== null && best !== cur) focus(best, true); }
    row.addEventListener('pointermove', function(e){ if (e.pointerType === 'touch' || strip) return; var r = row.getBoundingClientRect(); px = e.clientX - r.left; lv.classList.add('live'); if (!raf) raf = requestAnimationFrame(paint); });
    row.addEventListener('pointerleave', function(){ px = null; lv.classList.remove('live'); paint(); });
    return {layout: size, focus: function(){ if (px === null) paint(); }, ready: function(){ return true; }};
  })();

  /* Belt: a slow belt of cards runs past; pointing at it stops the belt and lifts the card under the pointer. */
  E.belt = !$('.lv-belt', w) ? {} : (function(){ var lv = $('.lv-belt', w), view_ = $('.lb-view', lv), tr = $('.lb-track', lv), cw = 220, gap = 22, x = 0, sp = 22, tsp = 22, last = 0, raf = 0, vis = false, hov = false;
    function size(){ cw = Math.max(170, Math.min(224, W() / 5.2)); lv.style.setProperty('--cw', cw.toFixed(1) + 'px'); }
    function tick(now){ raf = 0; var dt = Math.min(.05, (now - last) / 1000); last = now; tsp = hov || reduce ? 0 : 22; sp += (tsp - sp) * Math.min(1, dt * 4);
      var set = N * (cw + gap); x -= sp * dt; if (x <= -set) x += set; tr.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
      if (vis && view() === 'belt' && !strip && (sp > .05 || tsp > 0)) raf = requestAnimationFrame(tick); }
    function kick(){ if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } }
    view_.addEventListener('pointerenter', function(e){ if (e.pointerType !== 'touch') { hov = true; kick(); } });
    view_.addEventListener('pointerleave', function(){ hov = false; kick(); });
    new IntersectionObserver(function(es){ vis = es[0].isIntersecting; if (vis) kick(); }).observe(view_);
    return {layout: function(){ size(); kick(); }, on: kick, ready: function(){ return true; }};
  })();

  /* Hand: a straight hand of overlapping cards; the one in focus slides up and the cards after it make room. */
  E.hand = !$('.lv-hand', w) ? {} : (function(){ var lv = $('.lv-hand', w), st = $('.lh-stage', lv), cs = $$('.lc', lv), cw = 240;
    function paint(){ var Wd = st.clientWidth || W(); cw = Math.max(170, Math.min(250, Wd / 3.7)); lv.style.setProperty('--cw', cw.toFixed(1) + 'px');
      var step = cw * .5, extra = cw - step + 20, tot = cw + (N - 1) * step + (cur < N - 1 ? extra : 0), l = (Wd - tot) / 2;
      cs.forEach(function(c, i){ var xx = l + i * step + (i > cur ? extra : 0), y = i === cur ? -22 : 0;
        c.style.transform = 'translate(' + xx.toFixed(1) + 'px,' + y + 'px)'; c.style.zIndex = i === cur ? 20 : i + 1; }); }
    return {layout: paint, focus: paint, ready: function(){ return true; }, clear: function(){ cs.forEach(function(c){ c.style.transform = ''; c.style.zIndex = ''; }); }};
  })();

  /* Spread: a closed deck; pointing at it spreads it into a row, leaving it closes it again. */
  E.spread = !$('.lv-spread', w) ? {} : (function(){ var lv = $('.lv-spread', w), st = $('.lp-stage', lv), cs = $$('.lc', lv), cw = 240, gap = 22, open_ = false, t = 0;
    function paint(){ var Wd = st.clientWidth || W(); cw = Math.min(250, (Wd - 3 * gap) / 4); lv.style.setProperty('--cw', cw.toFixed(1) + 'px');
      var tot = cw * 4 + gap * 3, l = (Wd - tot) / 2, sx = (Wd - cw) / 2;
      cs.forEach(function(c, i){ var x, y, s = 1, z;
        if (open_) { x = l + i * (cw + gap); y = i === cur ? -12 : 0; s = i === cur ? 1.035 : 1; z = i === cur ? 20 : 10; }
        else { x = sx + (i - 1.5) * 7; y = (i - 1.5) * -4; z = 10 - i; }
        c.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + s + ')'; c.style.zIndex = z; c.style.transitionDelay = (open_ ? i * 45 : (3 - i) * 35) + 'ms'; });
      lv.classList.toggle('open', open_); }
    st.addEventListener('pointerenter', function(e){ if (e.pointerType === 'touch' || strip) return; clearTimeout(t); if (!open_) { open_ = true; paint(); } });
    st.addEventListener('pointerleave', function(){ clearTimeout(t); t = setTimeout(function(){ open_ = false; paint(); }, 650); });
    st.addEventListener('focusin', function(){ clearTimeout(t); if (!open_) { open_ = true; paint(); } });
    return {layout: paint, focus: function(){ if (open_) paint(); }, ready: function(){ return open_; }, clear: function(){ cs.forEach(function(c){ c.style.transform = ''; c.style.zIndex = ''; }); }};
  })();

  /* Queue: one card in front, the others waiting in line beside it, smaller; pointing at one in line brings it to the front. */
  E.queue = !$('.lv-queue', w) ? {} : (function(){ var lv = $('.lv-queue', w), st = $('.lq-stage', lv), cs = $$('.lc', lv), cw = 300, order = [0, 1, 2, 3];
    function paint(){ var Wd = st.clientWidth || W(); cw = Math.max(220, Math.min(320, Wd * .27)); var sm = .5, g = 18, qx = cw + 44;
      lv.style.setProperty('--cw', cw.toFixed(1) + 'px');
      order.forEach(function(k, j){ var c = cs[k], x, sc, y;
        if (j === 0) { x = 0; sc = 1; y = 0; } else { x = qx + (j - 1) * (cw * sm + g); sc = sm; y = cw * 1.4 * (1 - sm); }
        c.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + sc + ')'; c.style.zIndex = j === 0 ? 10 : 5; c.classList.toggle('front', j === 0); }); }
    return {layout: paint, focus: function(i){ var j = order.indexOf(i); if (j > 0) { order.splice(j, 1); order.unshift(i); } paint(); }, ready: function(){ return true; },
      clear: function(){ cs.forEach(function(c){ c.style.transform = ''; c.style.zIndex = ''; }); }};
  })();

  /* Pile: a straight pile with the name beside it in large type; scrolling past it takes the top card off, one at a time. */
  E.pile = !$('.lv-pile', w) ? {} : (function(){ var lv = $('.lv-pile', w), st = $('.li-stage', lv), cs = $$('.lc', lv), lc = $('.li-cap', lv), raf = 0, top = 0, manual = false;
    function paint(){ cs.forEach(function(c, i){ var d = (i - top + N) % N; c.style.setProperty('--d', d); c.style.zIndex = 10 - d; c.classList.toggle('on', d === 0); });
      var b = $('b', lc), sp = $('span', lc); if (b.textContent !== D[top].name) { lc.classList.add('swap'); setTimeout(function(){ b.textContent = D[top].name; sp.textContent = D[top].line; lc.classList.remove('swap'); }, b.textContent ? 180 : 0); } }
    function fromScroll(){ raf = 0; if (view() !== 'pile' || strip || manual) return; var r = st.getBoundingClientRect(), p = clamp((innerHeight * .7 - r.top) / (innerHeight * .9), 0, .999), k = Math.floor(p * N);
      if (k !== top) { top = k; cur = k; caption(k); paint(); } }
    addEventListener('scroll', function(){ if (!raf) raf = requestAnimationFrame(fromScroll); }, {passive: true});
    return {layout: function(){ paint(); fromScroll(); }, focus: function(i){ top = i; paint(); }, ready: function(){ return true; }};
  })();

  /* Lift and List (from Home Studies): their own script runs them; the caption follows their card in focus. */
  E.lift = {ready: function(){ return true; }};
  E.list = {ready: function(){ return true; }};
  if ($('.lv-q', w)) new MutationObserver(function(){ if (lab !== 'lift' && lab !== 'list') return; var on = $('.lv-q .xq.on', w); if (on) { cur = +on.dataset.k; caption(cur); } })
    .observe($('.lv-q', w), {subtree: true, attributes: true, attributeFilter: ['class']});

  /* phones: every design becomes a strip you swipe; the card in the middle is the one in focus */
  function layout(){ var was = strip; strip = innerWidth <= 760; sec.classList.toggle('lab-strip', strip);
    if (strip) { ['deal', 'hand', 'spread', 'queue'].forEach(function(k){ E[k].clear && E[k].clear(); }); return; }
    var e = E[view()]; if (e && e.layout) e.layout(); }
  addEventListener('resize', function(){ clearTimeout(layout.t); layout.t = setTimeout(layout, 120); });
  $$('.lv:not(.lv-q)', w).forEach(function(lv){ var sc = $('.ld-stage, .ls-bay, .lk-row, .lb-view, .lh-stage, .lp-stage, .lq-stage, .li-stage', lv);
    sc.addEventListener('scroll', function(){ if (!strip) return; var m = sc.getBoundingClientRect(), mid = m.left + m.width / 2, best = 0, bd = 1e9;
      $$('.lc:not(.dup)', lv).forEach(function(c){ var r = c.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - mid); if (d < bd) { bd = d; best = +c.dataset.k; } }); if (best !== cur) focus(best, true); }, {passive: true}); });

  /* pointing at a card puts it in focus; clicking the card in focus opens it */
  w.addEventListener('pointerover', function(e){ if (e.pointerType === 'touch' || strip) return; var c = e.target.closest('.lv:not(.lv-q) .lc'); if (!c) return;
    var en = E[view()]; if (view() === 'dock' || view() === 'pile' || (en && en.ready && !en.ready())) return; var k = +c.dataset.k; if (k !== cur) focus(k); });
  /* the deal: leaving the row puts every card back level */
  $('.ld-stage', w).addEventListener('pointerleave', function(e){ if (e.pointerType !== 'touch' && !strip && view() === 'deal') focus(-1, true); });
  w.addEventListener('click', function(e){ var c = e.target.closest('.lv:not(.lv-q) .lc'); if (!c) return; var k = +c.dataset.k, en = E[view()];
    if (en && en.ready && !en.ready()) return;
    if (k !== cur || (strip && !c.classList.contains('on'))) { focus(k); if (strip) c.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'nearest', inline: 'center'}); return; }
    window.xqOpen(k, c); });
  w.addEventListener('keydown', function(e){ var c = e.target.closest('.lv:not(.lv-q) .lc'); if (!c) return; if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); focus(+c.dataset.k); window.xqOpen(+c.dataset.k, c); } });
  w.addEventListener('focusin', function(e){ var c = e.target.closest('.lv:not(.lv-q) .lc'); if (c && +c.dataset.k !== cur) focus(+c.dataset.k); });

  /* ======================= opening ======================= */
  var turning = false, srcCard = null;
  function art(c){ return c && $('.xq-art img', c); }
  function settle(c){ if (!c) return; c.classList.add('still'); c.classList.remove('turn'); void c.offsetWidth; c.classList.remove('still'); }
  addEventListener('pageshow', function(){ $$('.xq-c.turn', sec).forEach(settle); $$('.xq-c', sec).forEach(function(c){ c.style.viewTransitionName = ''; var a = art(c); if (a) a.style.viewTransitionName = ''; }); });
  /* screens open from the card's picture: the card turns on its axis and the turn carries on into the page.
     the card views open from the card itself: it flies forward and stays a card. */
  window.xqOpen = function(i, c){ if (turning) return; srcCard = c;
    if (v === 'unfold') { unfold(i); return; }
    if (CARDY[v] || reduce) { open(i, c); return; }
    turning = true; c.classList.add('turn'); setTimeout(function(){ turning = false; open(i, c); }, 320); };
  function open(i, c){
    if (PAGE[v]) { if (!reduce) { if (CARDY[v]) c.style.viewTransitionName = 'xpcard'; else { var a = art(c); if (a) a.style.viewTransitionName = 'xpm'; } }
      try { sessionStorage.setItem('xpnav', CARDY[v] ? 'card' : 'open'); } catch (e) {}
      location.href = 'exp-' + ids[i] + '.html#' + v; return; }
    overlay(i, c); }

  /* ---------- Unfold: the section opens downward under the cards; no overlay, the page stays where it is ---------- */
  var U = document.createElement('div'); U.className = 'lab-unf'; U.innerHTML = '<div class="lu-clip"><div class="lu-in"><button class="xp-gk lu-x" type="button" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/></svg></button><div class="lu-body" aria-live="polite"></div></div></div>';
  w.appendChild(U); var ub = $('.lu-body', U), ui = -1;
  function unfold(i){ if (ui === i && U.classList.contains('open')) { foldUp(); return; }
    var d = detail(D[i].id).cloneNode(true), had = ub.firstChild && !reduce;
    function put(){ ub.textContent = ''; ub.appendChild(d); setTimeout(function(){ steel(ub); }, 120); }
    if (had) { ub.firstChild.classList.add('swap'); setTimeout(put, 220); } else put();
    ui = i; U.classList.add('open'); focus(i, true);
    var r = U.getBoundingClientRect(); if (r.top > innerHeight * .6) scrollBy({top: Math.min(r.top - innerHeight * .25, 480), behavior: reduce ? 'auto' : 'smooth'}); }
  function foldUp(){ U.classList.remove('open'); ui = -1; }
  $('.lu-x', U).addEventListener('click', foldUp);
  addEventListener('keydown', function(e){ if (e.key === 'Escape' && ui >= 0 && !isOpen()) foldUp(); });

  /* ---------- on home: sheet, panel, theatre, zoom ---------- */
  var P = {repetition:2, softness:0.5, shiftRed:0.04, shiftBlue:0.04, distortion:0.02, contour:0.25, angle:90, speed:0, frame:4200};
  function steel(root){ if (!window.MetalKit) return; $$('.key .metal', root).forEach(function(m){ if (m.dataset.m) return; var r = m.getBoundingClientRect(); if (!r.width) return; m.dataset.m = 1;
    MetalKit.mount(m, MetalKit.ringPill(Math.round(r.width) * 4, Math.round(r.height) * 4, 16), P).then(function(mt){ if (!mt) return; var sp = .2, goal = .2, raf = 0; if (!reduce) mt.setSpeed(sp);
      function go(){ sp += (goal - sp) * .08; mt.setSpeed(sp); raf = Math.abs(goal - sp) > .01 ? requestAnimationFrame(go) : 0; }
      var k = m.parentNode; if (!reduce) { k.addEventListener('pointerenter', function(){ goal = 1.2; if (!raf) go(); }); k.addEventListener('pointerleave', function(){ goal = .2; if (!raf) go(); }); }
    }).catch(function(){ m.dataset.m = ''; }); }); }
  var cache = {};
  function detail(id){ if (!cache[id]) cache[id] = document.getElementById('xpt-' + id).content.firstElementChild.cloneNode(true); return cache[id]; }
  var O = document.createElement('div'); O.className = 'xpo'; O.setAttribute('aria-hidden', 'true');
  var X = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/></svg>';
  O.innerHTML = '<div class="xpo-scrim"></div><div class="xpo-surf" role="dialog" aria-modal="true" tabindex="-1"><span class="xpo-count"></span><div class="xpo-bar"><button class="xp-gk xpo-x" type="button" aria-label="Close">' + X + '</button></div>'
    + '<div class="xpo-scroll"><div class="xpo-in"><div class="xpo-body"></div><nav class="xpo-nav" aria-label="More experiments"></nav><div class="xpo-lib" role="tablist" aria-label="Experiments"></div></div></div></div>';
  document.body.appendChild(O);
  var surf = $('.xpo-surf', O), body = $('.xpo-body', O), nav = $('.xpo-nav', O), lib = $('.xpo-lib', O), count = $('.xpo-count', O), scroller = $('.xpo-scroll', O);
  lib.innerHTML = D.map(function(e, k){ return '<button type="button" role="tab" data-k="' + k + '" style="--bc:' + e.col + '" aria-label="' + e.name + '"><img src="' + e.hero + '" alt="" loading="lazy"></button>'; }).join('');
  var oi = -1, kind = '', busy = false;
  function isOpen(){ return oi >= 0; }
  function vtOn(){ O.classList.add('vt'); surf.style.viewTransitionName = 'xps'; document.documentElement.setAttribute('data-xpvt', kind); }
  function vtOff(){ O.classList.remove('vt'); surf.style.viewTransitionName = ''; document.documentElement.removeAttribute('data-xpvt'); }
  function target(){ return kind === 'zoom' ? $('.xpd-card .xq-c', body) : $('.xpd-hero img', body); }
  function source(c){ return kind === 'zoom' ? c : art(c); }
  function fill(i){ var d = detail(D[i].id); body.textContent = ''; body.appendChild(d); oi = i;
    var p = (i + N - 1) % N, n = (i + 1) % N;
    /* no previous/next: the deck on the page is the way between experiments */
    $$('button', lib).forEach(function(b, k){ b.setAttribute('aria-current', String(k === i)); b.setAttribute('aria-selected', String(k === i)); });
    count.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(N).padStart(2, '0');
    surf.setAttribute('aria-label', D[i].name); scroller.scrollTop = 0;
    var cc = $('.xpd-card .xq-c', d); if (cc && window.Foil) window.Foil.idle(cc, kind === 'zoom'); }
  function name(el, n){ if (el) el.style.viewTransitionName = n; }
  function overlay(i, c){
    kind = v; O.className = 'xpo t-' + v; var src = source(c), vt = document.startViewTransition && !reduce && src, N_ = kind === 'zoom' ? 'xpcard' : 'xpm';
    function show(){ name(src, ''); settle(c); if (kind === 'zoom' && c) c.classList.add('away'); fill(i); O.classList.add('open'); O.removeAttribute('aria-hidden'); document.body.classList.add('xp-lock'); if (vt) name(target(), N_); }
    function done(){ vtOff(); name(target(), ''); $('.xpo-x', O).focus({preventScroll: true}); setTimeout(function(){ steel(body); }, 450); }
    if (vt) { name(src, N_); vtOn(); var t = document.startViewTransition(show); t.finished.then(done, done); } else { show(); done(); }
    try { if (location.hash !== '#' + ids[i]) history.pushState({xp: ids[i]}, '', '#' + ids[i]); } catch (e) {} }
  /* moving between experiments: the old one leaves the way you're going while the new one arrives; in Zoom the card turns over into the next one */
  function go(i, dir){ if (i === oi || busy) return; dir = dir || (((i - oi + N) % N) <= N / 2 ? 1 : -1);
    var old = body.firstElementChild;
    if (reduce || !old) { fill(i); steel(body); return; }
    busy = true; var ghost = old.cloneNode(true); ghost.classList.add('xpo-ghost'); ghost.style.setProperty('--dir', dir);
    fill(i); body.insertBefore(ghost, body.firstChild);
    var nu = body.lastElementChild; nu.style.setProperty('--dir', dir); nu.classList.add('xpo-in-from');
    void nu.offsetWidth; ghost.classList.add('go'); nu.classList.remove('xpo-in-from'); nu.classList.add('xpo-arrive');
    setTimeout(function(){ ghost.remove(); nu.classList.remove('xpo-arrive'); busy = false; steel(body); }, 800);
    try { history.replaceState({xp: ids[i]}, '', '#' + ids[i]); } catch (e) {} }
  function back(){ return srcCard && srcCard.isConnected && srcCard.dataset.k == oi ? srcCard : $('.lv[data-v="' + view() + '"] .lc[data-k="' + oi + '"]:not(.dup), .lv-q .xq[data-k="' + oi + '"] .xq-c', w); }
  var closing = false;
  function close(fromPop){ if (!isOpen() || closing) return; closing = true; var ci = oi, c = back(), src = source(c), tg = target(), vt = document.startViewTransition && !reduce && src && tg && kind !== 'theatre', N_ = kind === 'zoom' ? 'xpcard' : 'xpm';
    function hide(){ O.classList.remove('open'); O.setAttribute('aria-hidden', 'true'); document.body.classList.remove('xp-lock'); name(tg, ''); $$('.lc.away, .xq-c.away', w).forEach(function(x){ x.classList.remove('away'); }); if (vt) name(src, N_); oi = -1; }
    function fin(){ vtOff(); name(src, ''); closing = false; if (c) c.focus({preventScroll: true}); }
    if (vt) { name(tg, N_); vtOn(); var t = document.startViewTransition(hide); t.finished.then(fin, fin); } else { hide(); fin(); }
    if (!fromPop) { try { if (location.hash === '#' + ids[ci]) history.back(); } catch (e) {} } }
  function closeNow(){ if (!isOpen()) return; O.classList.remove('open'); O.setAttribute('aria-hidden', 'true'); document.body.classList.remove('xp-lock'); $$('.lc.away, .xq-c.away', w).forEach(function(c){ c.classList.remove('away'); }); oi = -1; }
  $('.xpo-x', O).addEventListener('click', function(){ close(); });
  $('.xpo-scrim', O).addEventListener('click', function(){ close(); });
  nav.addEventListener('click', function(e){ var a = e.target.closest('a'); if (!a) return; e.preventDefault(); go(+a.dataset.k, +a.dataset.dir); });
  lib.addEventListener('click', function(e){ var b = e.target.closest('button'); if (b) go(+b.dataset.k); });
  addEventListener('keydown', function(e){ if (!isOpen()) return; if (document.querySelector('.xpop:not([hidden])')) return;
    var typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') { var f = $$('button,a[href]', surf).filter(function(x){ return x.offsetParent && !x.closest('.xpo-ghost'); }); if (!f.length) return; var a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } } });
  addEventListener('popstate', function(){ if (closing) return; var k = ids.indexOf(location.hash.slice(1)); if (k < 0) close(true); });
  var sx = 0, sy = 0;
  surf.addEventListener('touchstart', function(e){ sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, {passive: true});
  surf.addEventListener('touchend', function(e){ var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if ((kind === 'sheet' || kind === 'panel') && dy > 90 && scroller.scrollTop <= 0 && Math.abs(dy) > Math.abs(dx)) close(); }, {passive: true});

  /* ---------- start ---------- */
  sec.dataset.lab = lab; setFace(face); mark(); layout(); setLab(lab);
  var h = ids.indexOf(location.hash.slice(1)); if (h >= 0 && !PAGE[v]) setTimeout(function(){ sec.scrollIntoView(); var c = $('.lv[data-v="' + view() + '"] .lc[data-k="' + h + '"]', w); overlay(h, c); }, 500);
})();

;
/* the play note: opens under its key, closes on Escape, a click outside, or scrolling away */
(function(){
  var open = null, key = null, sy = 0;
  function place(){ if (!open) return; var r = key.getBoundingClientRect(), w = open.offsetWidth, h = open.offsetHeight, m = 16;
    var x = Math.min(Math.max(m, r.left), innerWidth - w - m), below = r.bottom + 12 + h < innerHeight - m;
    open.classList.toggle('up', !below); open.style.left = x + 'px'; open.style.top = (below ? r.bottom + 12 : r.top - 12 - h) + 'px'; open.style.setProperty('--ox', (r.left + r.width / 2 - x) + 'px'); }
  function hide(back){ if (!open) return; var o = open, k = key; o.classList.remove('on'); k.setAttribute('aria-expanded', 'false'); open = null; key = null;
    setTimeout(function(){ if (!o.classList.contains('on')) o.hidden = true; }, 320); if (back) k.focus({preventScroll: true}); }
  document.addEventListener('click', function(e){ var b = e.target.closest('[data-pop]');
    if (b) { e.preventDefault(); e.stopPropagation(); var p = document.getElementById('xpop-' + b.dataset.pop); if (!p) return; if (open === p) { hide(); return; } hide();
      open = p; key = b; p.hidden = false; b.setAttribute('aria-expanded', 'true'); place(); sy = scrollY; requestAnimationFrame(function(){ p.classList.add('on'); }); var a = p.querySelector('a'); if (a) a.focus({preventScroll: true}); return; }
    if (open && !open.contains(e.target)) hide(); }, true);
  addEventListener('keydown', function(e){ if (e.key === 'Escape' && open) { e.stopPropagation(); hide(true); } }, true);
  addEventListener('scroll', function(){ if (open && Math.abs(scrollY - sy) > 60) hide(); else place(); }, {passive: true, capture: true});
  addEventListener('resize', place);
  document.addEventListener('click', function(e){ var c = e.target.closest('.xpop-c'); if (!c) return; var t = c.dataset.copy;
    function ok(){ c.classList.add('ok'); c.setAttribute('aria-label', 'Copied'); clearTimeout(c._t); c._t = setTimeout(function(){ c.classList.remove('ok'); c.setAttribute('aria-label', 'Copy email address'); }, 1800); }
    function fb(){ var a = c.parentNode.querySelector('a'), r = document.createRange(); r.selectNodeContents(a); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    try { navigator.clipboard.writeText(t).then(ok, fb); } catch (e) { fb(); } });
})();

/* Contact: chrome ribbons in the hero band's material, with an impulse; replaces the page's own block */
(function(){ var root = document.documentElement, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function clamp(x, a, b){ return Math.max(a, Math.min(b, x)); }
  /* =================== Contact: chrome lines in the hero band's material =================== */
  var sec = document.getElementById('contact'), cv = sec && sec.querySelector('.cl-bg canvas');
  /* a few chrome ribbons cut from the hero band: the same rounded ridge and light, in plain chrome (no case colour).
     They move only with time and with where the section sits on screen, both eased, so a fast scroll never shakes them.
     Every few seconds a white impulse of light runs along one of them. */
  var COUNT = {l3: 3, l5: 5};
  var gl = cv && cv.getContext('webgl', {antialias: false, premultipliedAlpha: true, alpha: true});
  if (gl) {
    var FS = 'precision highp float;uniform vec2 uR;uniform float uD;uniform float uT;uniform float uDk;uniform float uN;uniform float uA;uniform float uK;uniform vec2 uO;uniform vec2 uM;uniform vec3 uC;uniform vec3 uP;' +
      'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}' +
      'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}' +
      'float tt;' +
      'float archY(float a){return 72.*sin(a*.0019+tt*.55+uK*.5)+26.*sin(a*.0047-tt*.75+1.3);}' +
      'float spread(float a){return mix(.1,1.7,smoothstep(.15,.85,n(vec2(a*.0015+tt*.33+uK*.4,3.7))));}' +
      'float lineY(float i,float a,float ar,float sp){float base=(i-(uN-1.)*.5)*26.;' +
      'float wan=(n(vec2(a*.0031+tt*.47+i*1.9,i*7.7))-.5)*52.+(n(vec2(a*.0072-tt*.6+i*4.3,i*2.9))-.5)*14.;return ar+base*sp+wan;}' +
      /* ribbons as plump as the band's layers, each swelling and thinning along its length */
      'float lineW(float i,float a){float sw=n(vec2(a*.0042+i*7.3,tt*.5+i*3.1));sw=sw*sw*(3.-2.*sw);return mix(3.2,10.5,sw)*mix(.8,1.15,h(vec2(i,3.1)));}' +
      'float smin(float a,float b,float k){float q=max(k-abs(a-b),0.)/k;return min(a,b)-q*q*k*.25;}' +
      'float field(vec2 q,out float wn,out float lv,out float tp,out float pk){float D=1e5;float ws=0.;wn=0.;lv=0.;tp=0.;pk=0.;float ar=archY(q.x),sp=spread(q.x);' +
      'for(int k=0;k<5;k++){float i=float(k);if(i>=uN)break;float y=lineY(i,q.x,ar,sp);float w=lineW(i,q.x);' +
      'float f=abs(q.y-y)-w;float a=exp(-clamp(f,-12.,24.)*.45);ws+=a;wn+=a*w;lv+=a*h(vec2(i,8.7));tp+=a*sin(i*1.7);pk+=a*step(abs(i-uP.y),.5);D=k==0?f:smin(D,f,10.);}' +
      'wn/=ws;lv/=ws;tp/=ws;pk/=ws;return D;}' +
      'vec2 Q(vec2 fc){vec2 c=fc/uD-uO;float ca=cos(uA),sa=sin(uA);return vec2(ca*c.x+sa*c.y,-sa*c.x+ca*c.y);}' +
      'float env(float t,float lo){float b=sin(t*2.3+1.2);return mix(lo,mix(.98,.86,uDk),smoothstep(-.45,.45,b))*(.9+.1*clamp(t+.5,0.,1.));}' +
      'void main(){tt=uT*.11+.9*sin(uT*.047)+.45*sin(uT*.083+1.1);vec2 uv=gl_FragCoord.xy/uR;float asp=uR.x/uR.y;' +
      'vec2 q0=Q(gl_FragCoord.xy);if(abs(q0.y-archY(q0.x))>uN*15.+170.){gl_FragColor=vec4(0.);return;}' +
      'float wn,lv,tp,pk,w2,l2,t2,p2;float D=field(q0,wn,lv,tp,pk);' +
      'vec3 cc=uC/max(max(max(uC.r,uC.g),uC.b),.05);vec3 lc=mix(vec3(1.),cc,.75);' +
      /* the impulse: a bright head with a long fading tail, on one ribbon */
      'float dx=q0.x-uP.x;float pl=uP.z*pk*(dx>0.?exp(-dx*dx/700.):exp(-dx*dx/52000.));' +
      'if(D>2.5){float ha=pl*exp(-(D-2.5)*.2)*.42;if(ha<.003){gl_FragColor=vec4(0.);return;}gl_FragColor=vec4(lc*ha,ha);return;}' +
      'float Dx=field(Q(gl_FragCoord.xy+vec2(1.,0.)),w2,l2,t2,p2),Dy=field(Q(gl_FragCoord.xy+vec2(0.,1.)),w2,l2,t2,p2);vec2 g=vec2(Dx-D,Dy-D);g/=length(g)+1e-5;' +
      'float m=clamp(.5-D*uD*.8,0.,1.);float e=clamp(-D/max(wn,1.),0.,1.);float u=1.-e;float uu=u*u*(3.-2.*u);' +
      'vec2 pp=gl_FragCoord.xy/uD*(1.35/340.);vec2 nz=vec2(n(pp*1.2)-.5,n(pp*1.2+9.)-.5)*.04;' +
      /* the band's ridge: normal from the cross-section, its reflection, its floor */
      'vec3 N=normalize(vec3(g*uu*.72+nz,sqrt(max(1.-uu*uu*.52,0.))+.1));vec3 R=vec3(2.*N.z*N.xy,2.*N.z*N.z-1.);' +
      'float t=R.y*1.1+R.x*.45+.18*tp+.08*sin(pp.x*.6+uT*.04);float lb=mix(mix(.9,.72,uDk),1.,lv);' +
      'float clo=mix(.87,.3,uDk);vec3 ch=vec3(env(t+.03,clo),env(t,clo),env(t-.03,clo));float k=clamp((wn*uD/1.1-2.5)/4.,0.,1.);' +
      'ch=mix(vec3(mix(clo,mix(.98,.86,uDk),.6)),ch,k)*lb*mix(1.,.86,uDk);' +
      /* where the ribbon turns away it falls to the band\'s steel floor, which is what outlines each layer in the band */
      'float lo=mix(.62,.16,uDk);ch=mix(ch,vec3(lo)*vec3(.96,.98,1.02),smoothstep(.45,1.,u)*.75);' +
      'vec2 d=(uv-uM)*vec2(asp,1.);vec3 L=normalize(vec3(-d*1.1,.42));vec3 H=normalize(L+vec3(0.,0.,1.));float near=exp(-dot(d,d)*1.5);' +
      'float spec=pow(max(dot(N,H),0.),60.);vec3 lit=mix(ch,ch*lc*1.08,.2*uDk)+lc*(spec*.35*mix(1.7,1.,uDk)*(.4+.6*near));' +
      /* the case-colour wash the band carries */
      'vec3 LW=vec3(.3,.59,.11);float Y=dot(lit,LW);vec3 tc=uC-dot(uC,LW)+Y;float mx=max(max(tc.r,tc.g),tc.b),mn=min(min(tc.r,tc.g),tc.b);' +
      'if(mx>1.)tc=Y+(tc-Y)*(1.-Y)/max(mx-Y,1e-4);if(mn<0.)tc=Y+(tc-Y)*Y/max(Y-mn,1e-4);lit=mix(lit,tc,mix(.32,.38,uDk));' +
      /* the impulse lights the ribbon from inside: colour on the body, white at the crest */
      'lit+=lc*pl*(.55+.35*(1.-uu));lit=mix(lit,vec3(1.),pl*.55*(1.-uu)*(1.-uu));' +
      'lit+=(h(gl_FragCoord.xy+fract(uT))-.5)*.012;' +
      'float ha=pl*.42;float al=max(m,ha*(1.-m));gl_FragColor=vec4(lit*m+lc*ha*(1.-m),al);}';
    var VS = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
    function sh(t, src){ var x = gl.createShader(t); gl.shaderSource(x, src); gl.compileShader(x); if (!gl.getShaderParameter(x, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(x)); return x; }
    var pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
    var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var al = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(al); gl.vertexAttribPointer(al, 2, gl.FLOAT, false, 0, 0);
    var U = {}; ['uR', 'uD', 'uT', 'uDk', 'uN', 'uA', 'uK', 'uO', 'uM', 'uC', 'uP'].forEach(function(k){ U[k] = gl.getUniformLocation(pr, k); });
    var t0 = performance.now(), o = {d: 1, t: 0, last: t0, m: [.6, .6], vis: false, dk: 0, col: [.5, .2, .9], k: null, p: {x: -1e5, i: 0, a: 0, s: -1, dur: 1600, next: t0 + 1400}};
    var mode = 'l3';
    /* plain chrome, no colour: the wash turns neutral and the impulse is white light */
    function theme(){ o.dk = root.classList.contains('is-dark') ? 1 : 0; o.col = [1, 1, 1]; }
    function size(){ var r = cv.getBoundingClientRect(); o.d = Math.min(1.6, devicePixelRatio || 1); cv.width = Math.max(2, Math.round(r.width * o.d)); cv.height = Math.max(2, Math.round(r.height * o.d)); gl.viewport(0, 0, cv.width, cv.height); draw(performance.now(), true); }
    function scrollP(){ var r = cv.getBoundingClientRect(); return clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1); }
    function ease(x){ return 1 - Math.exp(-x); }
    function draw(now, once){ var dt = once ? 0 : Math.min(.05, Math.max(0, (now - o.last) / 1000)); o.last = now; if (!reduce) o.t += dt;
      /* the light wanders on its own; the pointer no longer drives it */
      var tm = reduce ? [.55, .6] : [.55 + .3 * Math.sin(o.t / 6.3), .6 + .22 * Math.cos(o.t / 8.1)]; o.m[0] += (tm[0] - o.m[0]) * (once ? 1 : ease(dt * 4)); o.m[1] += (tm[1] - o.m[1]) * (once ? 1 : ease(dt * 4));
      /* where the section sits on screen shifts the arch a little; eased, so any scroll speed reads as one slow glide */
      var tk = reduce ? .7 : scrollP() * 1.4; o.k = o.k == null ? tk : o.k + (tk - o.k) * (once ? 0 : ease(dt * 1.6));
      var W = cv.width / o.d, Hh = cv.height / o.d, narrow = W < 700, N = COUNT[mode] || 3;
      /* the impulse: every few seconds, one ribbon, end to end */
      var P = o.p; if (!reduce && !once) { if (P.s < 0 && now >= P.next) { P.s = 0; P.i = Math.floor(Math.random() * N); P.dur = 1500 + Math.random() * 700; P.t0 = now; }
        if (P.s >= 0) { P.s = (now - P.t0) / P.dur; if (P.s > 1) { P.s = -1; P.a = 0; P.next = now + 2600 + Math.random() * 2800; }
          else { var L = W * .62 + 260, x = P.s; P.x = -L + 2 * L * (x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2) * .35 + 2 * L * x * .65; P.a = Math.pow(Math.sin(Math.PI * Math.min(1, x * 1.15)), .6); } } }
      var ang = Math.min(narrow ? .62 : .4, Math.atan(Math.max(.05, Hh - 330) / W)), oy = narrow ? Hh * .62 : Hh * .5;
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(U.uR, cv.width, cv.height); gl.uniform1f(U.uD, o.d); gl.uniform1f(U.uT, reduce ? 10 : o.t); gl.uniform1f(U.uDk, o.dk);
      gl.uniform1f(U.uN, N); gl.uniform1f(U.uK, o.k); gl.uniform1f(U.uA, ang); gl.uniform2f(U.uO, W / 2, oy); gl.uniform2f(U.uM, o.m[0], o.m[1]); gl.uniform3f(U.uC, o.col[0], o.col[1], o.col[2]);
      gl.uniform3f(U.uP, P.x, P.i, P.a); gl.drawArrays(gl.TRIANGLES, 0, 3); }
    var raf = 0; function loop(now){ raf = 0; if (!o.vis || !cv.offsetWidth) return; draw(now); if (!reduce) raf = requestAnimationFrame(loop); }
    function kick(){ if (!raf) raf = requestAnimationFrame(loop); }
    theme(); mode = COUNT[sec.dataset.cs] ? sec.dataset.cs : 'l3';
    if (window.ResizeObserver) new ResizeObserver(size).observe(cv);
    new IntersectionObserver(function(e){ o.vis = e[0].isIntersecting; if (o.vis) { o.last = performance.now(); kick(); } }).observe(cv);
    addEventListener('scroll', function(){ if (reduce && o.vis) draw(performance.now(), true); }, {passive: true});
    new MutationObserver(function(){ theme(); draw(performance.now(), true); }).observe(root, {attributes: true, attributeFilter: ['class', 'data-theme']});
    window.csLines = function(m){ mode = m; size(); };
  }
})();
