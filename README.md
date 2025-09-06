# 3D Print Store

A modern, responsive website for showcasing and ordering custom 3D prints.

## Features

- Modern, minimalist design with a bi-color scheme
- Responsive layout for all devices
- Product showcase with animations
- Shopping cart functionality
- Easy to customize and extend

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion for animations
- Heroicons for icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This site is configured for GitHub Pages deployment. To deploy:

1. Build the project:
```bash
npm run build
```

2. Export the static site:
```bash
npm run export
```

3. Push the contents of the `out` directory to your GitHub Pages branch.

## Customization

- Colors can be modified in `tailwind.config.js`
- Products can be added in the `products` array in `pages/index.js`
- Font can be changed by updating the Google Fonts import in `styles/globals.css`

## License

MIT 