import News from "../../model/news";
import BasicApi from "../basicApi";

class api implements BasicApi<News> {

    data: Array<News> = [];

    constructor(data: Array<News>) {
      this.data = data;
    }

     list (year?: number) {
      
        return (year)?this.data.filter((singleNews: News) => singleNews.date.getFullYear() === year):this.data;
      };

      find(id: number) {
        return this.data.find((singleNews: News) => singleNews.id == id);
      };

      add(singleNews: any) {
        
        //simulo que le pongo el ultimoid
        const highestIdplus = this.data.reduce((max: News, article: News) => max.id > article.id ? max : article).id + 1;

        const newArticle: News = {
          ...singleNews,
          id: highestIdplus
        }

        this.data.push(singleNews);

        return singleNews;
      };

      put (id: number, properties: any)  {

        if (properties.date) {
          properties.date = new Date(properties.date);
        }
        const indexArticulo = this.data.findIndex((article: News) => article.id == id);
        
        const editedArticle = {...this.data[indexArticulo],...properties};

        this.data[indexArticulo] = editedArticle;
        
        return editedArticle;

      };

      delete (id: number)  {
        // esto seguramente mucho mas simple en un orm
        const indexArticulo = this.data.findIndex((article: News) => article.id == id);

        const articulo =JSON.parse(JSON.stringify(this.data[indexArticulo]));

        this.data.splice(indexArticulo,1);
        
        return articulo;
      };
}

export default api;