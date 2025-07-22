import React from 'react';

import { Header } from '../header/Header';
import { MemberRow } from './MemberRow';

export const MemberTable = ({ members }) => (
  <>
    <Header addBtn="Add Member" addPath="/members/add" />
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
        <MemberRow members={members} />
      </tbody>
    </table>
  </>
);
