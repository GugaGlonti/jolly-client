import { PropsWithChildren } from 'react';

interface GroupProps {
  center?: boolean;
}
export function Group({ center = false, children }: PropsWithChildren<GroupProps>) {
  const centerClasses =
    center &&
    ` absolute left-1/2 transform -translate-x-1/2 text-center justify-center items-center
      h-16
    `;

  return <div className={'flex items-center space-x-4' + centerClasses}>{children}</div>;
}
