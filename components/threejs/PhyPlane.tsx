import { usePlane } from '@react-three/cannon';
import { Plane } from '@react-three/drei';
import { NextPage } from 'next';
import React from 'react';

interface PhyPlaneProps {
  color: string;
  [x: string]: any;
}

const PhyPlane: NextPage<PhyPlaneProps> = ({
  color,
  ...props
}): JSX.Element => {
  const [ref] = usePlane(() => ({ ...(props as any) }));

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  );
};

export default PhyPlane;
