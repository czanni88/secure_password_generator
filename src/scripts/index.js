require('regenerator-runtime/runtime');
import '../styles/main.scss';
import { generateSecurePassword } from './functions';

const form = document.querySelector('.securePasswordForm');

form.addEventListener('submit', generateSecurePassword);
