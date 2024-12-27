// Theme utility for managing dark mode
export type Theme = 'light' | 'dark';

export const COLORS = {
  dark: {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#FFD700',
    text: {
      primary: '#E0E0E0',
      secondary: '#A0A0A0'
    }
  },
  light: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    primary: '#FFD700',
    text: {
      primary: '#333333',
      secondary: '#666666'
    }
  }
} as const;