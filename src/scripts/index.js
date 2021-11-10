require('regenerator-runtime/runtime');
import '../styles/main.scss';
import { generateSecurePasswords } from './api';

const form = document.querySelector('.securePasswordForm');

form.addEventListener('submit', generateSecurePasswords);
