# Umme Habeeba - UI/UX Designer Portfolio

A modern, responsive portfolio website built with React.js showcasing the work and skills of UI/UX Designer Umme Habeeba.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Navigation**: Smooth scrolling navigation with mobile-friendly hamburger menu
- **Sections**: Home, About, Skills, Projects, and Contact
- **Contact Form**: Functional contact form for inquiries
- **Social Links**: Integration with Behance portfolio

## Technologies Used

- **React.js**: Frontend framework
- **CSS3**: Styling with modern features (Grid, Flexbox, Animations)
- **HTML5**: Semantic markup
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
client/
├── public/
│   └── index.html
├── components/
│   ├── Home.js
│   ├── Home.css
│   ├── About.js
│   ├── About.css
│   ├── Skills.js
│   ├── Skills.css
│   ├── Projects.js
│   ├── Projects.css
│   ├── Contact.js
│   └── Contact.css
├── App.js
├── App.css
├── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be created in the `build` directory.

## Sections Overview

### Home
- Hero section with name and title
- Contact information
- Call-to-action buttons
- Profile placeholder

### About
- Professional summary
- Education details
- Language skills

### Skills
- Design skills grid
- Tools and technologies
- Interactive hover effects

### Projects
- Portfolio preview
- Link to Behance profile
- Project types showcase

### Contact
- Contact information
- Contact form
- Social media links

## Customization

### Colors
The primary color scheme uses a gradient from `#667eea` to `#764ba2`. You can modify these values in the CSS files to match your preferred color scheme.

### Fonts
The project uses the Inter font family from Google Fonts. You can change this in the `public/index.html` file.

### Content
All content is managed through the respective component files. Simply edit the text in each component to update the information.

## Deployment

This portfolio can be deployed to various platforms:

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the build folder to an S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

- **Email**: mhabeeba2004@gmail.com
- **Phone**: +91 8247271977
- **Portfolio**: https://www.behance.net/ummehabeeba

---

Built with ❤️ using React.js
