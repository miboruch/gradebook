import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ReactComponent as Scene } from '../../../assets/icons/scene.svg';

const SceneWrapper = styled.div`
  width: 700px;
  height: 700px;
  justify-content: center;
  align-items: center;
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const LoginScene = () => {
  const scene = useRef(null);

  useEffect(() => {
    const [elements] = scene.current.children;
    const character = elements.getElementById('character');
    const mainTable = elements.getElementById('mainTable');
    const rightTable = elements.getElementById('rightTable');
    const leftTable = elements.getElementById('leftTable');
    const mainBoxes = elements.getElementById('mainBoxes');
    const shadow = elements.getElementById('shadow');

    gsap.set([character, mainTable, rightTable, leftTable], { autoAlpha: 0 });
    gsap.set([...mainBoxes.children], { autoAlpha: 0, x: '-=60' });
    gsap.set(shadow, { transformOrigin: '50% 50%', autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'Power3.inOut' } });

    tl.to(shadow, { autoAlpha: 1, duration: 0.3 })
      .fromTo(character, { x: '-=100', y: '+=100' }, { x: '0', y: '0', duration: 1, autoAlpha: 1 })
      .fromTo(mainTable, { y: '-=150' }, { y: '0', autoAlpha: 1, duration: 0.7 })
      .fromTo(leftTable, { y: '-=60' }, { y: '0', autoAlpha: 1, duration: 1.3 }, '-=0.25')
      .fromTo(rightTable, { y: '-=30' }, { y: '0', autoAlpha: 1, duration: 0.7 }, '-=0.1')
      .fromTo(shadow, { scaleX: 0.55 }, { scaleX: 1, duration: 0.3 }, '-=1')
      .to(mainBoxes.children, { x: '0', autoAlpha: 1, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <SceneWrapper ref={scene}>
      <Scene />
    </SceneWrapper>
  );
};

export default LoginScene;
