import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (triggerPoint: number) => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: triggerPoint});

    view ? controls.start('show') : controls.start('hidden');

    return [element, controls];
}