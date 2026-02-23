import { useDispatch } from 'react-redux';

import { addMember } from '../../state/member/member.slice';

import { MemberCreate } from '../../components/member/MemberCreate';

export const MemberCreateContainer = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleAddMember = (member) => {
    dispatch(addMember(member));
  };

  return <MemberCreate handleAddMember={handleAddMember} onClose={onClose} />;
};
