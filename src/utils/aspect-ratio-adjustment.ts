function cardAjustment(rat: string | number) {
    if (typeof rat === "string") {
        rat = Number.parseFloat(rat);
    }

    if (rat > 1) {
        const val = rat - 1;
        const basis = 20 + (val * 3) / 2;
        return `${basis}%`;
    }
    const val = rat - 1;
    const basis = 10 - (val * 3) / 2;
    return `${basis}%`;
}

const aspectRatioAjustment = {
    card: cardAjustment,
};

export default aspectRatioAjustment;
