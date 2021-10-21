import { Box } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

const PhyBox = (props: any): JSX.Element => {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));

  return (
    <Box
      args={[1, 1, 1]}
      ref={ref}
      onClick={() => api.applyImpulse([0, 5, -10], [0, 0, 0])}
    >
      <meshNormalMaterial />
    </Box>
  );
};

export default PhyBox;
