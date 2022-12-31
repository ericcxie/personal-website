import React from 'react';
import { Transition } from "@headlessui/react";

export default function SlideUp({ children }) {
    return <Transition 
    show={true} 
    enter="transform transition ease-in-out duration-1000" 
    enterFrom="opacity-0 translate-y-full" 
    enterTo="opacity-100 translate-y-0" 
    leave="transform transition ease-in-out duration-1000" 
    leaveFrom="opacity-100 translate-y-0" 
    leaveTo="opacity-0 translate-y-full"
    >{children}</Transition>;
}
