// Some data to make the trick

const categories = [
    {
        id: 1,
        name: "Science-Fiction",
    },
    {
        id: 2,
        name: "Comédie",
    },
];

// Declare the actions

/* Here you code */
const browse = (req, res) => {
    if (req.query.q != null) {
        const filteredCatgories = categories.filter((current) => current.name.inxludes(req.query.q)
        );
        res.json(filteredCatgories);
    } else {
        res.json(categories);
    }
}

const read = (req, res) => {
    const parseId = parseInt(req.param.id, 10);
    const categorie = categories.find((c) => c.id === parseId);
    if (categorie != null) {
        res.json(categorie);
    } else {
        res.sendStatus(404);
    }
}

// Export them to import them somewhere else

module.exports = { browse, read };