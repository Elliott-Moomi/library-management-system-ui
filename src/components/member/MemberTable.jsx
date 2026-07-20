import React, { useState } from 'react';

import { EmptyState } from '../empty-state/EmptyState';

import { MemberCreateContainer } from '../../container/member/MemberCreate.container';

import { Header } from '../header/Header';
import { MemberRow } from './MemberRow';

export const MemberTable = ({ members }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <Header addBtn="Add Member" onAddClick={() => setIsAddModalOpen(true)} />
      {isAddModalOpen && <MemberCreateContainer onClose={() => setIsAddModalOpen(false)} />}
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Books</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.length > 0 ? (
            <MemberRow members={members} />
          ) : (
            <tr>
              <td colSpan={8}>
                <EmptyState message="No members found" />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
