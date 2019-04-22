import React from 'react';
import { ReactComponent as EmptyStateIllustration } from '../icons/drawkit-nature-man-colour.svg';

function EmptyState() {
  return (
    <div className="empty-state-container">
      <EmptyStateIllustration />
      <p className="empty-state-text">Your todolist is empty</p>
    </div>
  );
}

export default EmptyState;
