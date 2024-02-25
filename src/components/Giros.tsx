// No arquivo ./components/Giros.tsx

import React, { useState } from "react";

export const Giros = () => {
    const [execInit, setExecInit] = useState(false);
    const [execFinal, setExecFinal] = useState(false);

    const handleExecInit = () => {
        setExecInit(true);
        setExecFinal(false);
    };

    const handleExecFinal = () => {
        setExecInit(false);
        setExecFinal(true);
    };

    return {
        execInit,
        execFinal,
        handleExecInit,
        handleExecFinal
    };
};
