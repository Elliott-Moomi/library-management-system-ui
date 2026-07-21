import { useDispatch } from 'react-redux';

import { editMember } from '../../state/member/member.slice';

import { MemberEdit } from '../../components/member/MemberEdit';

export const MemberEditContainer = ({ member, onClose }) => {
  const dispatch = useDispatch();
  const handleEditMember = (member) => {
    dispatch(editMember(member));
  };
  return <MemberEdit member={member} onClose={onClose} handleEditMember={handleEditMember} />;
};
