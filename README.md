# 📰 NewsMania

NewsMania is a modern, high-performance news aggregation platform built with **TanStack Start**, **React**, and **Supabase**. It provides a sleek, glassmorphic interface for browsing the latest headlines, searching for specific topics, and saving articles for later reading.

![NewsMania Banner](https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200&h=400)

## ✨ Features

- **Real-time News Feed**: Stay updated with the latest news across various categories.
- **Smart Search**: Quickly find articles on any topic using our integrated search functionality.
- **Category Navigation**: Browse news by categories like Technology, Business, Sports, Entertainment, and more.
- **Save for Later**: Registered users can save articles to their personal collection for offline reading.
- **User Authentication**: Secure login and signup powered by Supabase Auth.
- **Personalized Settings**: Customize your reading experience with a dedicated settings dashboard.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Premium UI**: Built with a modern glassmorphic aesthetic using Tailwind CSS 4.0 and Radix UI.

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/guide/start/overview) (React Router + Vite)
- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Runtime**: [Bun](https://bun.sh/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 🛠️ Project Structure

```text
src/
├── components/     # UI components (Header, NewsCard, NewsFeed, etc.)
│   └── ui/         # Base Radix-UI/Shadcn components
├── hooks/          # Custom React hooks
├── integrations/   # Supabase client and third-party integrations
├── lib/            # Utility functions and shared logic
├── routes/         # TanStack Router page definitions
│   ├── auth.tsx    # Login/Signup page
│   ├── index.tsx   # Homepage/Feed
│   ├── saved.tsx   # Bookmarked articles
│   └── search.tsx  # Search results
└── styles.css      # Global styles and Tailwind configuration
```

## 🏁 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A Supabase project (for database and authentication).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/NewsMania.git
   cd NewsMania
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   bun dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to see the app in action.

## 📦 Deployment

This project is configured for deployment on **Cloudflare Pages**.

To build the project:
```bash
bun build
```

The build output will be in the `dist` directory, ready for deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Rakshit](https://github.com/rakshitkumar0606-gif)
