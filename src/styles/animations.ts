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

export const heroTitleAnimation = {
    hidden: {
        y: '4rem'
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        }
    }
}

export const glowingButtonAnimation = {
    hidden: {
        boxShadow: '0px 0px 0px 0px #43A4980',
        opacity: 0
    },
    show: {
        opacity: 1,
        boxShadow: '5px 5px 100px 10px #43A498',
        transition: {
            duration: 0.33,
            ease: "easeOut"
        }
    }

}

export const sectionLoadAnimation = {
    hidden: {
        opacity: 0,
        scale: 3
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
            when: 'beforeChildren',
            staggerChildren: 0.25
        }
    }
}

export const textFadeInAnimation = {
    hidden: {
        x: -1000,
    },
    show: {
        x: 0,
        transition: {
            duration: 0.33,
            ease: "easeOut"
        }
    }
}