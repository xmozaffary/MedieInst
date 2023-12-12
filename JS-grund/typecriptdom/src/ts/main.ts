import './../scss/style.scss'
import { serviceBase } from './seviceBase/serviceGet'

const url = "http://www.omdbapi.com/?apikey=7cc1e25&s=star"

const s = await serviceBase<IOmdb>(url)
console.log(s.Search);

interface IOmdb {
  Search: Imovie[]
}

interface Imovie{
  Title:string;
  Poster:string;
  imdbId:string;
  Year:string;
}