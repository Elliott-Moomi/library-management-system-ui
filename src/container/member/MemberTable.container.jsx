import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMembers } from '../../state/member/member.slice';

import { MemberTable } from '../../components/member/MemberTable';

export const MemberTableContainer = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members);

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return <MemberTable members={members} />;
};
