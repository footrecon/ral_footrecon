# RA-L Project Page

Static GitHub Pages template for an IEEE Robotics and Automation Letters project page.

## Edit

Replace the placeholders in `index.html`:

- Paper title, venue year, authors, affiliations
- PDF, arXiv, code, and video links
- Abstract
- Method cards
- Result figures and captions
- BibTeX entry
- Contact email

Put images, teaser figures, and videos in `assets/`, then reference them from
`index.html`, for example:

```html
<img src="assets/teaser.png" alt="Overview of the proposed method" />
```

## Publish With GitHub Pages

1. Create a GitHub repository, for example `ral-project-page`.
2. Upload `index.html`, `style.css`, and the `assets/` folder to the repository root.
3. In GitHub, open `Settings` → `Pages`.
4. Under `Build and deployment`, select `Deploy from a branch`.
5. Choose branch `main` and folder `/root`, then save.
6. The site will appear at:

```text
https://YOUR_USERNAME.github.io/ral-project-page/
```

For a user or lab homepage repository named `YOUR_USERNAME.github.io`, place these
files at the repository root and the site will appear at:

```text
https://YOUR_USERNAME.github.io/
```
