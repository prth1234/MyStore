# MyStore

## 🛍️ Overview
Welcome to **MyStore**, a modern e-commerce frontend built with **React** and styled using **NeoPop by CRED**. This project provides a sleek and interactive shopping experience with smooth animations and a minimalistic design.

## 🚀 Features
- **Modern UI**: Styled using **NeoPop by CRED** for a unique look.
- **Fast & Responsive**: Optimized with React and Vite for speed.
- **Reusable Components**: Modular design for scalability.
- **Product Listings**: Displays items dynamically.
- **Cart Management**: Add, remove, and update items in the cart.
- **User Authentication**: Secure login and registration system.
- **Dark Mode**: Supports both light and dark themes.

## 🏗️ Tech Stack
- **React**: JavaScript library for building the UI.
- **NeoPop by CRED**: Design system for modern UI components.
- **Vite**: Lightning-fast development environment.
- **React Router**: For navigation and routing.
- **Styled Components**: For modular CSS styling.

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mystore.git
   cd mystore
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open in your browser:
   ```
   http://localhost:5173
   ```

## 📂 Project Structure
```
📦 mystore
├── 📁 src
│   ├── 📁 components    # Reusable UI components
│   ├── 📁 pages         # Page components (Home, Product, Cart, etc.)
│   ├── 📁 styles        # Global styles using styled-components
│   ├── 📁 utils         # Helper functions
│   ├── App.tsx         # Main application file
│   ├── main.tsx        # Entry point
│   ├── routes.tsx      # Routing configuration
├── 📄 package.json      # Dependencies & scripts
├── 📄 tsconfig.json     # TypeScript configuration
├── 📄 vite.config.ts    # Vite configuration
```

## 🎨 Using NeoPop Components
To use NeoPop components in the project, import them as follows:

```tsx
import { Button } from '@cred/neopop-web/lib/components';

const Example = () => {
  return (
    <Button variant="primary" kind="elevated" size="big" colorMode="dark">
      Shop Now
    </Button>
  );
};
```

## 🛠️ Development & Contribution
Feel free to contribute! If you find a bug or have an enhancement idea, open an issue or submit a pull request.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
Made with ❤️ by [Your Name]

