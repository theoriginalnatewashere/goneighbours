<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Sitemap
- Derive sitemap URLs from explicit required `staticData.sitemap` route decisions; exclude layouts and endpoints so new public pages stay discoverable without exposing non-content routes.
- Omit sitemap lastmod unless an authoritative page-specific content timestamp exists; generation time is not a content change.
