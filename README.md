# The Compassionate Law Project - Setup Guide

This guide will help you move the code from your browser to a live website.

## 1. Organizing your files
Inside your project folder, make sure the structure looks like this:

- `index.html`
- `index.tsx`
- `App.tsx`
- `package.json`
- `metadata.json`
- `README.md`
- `pages/` (A sub-folder)
  - `Home.tsx`
  - `Retreats.tsx`
  - `Trainings.tsx`
  - `About.tsx`
  - `Contact.tsx`

## 2. Photos
Place your photo files in the main folder (next to index.html):
- `vivek.jpg`
- `bridgette.jpg`
- `rick.png`

## 3. Deploying the Website (Getting it online)
1. Go to [Vercel.com](https://vercel.com) and sign up for a free account.
2. Click **"Add New"** > **"Project"**.
3. Choose **"Upload Folder"** and drag your entire project folder into the window.
4. Vercel will build your site and give you a link (e.g., `compassionate-law.vercel.app`).

## 4. Buying the Domain
If you haven't bought `compassionatelawproject.com` yet, you have two choices:
- **Option A (Easiest)**: Buy it directly through Vercel in their "Domains" settings tab. This handles all the technical setup for you.
- **Option B**: Buy it from a registrar like **Namecheap** or **Squarespace (Google Domains)**.

## 5. Connecting the Domain
1. In your Vercel Dashboard, go to your project settings and click **Domains**.
2. Type in `compassionatelawproject.com`.
3. If you bought the domain elsewhere, Vercel will give you two "DNS Records" (Nameservers or A Records). 
4. Copy those and paste them into the "DNS Settings" of wherever you bought your domain.
5. Wait about 1–2 hours for the "handshake" to complete.

Your site will then be live at your custom address!