'use client';

import {motion} from "framer-motion";

interface Props {
    children: any;
}

const PageWrapper = ({children}: Props) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.4 }}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper;
