import { ROUTE } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

export default function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={ROUTE.home}>Profile</Link>
        </li>
        <li>
          <Link href={ROUTE.avatarEdit}>Edit Avatar</Link>
        </li>
      </ul>
    </nav>
  );
}
