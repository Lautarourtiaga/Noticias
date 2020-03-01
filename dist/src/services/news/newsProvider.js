"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class api {
    constructor(data) {
        this.data = [];
        this.data = data;
    }
    list(year) {
        return (year) ? this.data.filter((singleNews) => singleNews.date.getFullYear() === year) : this.data;
    }
    ;
    add(singleNews) {
        //simulo que le pongo el ultimoid
        const highestIdplus = this.data.reduce((max, article) => max.id > article.id ? max : article).id + 1;
        const newArticle = Object.assign({}, singleNews, { id: highestIdplus });
        this.data.push(singleNews);
        return singleNews;
    }
    ;
    put(id, properties) {
        if (properties.date) {
            properties.date = new Date(properties.date);
        }
        const indexArticulo = this.data.findIndex((article) => article.id == id);
        const editedArticle = Object.assign({}, this.data[indexArticulo], properties);
        this.data[indexArticulo] = editedArticle;
        return editedArticle;
    }
    ;
    delete(id) {
        // esto seguramente mucho mas simple en un orm
        const indexArticulo = this.data.findIndex((article) => article.id == id);
        const articulo = this.data[indexArticulo];
        this.data.splice(indexArticulo, 1);
        return "";
    }
    ;
}
exports.default = api;
//# sourceMappingURL=newsProvider.js.map