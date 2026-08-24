# Acharya Govind Shastri Website

A complete responsive static website built with HTML, CSS and JavaScript.

## Add the real contact details
Open `script.js` and edit the `SITE` object at the very top:
- phone
- whatsapp (country code + number, digits only is best)
- email
- location
- facebook

The YouTube channel is already configured.

## Quick preview
Open `index.html` in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on Netlify (easiest)
1. Go to https://app.netlify.com/drop
2. Drag the entire `govind-shastri-site` folder onto the page.
3. Netlify will publish it and give you a public URL.
4. You can later connect a custom domain in Netlify's Domain settings.

## Deploy on GitHub Pages
1. Create a new GitHub repository.
2. Upload all files from this folder, preserving the `assets` folder.
3. In the repository go to Settings → Pages.
4. Under Build and deployment select "Deploy from a branch".
5. Choose `main` and `/ (root)`, then save.

## Deploy on Vercel
1. Put the folder into a GitHub repository.
2. Sign into Vercel and import the repository.
3. Framework preset: "Other" / static site.
4. Deploy.

## Notes
- The contact form intentionally does not claim to send email. It prepares a WhatsApp enquiry.
- Real phone/email/Facebook details were not provided, so they are not guessed.
- All supplied photos are included locally in `assets/`.
