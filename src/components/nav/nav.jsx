import React, {useState, useEffect} from 'react';
import {_class, _class_active} from './nav.module.css';

const Nav = () => {
    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
        const listener = document.addEventListener("scroll", e => {
            window.scrollY >= 100 ? setScrollEnabled(true) : setScrollEnabled(false);
        });

        return () => {
            document.removeEventListener("scroll", listener);
        }
    }, [scrollEnabled])

    return (
        <div className={scrollEnabled ?_class + ' ' + _class_active : _class}>
            <p>Sort card</p>
        </div>
    )
}

export default Nav;
