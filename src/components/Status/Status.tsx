import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type DesignTagProps = {
  isAvailable: boolean;
};

const DesignTag: React.FC<DesignTagProps> = ({ isAvailable }) => {
  const backgroundColor = isAvailable ? '#D9F9E6' : '#FDE9E9';
  const color = isAvailable ? '#2F9461' : '#CD3636';
  const children = isAvailable ? 'Available' : 'Owned';

  return (
    <div
      className="rounded-[6px] leading-5 py-[2px] px-2 text-xs text-start flex items-center gap-[5px]"
      style={{
        background: backgroundColor,
        color: color,
      }}
    >
      <FiberManualRecordIcon style={{ width: '8px', height: '8px' }} />
      {children}
    </div>
  );
};

export default DesignTag;