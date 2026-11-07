# Discipline OS: deploy & use
## GitHub Pages + install
1. github.com > New repository > name `discipline-os` > Public > Create.
2. "uploading an existing file" > drag ALL files (keep the `icons/` folder) > Commit.
3. Settings > Pages > Source: "Deploy from a branch" > `main` / `/ (root)` > Save. Wait ~1 min.
4. Open `https://<username>.github.io/discipline-os/` in Chrome on Android (online once, so Chart.js is cached).
5. Menu (⋮) > Add to Home screen / Install app.
## Calendar alarms
Journal tab > Download Calendar Alarms (.ics) > open it on phone (or Google Calendar web > Settings > Import & export > Import) > choose your calendar. Daily events with alarms are created.
## Test checklist
Tick items, close app, reopen (persisted) · airplane mode (still loads) · Export then Import backup · next-day button disabled on today · urge screen timer · progress tabs show charts.
## Troubleshooting
Old version showing: bump `VERSION` in service-worker.js, redeploy, close and reopen twice. No install button: needs HTTPS (GitHub Pages is), a visit of a few seconds, and Chrome menu > Install app. Notifications on Android Chrome only work while app is open or recently active; use the .ics for reliable alarms.
## Extras added
Dua/Tahajjud, plan tomorrow's top 3, phone-free first hour: they support consistency and God-consciousness.

## v6 notes
- Upload ALL files: index.html, app.js, namaz.js, styles.css, service-worker.js, manifest.json, icons. Files go in repo root (no icons folder).
- Updates now arrive by themselves (network-first); a "Naya version aa gaya" bar appears. Still, never clear "site data" without Export Backup first.
- Backup now includes your edits (schedule, habits, topics, prayer times), theme, size, syllabus and surah tracker.
- Auto prayer times use the adhan library from a CDN; if the button says the library did not load, set times by hand in the Edit tab.
