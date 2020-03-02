import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import NewsBar from '../../../components/AppComponents/NewsBar';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function edit({news}) {
  
  const router = useRouter();

  return (
      <React.Fragment>

        <CssBaseline />
            
        <NewsBar
        ></NewsBar>


        <h1>{router.query.id}</h1>
        <p>esta es la pagina para editar un articulo</p>
        <p>se va a editar el articulo: {news.title}</p>
      </React.Fragment>
  );
}


edit.getInitialProps = async ctx => {

  const res = await fetch(`http://localhost:3000/api/v1/news/${ctx.query.id}`)
  const json = await res.json()
  
  console.log(json);

  return { news: json.json }
}
