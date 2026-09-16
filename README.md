# Sourabh - 1st Year Mechanical Engineering Portfolio Website

A clean, simplistic, minimalistic, light-themed personal portfolio website built with modern HTML5, CSS3, and lightweight vanilla JavaScript.

---

## 📁 File Structure

```text
Sourabh_Portfolio/
│
├── index.html           # Page 1: Home (Photo, Name, 2-line intro, highlights)
├── about.html           # Page 2: My Story, Hobbies, Education, Achievements
├── skills.html          # Page 3: 6 Skill boxes with meters, Certifications, Download Resume button
├── contact.html         # Page 4: Contact info (Phone, Address, Instagram, LinkedIn, GitHub) + Form
│
├── css/
│   └── style.css        # Minimalist light design system, responsive layout & typography
│
├── js/
│   └── main.js          # Mobile navigation drawer, meter animations, form feedback
│
├── assets/
│   ├── images/
│   │   └── avatar-placeholder.svg  # Minimalist avatar placeholder
│   └── Sourabh_Resume.pdf          # Pre-configured resume PDF file ready to download
│
└── README.md            # Customization guide
```

---

## 🚀 How to View the Website
Simply double-click **`index.html`** in this folder to launch the website in Chrome, Edge, Firefox, or Safari. No local server or installation needed!

---

## ✏️ How to Customize Your Information

Every file has clear HTML comments (e.g. `<!-- EDIT: ... -->`) pointing directly to what you can modify:

### 1. Change Your Name and 2-Line Intro (`index.html`)
- Open `index.html` in VS Code or Notepad.
- Search for `<!-- EDIT: YOUR NAME -->` and update **Sourabh**.
- Search for `<!-- EDIT: YOUR 2-LINE INTRODUCTION -->` and update the two lines describing yourself.

### 2. Replace Your Profile Photo (`index.html`)
- Save your portrait photo in `assets/images/` (e.g. `assets/images/my-photo.jpg`).
- In `index.html`, find the `<img id="profileImage">` tag and update:
  ```html
  <img src="assets/images/my-photo.jpg" alt="Sourabh - Mechanical Engineering Student">
  ```

### 3. Edit My Story, Education, Achievements & Hobbies (`about.html`)
- Open `about.html`.
- Under `<section class="story-card">`, change the paragraphs to tell your personal journey.
- Under `<h2>My Education</h2>`, replace the college name, board, and marks.
- Under `<h2>Achievements</h2>`, update your competition wins, science fair awards, or school accolades.
- Under `<h2>My Hobbies & Interests</h2>`, modify the 4 cards with your favorite pastimes.

### 4. Adjust Skills and Proficiency Meters (`skills.html`)
- Open `skills.html`.
- Each skill box looks like this:
  ```html
  <div class="skill-info">
    <h3>SolidWorks / 3D CAD Modeling</h3>
    <span class="skill-category">Parametric Part Design</span>
  </div>
  <span class="skill-pct">75%</span>
  ...
  <div class="meter-fill" data-progress="75" style="width: 75%;"></div>
  ```
- Change the skill name, change `75%` to your desired level, and change `data-progress="75"` and `style="width: 75%;"` to match!

### 5. Replace the Resume PDF (`skills.html`)
- A working template resume is already included at `assets/Sourabh_Resume.pdf`.
- When you have your own PDF resume ready, simply rename it to `Sourabh_Resume.pdf` and paste it inside the `assets/` folder to overwrite it.

### 6. Update Contact Details & Social Profiles (`contact.html`)
- Open `contact.html`.
- Look for `<h5>Phone Number</h5>` and update the phone number and `tel:` link.
- Look for `<h5>Email Address</h5>` and update the email and `mailto:` link.
- Look for `<h5>Address & Location</h5>` and update your campus or city address.
- In the **Social & Developer Profiles** section, replace:
  - `https://linkedin.com/in/your-linkedin-handle` with your LinkedIn link.
  - `https://github.com/your-github-username` with your GitHub link.
  - `https://instagram.com/your-instagram-handle` with your Instagram link.

---

## 🌐 Free Hosting Options
When you're ready to share your portfolio with recruiters or friends:
- **GitHub Pages**: Upload this folder to a GitHub repository, go to **Settings > Pages**, and set the branch to `main`.
- **Vercel / Netlify**: Drag-and-drop this entire folder onto [app.netlify.com/drop](https://app.netlify.com/drop) or Vercel for instant live hosting.
