# AutoVimms — Landing Page

Official landing page for AutoVimms — intelligent automations, digital marketing, landing pages, and online menus for businesses.

---

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3
- Font Awesome 6.5
- Google Fonts (Inter)

---

## 📁 Project Structure

```bash
AutoVimms-LandingPage/
├── index.html
├── style.css
├── main.js
└── assets/
    └── auto-vimms-logo.png
```

---

## 🚀 Running Locally

1. Clone the repository (see SSH setup below)
2. Open the folder in VSCode
3. Install the **Live Server** extension by Ritwick Dey
4. Right-click `index.html` → **Open with Live Server**
5. Access:

```bash
http://127.0.0.1:5500
```

in your browser.

---

# 🔑 SSH Setup for Organization Members

Every member needs to configure a dedicated SSH key for the Auto-Vimms organization.

Follow the steps below:

---

## 1. Generate the SSH key

```bash
ssh-keygen -t ed25519 -C "your-email@gmail.com"
```

When asked where to save the key, enter the full path:

```bash
~/.ssh/id_ed25519_autovimms
```

When asked for a passphrase, you can leave it empty (press Enter) or set a password.

---

## 2. Copy the public key

### Mac

```bash
pbcopy < ~/.ssh/id_ed25519_autovimms.pub
```

### Linux

```bash
cat ~/.ssh/id_ed25519_autovimms.pub
```

Copy the output.

### Windows

```bash
cat ~/.ssh/id_ed25519_autovimms.pub | clip
```

---

## 3. Add the key to GitHub

1. Go to your GitHub account
2. Click your profile photo → **Settings**
3. Open **SSH and GPG keys**
4. Click **New SSH key**
5. Title: `AutoVimms`
6. Paste the copied key
7. Click **Add SSH key**

---

## 4. Configure the SSH config file

Open or create the file:

```bash
~/.ssh/config
```

Example using Nano:

```bash
nano ~/.ssh/config
```

Add the following at the end of the file:

```bash
Host github-autovimms
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_autovimms
```

Save with:

```bash
Ctrl + O → Enter → Ctrl + X
```

---

## 5. Test the connection

```bash
ssh -T git@github-autovimms
```

Expected response:

```bash
Hi your-username! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 6. Clone the repository

```bash
git clone git@github-autovimms:Auto-Vimms/AutoVimms-LandingPage.git
```

---

# 📌 Notes

- Each member uses their own personal GitHub account to access the organization
- The AutoVimms SSH key does not interfere with other SSH keys already configured
- To contribute, create a branch with your feature name:

```bash
git checkout -b feat/feature-name
```