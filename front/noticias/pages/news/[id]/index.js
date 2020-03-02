import Article from '../../../components/ArticleComponents/Article'
import fetch from 'isomorphic-unfetch';
import NewsBar from '../../../components/AppComponents/NewsBar';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function view({news}) {

  return (
      <React.Fragment>

            <CssBaseline />
            <NewsBar
            ></NewsBar>

        <Article
            obj = {news}
        ></Article>
      </React.Fragment>
  );
}


view.getInitialProps = async ctx => {

    const res = await fetch(`http://localhost:3000/api/v1/news/${ctx.query.id}`)
    const json = await res.json()

    return { news: json.json }
  }
  