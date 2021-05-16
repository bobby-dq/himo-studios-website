export const logoDisappear = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        }
    },
}

export const heroWaveAnimation = {
    hidden: {
        pathLength: 0,
        pathOffset: 1
    },
    show: {
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 1,
        }
    }
}