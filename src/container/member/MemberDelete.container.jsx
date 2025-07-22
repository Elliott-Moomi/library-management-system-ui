import { MemberDelete } from '../../components/member/MemberDelete';

export const MemberDeleteContainer = ({ member, onClose }) => (
  <MemberDelete member={member} onClose={onClose} />
);
