require('regenerator-runtime/runtime');
import '../styles/main.scss';
import { generateSecurePassword } from './api';

const form = document.querySelector('.securePasswordForm');

form.addEventListener('submit', generateSecurePassword);
