# 🎨 [PixGen — AI Image Gallery Platform](https://pixgen-nine.vercel.app/)

> **Create. Imagine. Generate.** — A modern AI-powered gallery platform where users can explore, view, and interact with AI-generated images with authentication and protected routes.

🚀 [Visit the Live App](https://pixgen-nine.vercel.app/)  
📂 [GitHub Repository](https://github.com/Ahsanul-Islam-083/pixgen)

---

## 📖 Overview

**PixGen** is a full-stack AI image gallery platform that allows users to browse and explore stunning AI-generated artworks. Users can view categorized images, inspect detailed prompts, and manage their profiles after authentication. The project focuses on real-world full-stack concepts including protected routes, authentication, and modern UI design using Next.js App Router.

---

## 🖼️ Screenshot

<!-- 🔽 Replace these with your actual screenshots -->

<img width="1876" height="980" alt="image" src="https://github.com/user-attachments/assets/38e2c459-8c6d-4f60-98dc-d9beb9120606" />
<img width="1882" height="978" alt="image" src="https://github.com/user-attachments/assets/1700d55b-a662-4806-ae3c-5c2dd1c5a18a" />
<img width="1818" height="977" alt="image" src="https://github.com/user-attachments/assets/7d103bdc-c94b-4f09-be4c-042f4228cb32" />
<img width="1881" height="977" alt="image" src="https://github.com/user-attachments/assets/d1d9a5b4-2572-4be5-89a6-656733504e35" />


---

## 🚀 Features

- 🎨 **AI Image Gallery** — Explore AI-generated images across categories  
- 🔥 **Top Generations** — Featured images on homepage  
- 🖼️ **All Photos Page** — Grid-based image browsing  
- 🔍 **Photo Details Page** — Full prompt, model, tags, and stats  
- 🔐 **Authentication** — Email/password login system  
- 🌐 **Google Sign-In** — OAuth integration  
- 🔒 **Protected Routes** — Secure pages (`/photos/[id]`, `/profile`)  
- 👤 **Profile Management** — View & update profile  
- 🏷️ **Category Filtering** — Filter images by category  
- 🔄 **Callback Redirect** — Return after login  
- 📱 **Responsive Design** — Mobile-friendly UI  
- ⚡ **Optimized Performance** — Next.js App Router  

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.4 | Full-stack React framework |
| React | 19.2.4 | UI library |
| Tailwind CSS | ^4 | Styling |
| HeroUI | ^3.0.3 | UI components |
| BetterAuth | ^1.6.9 | Authentication |
| MongoDB | ^7.2.0 | Database |
| React Icons | ^5.6.0 | Icons |
| Gravity UI Icons | ^2.18.0 | Additional icons |

---

## 📦 Dependencies

```json
{
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "better-auth": "^1.6.9",
  "@better-auth/mongo-adapter": "^1.6.9",
  "mongodb": "^7.2.0",
  "@heroui/react": "^3.0.3",
  "@heroui/styles": "^3.0.3",
  "react-icons": "^5.6.0",
  "@gravity-ui/icons": "^2.18.0"
}
```


---
## 🏃 Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ahsanul-Islam-083/suncart.git
   cd suncart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   BETTER_AUTH_SECRET=your_secret_here
   BETTER_AUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in your browser**
   ```
   http://localhost:3000
   ```

---
## 🔐 Authentication Flow

- Users can register via **Email/Password** or **Google OAuth**.
- Sessions are managed securely by **BetterAuth** with a **MongoDB** adapter.
- Protected routes (`/photos/[id]`, `/profile`) automatically redirect unauthenticated users to the Sign-In page.
- After a successful login, users are redirected back to their original destination via a `callbackURL`.

---

## 🎮 How to Use

| Action | Result |
|---|---|
| Browse Homepage | View the hero banner and "Top Generations". |
| Filter All Photos | Use the category tabs to sort images (Realistic, Fantasy, etc.). |
| Click View Details | Access technical prompt data and resolution (Requires Login). |
| Visit Profile | View and update your name or profile image. |
| Register / Sign In | Unlock full access to the AI prompt database. |
| Sign Out | Securely clear your session and return to the home page. |

---

## 🤝 Contributing

Contributions make the AI community an amazing place to learn and create. Feel free to open an issue or submit a pull request for bug fixes, new feature ideas, or UI improvements.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> 🎨 *Unleash your digital imagination — Explore PixGen.*
