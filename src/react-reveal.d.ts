declare module 'react-reveal/Fade' {
  import React from 'react';

  interface FadeProps {
    children: React.ReactNode;
    fraction?: number;
    duration?: number;
    delay?: number;
    count?: number;
    cascade?: boolean;
    collapse?: boolean;
    when?: boolean;
    appear?: boolean;
    exit?: boolean;
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    big?: boolean;
    mirror?: boolean;
    opposite?: boolean;
    force?: boolean;
    ssrFadeout?: boolean;
    wait?: number;
    step?: number;
    spy?: number | string | boolean | object;
    enter?: string;
    enterActive?: string;
    exit?: string;
    exitActive?: string;
  }

  const Fade: React.FC<FadeProps>;

  export default Fade;
}
