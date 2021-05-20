export const pageAnimation = {
    hidden: {
        opacity: 0,
        x: -300,
    },

    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.33,
            when: 'beforeChildren',
            staggerChildren: 0.10
        }
    },

    exit: {
        x: -300,
        opacity: 0,
        transition: {
            duration: 0.33
        }
    }
}

export const workAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },

    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.33,
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
        scale: 0.1
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            when: 'beforeChildren',
            staggerChildren: 0.10
        }
    }
}

export const textSlideInAnimation = {
    hidden: {
        x: -500,
    },
    show: {
        x: 0,
        transition: {
            duration: 0.33,
            ease: "easeOut"
        }
    }
}

export const heroImageReveal = {
    hidden: {
        opacity: 0,
        scale: 2,
    },
    show: {
        opacity: 1,
        scale: 1, 
        transition:  {
            duration: 1,
        }
    }
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        transition: {
            duration: 0.33
        }
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.33,
            when: 'beforeChildren',
            staggerChildren: 0.10
        }
    }
}

export const titleLineReveal = {
    hidden: {
        width: '0%'
    },
    show: {
        width: '50%',
        transition: {
            duration: 0.33
        }
    }
}

export const singleServiceLoadReveal = {
    hidden: {
        opacity: 0,
        scale: 0.75,
    },
    show: {
        opacity:1,
        scale: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut"
        }
    }
}

export const arrowQAnimation = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    show: {
        opacity:1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: "easeOut"
        }
    }
}

export const sliderAnim = {
    hidden: {
        x: `-130%`,
        skew: '45deg'
    },

    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: 'easeOut',
            duration: 1,
        }
    }
}

export const sliderContainerAnim = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            ease: 'easeOut'
        }
    }
}

export const homeContainerAnim = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            ease: 'easeOut'
        }
    }
}

export const openingAnim = {
    hidden: {
        opacity: 1 
    },
    show: {
        opacity: 0,
        transition: {
            duration: 1,
            ease: 'easeOut',
            staggerChildren: 0.25,
            when: 'beforeChildren'
        }
    },
}