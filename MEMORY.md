# Project Memory

Persistent learnings for working on this repo. Add dated entries when we discover non-obvious behavior.

---

## Framer CMS body text on static mirrors (2026-06-08)

**Context:** Blog-style day subpages (`day/classes.html`, `day/rare-cancer-research.html`, etc.) have a CMS-driven **Body Text** block (`class="framer-1dofo8w"`, `data-framer-name="Body Text"`) below the hero image.

**Problem:** Injecting body HTML into the static file is not enough. After load, Framer's client-side hydration can **wipe** the body text, leaving an empty gap before the next section (e.g. "OTHER PROGRAMS").

**Root cause:** Framer fetches live CMS data from `framerusercontent.com` (`*.framercms`) at runtime. That chunk can contain **stale/empty** body content for a collection item even when:
- SSR HTML has the correct text, and
- `__framer__handoverData` includes a `richtext` entry with the correct content.

On `day/classes.html`, the full `chunk-default-0.framercms` fetch overwrote handover data with an empty body. `day/rare-cancer-research.html` worked because its CMS entry already had body text in the chunk.

**What is required (all of the following for CMS body edits):**

1. **SSR HTML** — Inject inner HTML into **both** breakpoint variants of the Body Text div (desktop: `hidden-tmwu0e`, mobile: `hidden-1f76j9k hidden-865e7o`).
2. **Handover data** — Update `id="__framer__handoverData"` with the live Framer `richtext` payload (copy from https://alivefest.framer.website/…, swap image URLs to local `image_assets/` paths).
3. **Visibility** — Set Body Text SSR `style` to `opacity:1;transform:none` (hydration resets to `opacity:0;transform:translateY(30px)` and no appear animation may run).
4. **Post-hydration restore script** — In `<!-- Start of bodyEnd -->`, add a script that re-injects the body HTML if Framer clears it after CMS load. See `day/classes.html` for the working pattern (`restoreBodyText`).

**Verification:**

- Serve locally: `python3 -m http.server 8000 -d allivefest.website` (do not rely on `file://`).
- Hard-refresh and wait for hydration (~3–5s).
- Confirm text survives after network idle, not just in view-source.
- Blocking `*.framercms` in dev tools is a useful diagnostic: if content appears only when CMS is blocked, handover is fine but the CMS chunk is stale.

**Reference:** Live content source: https://alivefest.framer.website/day/classes
