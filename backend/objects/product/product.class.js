const { v4: uuidv4 } = require('uuid');

module.exports = class Product{

    constructor() {

        this.id = uuidv4();

        this.name = null;

        this.extra_descr = {
            color: "",
            potency: "",
            availability: "",
            effect: "",
            smell: "",
        };

        this.weights = [];

        this.imageUrls = [
            "",
            "",
            ""
        ];

        this.priceList = [
            { weight: "180g", price: 2100.00 },
            { weight: "30g", price: 400.00 },
            { weight: "90g", price: 900.00 },
        ];

        this.categories = [
            "hash",
            "hashish"
        ];

        this.reviews = [];

    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    toJSON(proto) {
        let jsoned = {};
        let toConvert = proto || this;
        Object.getOwnPropertyNames(toConvert).forEach((prop) => {
            const val = toConvert[prop];
            // don't include those
            if (prop === 'toJSON' || prop === 'constructor') {
                return;
            }
            if (typeof val === 'function') {
                jsoned[prop] = val.bind(jsoned);
                return;
            }
            jsoned[prop] = val;
        });

        const inherited = Object.getPrototypeOf(toConvert);
        if (inherited !== null) {
            Object.keys(this.toJSON(inherited)).forEach(key => {
                if (!!jsoned[key] || key === 'constructor' || key === 'toJSON')
                    return;
                if (typeof inherited[key] === 'function') {
                    jsoned[key] = inherited[key].bind(jsoned);
                    return;
                }
                jsoned[key] = inherited[key];
            });
        }
        return jsoned;
    }
}

