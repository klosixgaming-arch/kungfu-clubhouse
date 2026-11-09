# The Kung-Fu Clubhouse website

A static, family-friendly site served by Nginx in Docker.

## Install on TrueNAS SCALE (24.10 or newer)

TrueNAS downloads the site from this GitHub repo by itself. Nothing to copy.

1. Open `truenas-app.yaml` and replace `PASTE_YOUR_TUNNEL_TOKEN_HERE` with your Cloudflare tunnel token.
   Only paste the token into TrueNAS, never into this repo.
2. In TrueNAS: **Apps → Discover → ⋮ (top right) → Install via YAML**.
   Name it `kungfu-clubhouse`, paste the file, click **Save**.
3. Visit `http://<truenas-ip>:2244`.

Any other Docker host with the files local: `docker compose up -d` inside this folder.

## Make it yours

| What | Where |
|---|---|
| Your photos | Drop JPGs in `site/images/photos/` using the names below. They replace the placeholders automatically, no code edits needed. |
| Text in `[brackets]` | `site/index.html`: address, phone, email, prices, bios, history, testimonials. Search for `[`. |
| Schedule, programs, five animals | Top of `site/js/main.js` |
| Contact form email | `TO_EMAIL` near the bottom of `site/js/main.js` (the form opens the visitor's email app) |
| Map | The `<iframe class="map">` in `index.html`; change `q=Memphis,+TN` to your street address |
| Colors | Top of `site/css/style.css` |

Edit files right on github.com (pencil icon) or upload photos with **Add file → Upload files**. TrueNAS checks GitHub every 5 minutes, so changes go live on their own.

### Photo names (`site/images/photos/`)

`kids.jpg` · `youth.jpg` · `family.jpg` · `adults.jpg` · `taichi.jpg` · `birthday.jpg` · `history.jpg` ·
`instructor-1.jpg` `instructor-2.jpg` `instructor-3.jpg` · `gallery-1.jpg` … `gallery-8.jpg`

Each placeholder in `site/images/placeholders/` shows its target file name.

## Going live on KungFuClubHouse.com

`truenas-app.yaml` includes a Cloudflare Tunnel container. Create a tunnel in Cloudflare
(Networking → Tunnels → Create a tunnel), paste its token into the YAML, then add two
published application routes, `kungfuclubhouse.com` and `www.kungfuclubhouse.com`, both
pointing to `http://kungfu-clubhouse:80`.

The site's contact email is lloydambrose@gmail.com (set in `site/index.html` and `TO_EMAIL` in `site/js/main.js`).
