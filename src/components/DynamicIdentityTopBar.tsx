import React from 'react';
import { getEntityIdentity } from '@/lib/dynamicIdentity';
import { useDynamicIdentity } from './DynamicIdentityProvider';

interface DynamicIdentityTopBarProps {
  entityKey?: string;
  title?: string;
  showLogo?: boolean;
  className?: string;
}

export const DynamicIdentityTopBar: React.FC<DynamicIdentityTopBarProps> = ({
  entityKey,
  title,
  showLogo = true,
  className = '',
}) => {
  const { identity } = useDynamicIdentity();
  const currentIdentity = identity || (entityKey ? getEntityIdentity(entityKey) : null);

  if (!currentIdentity) {
    return null;
  }

  const topBarStyles: React.CSSProperties = {
    background: 'transparent',
    backdropFilter: 'blur(10px)',
    color: currentIdentity.colors.primary,
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderBottom: `2px solid ${currentIdentity.colors.primary}`,
    fontFamily: currentIdentity.fonts[0],
  };

  return (
    <div className={className} style={topBarStyles}>
      {/* Logo removed - only show title */}
      {title && (
        <span className="text-xl font-bold">{title}</span>
      )}
    </div>
  );
};

export default DynamicIdentityTopBar;
