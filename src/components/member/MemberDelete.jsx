import React from 'react';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

export const MemberDelete = ({ member, onClose, handleDeleteMember }) => {
  const handleSubmit = () => {
    handleDeleteMember(member.id);

    alert('Member has been deleted successfully!');
    onClose();
  };

  return (
    <dialog className={'delete'} open>
      <button onClick={onClose}>
        <CloseIcon />
      </button>

      <h1>Remove Member</h1>
      <p>
        Are you sure that you would like to remove "{member.firstName} {member.lastName}"? This
        action cannot be undone.
      </p>
      <button onClick={handleSubmit}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </dialog>
  );
};
