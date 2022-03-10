const { convert } = require('any-to-any')

module.exports = {
    bmiFormula: (berat, tinggi) => {
        var index = berat / ((tinggi / 100) ** 2);
        var status = "";

        switch (true) {
            case index < 18.5:
                status = "underweight";
                break;
            case index < 25:
                status = "normal";
                break;
            case index < 30:
                status = "overweight";
                break;
            case index < 35:
                status = "obese class 1";
                break;
            case index < 40:
                status = "obese class 2";
                break;
            case index >= 40:
                status = "obese class 3";
                break;
            default:
                break;
        }

        return { index: index.toFixed(2), status };
    },

    cicilanFormula: (pokok, bunga, periode) => {
        var result = pokok / periode + ((pokok / periode) * (bunga / 100))
        return result.toFixed(2)
    },

    kasirFormula: (harga, pajak, diskon) => {
        var hargaDiskon = harga - (diskon / 100 * harga)
        var hargaBersih = hargaDiskon + (pajak / 100 * hargaDiskon)
        return hargaBersih.toFixed(2)
    },

    konversiBilanganFormula: (from, bilangan, to) => {
        return convert(bilangan, Number(from), Number(to))
    }
}