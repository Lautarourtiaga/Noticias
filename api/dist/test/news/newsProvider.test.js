"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsProvider_1 = __importDefault(require("../../src/services/news/newsProvider"));
let hardcodedNewsProvider;
describe("newsProvider", () => {
    beforeEach(() => {
        hardcodedNewsProvider = new newsProvider_1.default([
            {
                id: 1,
                title: "Coronavirus se esparce por el mundo!",
                body: "Los cientificos no saben que hacer respecto al famoso coronavirus, lol, ojala no muramos todos",
                authors: ["Jeremias Springfield", "Loler"],
                date: new Date("1/1/2020")
            },
            {
                id: 2,
                title: "Primer contacto alienigena",
                body: "La humanidad tiene mucho miedo, nadie sabe que hacer! Parece que existen los aliens y... les gustan las donas!",
                authors: ["Reptiliano anonimo", "Humanoide"],
                date: new Date("1/30/2030")
            },
            {
                id: 3,
                title: "Hacer una api en node es mucho mas rapido que en java...",
                body: "Yo solo conocia tecnologias frontend con hot reload. Parece que tambien se puede hacer en el back jajaja, Yo espero a DeNo igual!",
                authors: ["Lautaro Alonso Urtiaga"],
                date: new Date("2/11/2019")
            },
            {
                id: 4,
                title: "Meme de perro autista se vuelve viral",
                body: "hay un meme de un perro que se llama walter, es literal un perro feo que mira a la pantalla y se lo asocia con el autismo, es divertido",
                authors: ["Meme warriors", "Walter Edits"],
                date: new Date("6/6/2019")
            },
            {
                id: 5,
                title: "Nuevo perro memero es relevante! Cheemsburguer!",
                body: "Otro simpatico perro se vuelve viral en internet, Esta vez se trata del carismatico cheems. Es un perro que tiene impedimento de habla. Porbrecito!",
                authors: ["Cheems Edits"],
                date: new Date("1/1/2020")
            },
        ]);
    });
    test("Si se filtra por 2019, entonces unicamente aparecen registros de 2019", () => __awaiter(this, void 0, void 0, function* () {
        expect(hardcodedNewsProvider.list(2019).every((singleNews) => singleNews.date.getFullYear() === 2019)).toBe(true);
    }));
    test("Si se añade una noticia a la lista fetcheada de noticias, entonces la cantidad de noticias es 6", () => __awaiter(this, void 0, void 0, function* () {
        const newArticle = {
            title: "Nuevo Dogo",
            body: "nuevo cuerpo",
            date: "1/1/2020",
            authors: ["dodoo"]
        };
        hardcodedNewsProvider.add(newArticle);
        expect(hardcodedNewsProvider.list().length).toBe(6);
    }));
    test("Si se updatea un articulo con un nuevo titulo, body y autores. Entonces estos se guardan ", () => __awaiter(this, void 0, void 0, function* () {
        const newProperties = {
            title: "UltraMan muere",
            body: "No man, ultra man murió, que sad lpm",
            date: "1/1/2020",
            authors: ["ultramanFan"]
        };
        hardcodedNewsProvider.put(2, newProperties);
        const changedArticle = hardcodedNewsProvider.list().find((art) => art.id == 2);
        expect(changedArticle.title).toMatch(/UltraMan muere/);
        expect(changedArticle.body).toMatch(/No man, ultra man murió, que sad lpm/);
        expect(changedArticle.authors).toContain("ultramanFan");
    }));
    test("Si se borra un articulo, entonces se devuelve el articulo borrado", () => __awaiter(this, void 0, void 0, function* () {
        const articulo = hardcodedNewsProvider.delete(2);
        expect(articulo.id).toEqual(2);
        expect(articulo.title).toMatch(/Primer contacto alienigena/);
    }));
    test("Si se borra un articulo, entonces ese articulo no esta en la lista de articulos", () => __awaiter(this, void 0, void 0, function* () {
        hardcodedNewsProvider.delete(3);
        const news = hardcodedNewsProvider.list(2019);
        expect(news.some((a) => a.id === 3)).toBe(false);
    }));
});
//# sourceMappingURL=newsProvider.test.js.map