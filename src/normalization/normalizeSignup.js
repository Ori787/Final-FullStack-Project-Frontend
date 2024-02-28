const normalizeSignup = user => ({
    name: {
        first: user.first,
        middle: user.middle,
        last: user.last,
    },
    phone: user.phone,
    email: user.email,
    password: user.password,
    address: {
        state: user.state,
        country: user.country,
        zip: user.zip,
        city: user.city,
        street: user.street,
        houseNumber: user.houseNumber,
    },
    image: {
        url: user.url,
        alt: user.alt,
    },
    isBusiness: user.isBusiness,
});

export default  normalizeSignup;