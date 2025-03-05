import './styles.css';
import './components/App';

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const app = document.createElement('book-app');
  document.getElementById('app')?.appendChild(app);
}); 