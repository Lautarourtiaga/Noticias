import { Request, Response } from "express";
import NewsProvider  from "./newsProvider";
import News from "../../model/news";

//En principio se instancia sin ningun servicio, despues va a ser un servicio que llame a la base de datos
const newsProvider: NewsProvider=  new NewsProvider([
  {
      id: 1,
      title : "Coronavirus se esparce por el mundo!",
      body : "Los cientificos no saben que hacer respecto al famoso coronavirus, lol, ojala no muramos todos",
      authors : ["Jeremias Springfield", "Loler"],
      date : new Date("1/1/2020")
  },
  {
      id: 2,
      title : "Primer contacto alienigena",
      body : "La humanidad tiene mucho miedo, nadie sabe que hacer! Parece que existen los aliens y... les gustan las donas!",
      authors : ["Reptiliano anonimo", "Humanoide"],
      date : new Date("1/30/2030")
  },
  {
      id: 3,
      title : "Hacer una api en node es mucho mas rapido que en java...",
      body : "Yo solo conocia tecnologias frontend con hot reload. Parece que tambien se puede hacer en el back jajaja, Yo espero a DeNo igual!",
      authors : ["Lautaro Alonso Urtiaga"],
      date : new Date("2/11/2019")
  },
  {
      id: 4,
      title : "Meme de perro autista se vuelve viral",
      body : "hay un meme de un perro que se llama walter, es literal un perro feo que mira a la pantalla y se lo asocia con el autismo, es divertido",
      authors : ["Meme warriors","Walter Edits"],
      date : new Date("6/6/2019")
  },
  {
      id: 5,
      title : "Nuevo perro memero es relevante! Cheemsburguer!",
      body : "Otro simpatico perro se vuelve viral en internet, Esta vez se trata del carismatico cheems. Es un perro que tiene impedimento de habla. Porbrecito!",
      authors : ["Cheems Edits"],
      date : new Date("1/1/2020")
  },
]);

export default [
  {
    path: "/api/v1/news",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {

      const result = await newsProvider.list(+query.year);
      
      res.status(200).send(responseWrapper(result));
      }
    ]
  },
  {
    path: "/api/v1/news",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {

      const json = req.body;
      
      const NewArticle = {
          title: json.title,
          body: json.body,
          date: new Date(json.date),
          authors: json.authors
      }

      const result = await newsProvider.add(NewArticle);
      
      res.status(200).send(responseWrapper(result));
      }
    ]
  },
  {
    path: "/api/v1/news/:id",
    method: "put",
    handler: [
      async (req: Request, res: Response) => {

      const result = await newsProvider.put(+req.params.id,req.body);
      
      res.status(200).send(responseWrapper(result));
      }
    ]
  },
  {
    path: "/api/v1/news/:id",
    method: "delete",
    handler: [
      async (req: Request, res: Response) => {

      const result = await newsProvider.delete(+req.params.id);
      
      res.status(200).send(responseWrapper(result));
      }
    ]
  }
];


function responseWrapper(result: any){
  return {
    json: result,
    version: "v1"
  }
}
