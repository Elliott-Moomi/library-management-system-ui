import React from 'react';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import '../../stylesheet/item-detail.scss';

export const MemberDetail = ({ member, onClose }) => {
  return (
    <dialog open>
      <button onClick={onClose}>
        <CloseIcon />
      </button>

      <h1>
        {member.firstName} {member.lastName}
      </h1>
      <dl>
        <dt>ID:</dt>
        <dd>{member.id}</dd>

        <dt>First Name:</dt>
        <dd>{member.firstName}</dd>

        <dt>Last Name:</dt>
        <dd>{member.lastName}</dd>

        <dt>Age:</dt>
        <dd>{member.age}</dd>

        <dt>Email:</dt>
        <dd>{member.email}</dd>

        <dt>Contact:</dt>
        <dd>{member.contact}</dd>

        <dt>Books</dt>
        <dd>UNKNOWN</dd>
      </dl>
    </dialog>
  );
};
