import React from "react";
import { isH5, isRestricted, isWeapp, warnNoImplementation } from "@/utils/platformGuard";

export interface AuthGuardProps {
}

export const AuthGuard: React.FC<AuthGuardProps> = (props) => {
  if (isRestricted()) {
    return null;
  }
  if (isWeapp()) {
    return <AuthGuardWeapp {...props}/>
  } else if (isH5()) {
    return <AuthGuardH5 {...props}/>
  }
  warnNoImplementation('AuthGuard')
  return null;
}

export const AuthGuardWeapp: React.FC<AuthGuardProps> = () => {
  return null;
}

export const AuthGuardH5: React.FC<AuthGuardProps> = () => {
  return null;
}
