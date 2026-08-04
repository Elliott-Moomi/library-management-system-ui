import { useMemo, useState } from 'react';

import { MemberDeleteContainer } from '../../container/member/MemberDelete.container';
import { MemberEditContainer } from '../../container/member/MemberEdit..container';

import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as ViewIcon } from '../../icons/view.svg';

import { MemberDetail } from './MemberDetail';

export const MemberRow = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [dialogType, setDialogType] = useState('');

  const handleOpenDialog = (member, type) => {
    setSelectedMember(member);
    setDialogType(type);
    console.log('memeber state', selectedMember, dialogType);
  };

  const handleCloseDialog = () => {
    setSelectedMember(null);
    setDialogType('');
  };

  const rows = useMemo(() => {
    return members.map((member) => (
      <tr key={member.id}>
        <td>{member.firstName}</td>
        <td>{member.lastName}</td>
        <td>{member.age}</td>
        <td>{member.email}</td>
        <td>{member.contact}</td>
        <td>
          <button onClick={() => handleOpenDialog(member, 'view')}>
            <ViewIcon />
          </button>
        </td>
        <td>
          <button onClick={() => handleOpenDialog(member, 'edit')}>
            <EditIcon />
          </button>
        </td>
        <td>
          <button onClick={() => handleOpenDialog(member, 'delete')}>
            <DeleteIcon />
          </button>
        </td>
      </tr>
    ));
  }, [members]);

  return (
    <>
      {selectedMember && dialogType === 'edit' && (
        <MemberEditContainer member={selectedMember} onClose={handleCloseDialog} />
      )}
      {selectedMember && dialogType === 'view' && (
        <MemberDetail member={selectedMember} onClose={handleCloseDialog} />
      )}
      {selectedMember && dialogType === 'delete' && (
        <MemberDeleteContainer member={selectedMember} onClose={handleCloseDialog} />
      )}
      {rows}
    </>
  );
};
