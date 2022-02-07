import MoonWalkerIcon from "./moonwalker"
import StarsIcon from "./stars"
import { useSpring, animated } from 'react-spring'

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.06];

const trans = (x: number, y: number, s: number) => `perspective(1000px) rotateX(${-x}deg) rotateY(${-y}deg) scale(${s})`;
const trans2 = (x: number, y: number, s: number) => `scale(${s})`;

function LaunchIcon() {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));
    const [props2, set2] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));
    return (
        <div className="relative"
            onMouseMove={ ({ clientX: x, clientY: y }) => {
                set.start({ xys: calc(x, y)})
                set2.start({ xys: [0, 0, 1.4]}) 
            }}
            onMouseLeave={() => {
                set.start({ xys: [0, 0, 1] })
                set2.start({ xys: [0, 0, 1] })
            }}
        >
            <animated.div style={{ transform: props.xys.to(trans) }} className="">
                <svg viewBox="0 0 860 820">
                    <StarsIcon/>
                </svg>
            </animated.div>
            <animated.div style={{ transform: props2.xys.to(trans2) }} className="absolute inset-0">
                <svg viewBox="0 0 860 820">
                    <MoonWalkerIcon/>
                </svg>
            </animated.div>
        </div>
    )
}

export default LaunchIcon