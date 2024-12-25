'use client';
// src/app/change-logs/page.tsx
import Change20240905 from './changes/change-20240905/Change20240905';
import Change20241203 from './changes/change-20241203/Change20241203';
import Change20241211 from './changes/change-20241211/Change20241211';

const ChangeLogsPage = () => {
  return (
    <>
      <h1>Change Logs</h1>
      <Change20241211 />
      <Change20241203 />
      <Change20240905 />
    </>
  );
};

export default ChangeLogsPage;
