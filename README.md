# Nick Gersbach — Freelance Portfolio with YouTube Introduction

A separate version of the Practical Web Dev freelance portfolio, with a YouTube introduction between the hero and services. It keeps the light design, Practical Web Dev blue, three services, three screenshot-based projects, mobile navigation, and project inquiry email links.

## Add your YouTube video

1. Open `index.html` in your editor.
2. Search for **ADD YOUR YOUTUBE VIDEO HERE**.
3. Find `data-youtube-url=""` directly below that comment.
4. Paste your YouTube video URL between those quotes and save.
5. Preview the page through a local web server, such as VS Code Live Server, or your normal web host.

For example, replace the empty field with:

```html
<div class="video-frame video-player" data-youtube-url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID">
```

Use your actual video URL in that example. Watch URLs, `youtu.be` share URLs, `/embed/` URLs, Shorts URLs, and 11-character video IDs are accepted. Leave the field empty to show the designed placeholder.

The script hides the placeholder, loads the responsive YouTube player, and adds a **Watch on YouTube** link. It does not autoplay. There is no API key, package installation, or backend to configure.

The video should be public or unlisted and allow embedding. A private, deleted, or embedding-disabled video cannot play on the page. Test playback over HTTP/HTTPS: opening the HTML as a `file://` page can omit the referrer YouTube requires and cause error 153. An internet connection is needed for YouTube playback.

Official references: [YouTube embedded player documentation](https://developers.google.com/youtube/iframe_api_reference) and [player parameters](https://developers.google.com/youtube/player_parameters).

## A simple introduction video outline

Keep it focused on the visitor. Around a minute is a useful starting target for this course exercise.

- Introduce yourself and who you help.
- Describe the kinds of websites you build and the business needs they address.
- Show one of your own projects briefly.
- Explain how you approach a project and communicate with a client.
- Invite viewers to contact you through the portfolio.

Update the text beside the player to match your actual video. The placeholder is intentionally empty; no unrelated example video is included in the finished template.

## Direct iframe alternative

To use a plain HTML embed instead, replace the entire `<div class="video-frame video-player" ...>` block and the following `video-external-link` anchor with this block. Replace `YOUR_VIDEO_ID` with the ID of your own video:

```html
<div class="video-frame">
  <iframe class="youtube-frame"
    src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID?rel=0&amp;playsinline=1"
    title="Video introduction — how I can help your business"
    width="640" height="360" loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
</div>
```

This alternative uses the same responsive styling. The script skips its video setup when the `.video-player` element is absent; the mobile menu and screenshot previews continue to work.

## Open the site

Open `index.html` in a browser. No installation, build command, framework, or backend is required. Keep `style.css`, `app.js`, and the `img` folder beside the HTML file.

The Montserrat font loads from Google Fonts when an internet connection is available. The page uses a system sans-serif fallback offline. All project screenshots and social icons are included locally.

## Included files

- `index.html` — introduction, clearly marked YouTube URL field, services, project screenshots, and contact content.
- `style.css` — global styles, navigation, hero, responsive video, services, projects, contact, screenshot preview, and media queries.
- `app.js` — mobile menu, click-to-enlarge screenshot dialog, and YouTube link setup.
- `img/` — optimized project screenshots, social icons, and favicon.

## Edit this version

1. Change the name in the navigation, hero, page title, description, and footer.
2. Update the introduction, location, services, and email address. Search for `info.practicalwebdev@gmail.com` to replace both email links.
3. Replace the LinkedIn, GitHub, YouTube, and Practical Web Dev links as needed.
4. Copy an entire `<article class="project-container">` block to add a project.
5. Replace its image file, image `src`, width, height, and alt text.
6. Update the screenshot button's `data-image`, `data-title`, `data-alt`, and `aria-label` as well.
7. Edit the project description and feature list to describe your actual work.
8. Change the blue accents in `style.css` if needed. Main brand blue: `#0c8cff`. Darker link blue: `#006acb`.

The large section comments in the HTML and CSS are intended to make the files easy to navigate during a lesson. The JavaScript uses query selectors, named functions, and regular event listeners.

## Freelance page structure

1. **Introduction:** explains how the developer helps a business. Personal background appears below the main offer.
2. **Video introduction:** shows who you are and explains how you help a business.
3. **Services:** landing pages, business websites, and ecommerce stores, with a short description and deliverables for each. Edit these to match what you can actually offer.
4. **Projects:** the three example screenshots with descriptions and click-to-enlarge previews.
5. **Contact:** asks for the business name, project needs, and ideal launch timeframe, and explains the initial scope discussion.

## Project examples

1. **Mote One:** a fictional handheld vacuum product landing page. Screenshot supplied by Nick. The browser toolbar was removed from the preview.
2. **Rise and Shine Coffee:** a business website example. Screenshot supplied by Nick.
3. **Ecommerce store:** a reference screenshot of the real grüum store, supplied by Nick. Nick did not build this store. The page labels it as a design reference.

The project images open as larger screenshots. They do not lead to live projects. Before using this design as a personal freelance portfolio, replace reference images with your own work and update every claim, link, and description. Third-party brands and imagery remain the property of their respective owners.

The contact links open the visitor's email application with a subject and prompts for the business name, existing website, project needs, and ideal timeframe. The visitor reviews and sends the email themselves. The encoded subject and body are in the HTML links, so they can be edited without changing the JavaScript. There is no contact form backend or automated message delivery.

## Responsive workflow

For each section, finish the desktop layout, then tablet, then phone before starting the next section. Check the menu, every screenshot preview, email links, and keyboard navigation before publishing.

## Publish

Upload `index.html`, `style.css`, `app.js`, and the `img` folder to a static web host. No server-side configuration is needed.
