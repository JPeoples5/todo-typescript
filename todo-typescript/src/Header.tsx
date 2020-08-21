import React from 'react';
import './App.css';
import { FormContent } from './FormContent';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <span>
          Todo List
          </span>
      </header>

      <FormContent />
    </div>
  );
}

