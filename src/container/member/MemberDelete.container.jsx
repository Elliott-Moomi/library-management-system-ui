import { useDispatch } from 'react-redux';

import { deleteMember } from '../../state/member/member.slice';

import { MemberDelete } from '../../components/member/MemberDelete';

export const MemberDeleteContainer = ({ member, onClose }) => {
  const dispatch = useDispatch();
  const handleDeleteMember = (member) => {
    dispatch(deleteMember(member));
  };

  return <MemberDelete member={member} onClose={onClose} handleDeleteMember={handleDeleteMember} />;
};
