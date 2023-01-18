import Axios from 'axios';
import Item from "../../src/component/Item"

const Post = ({ item }) => {
  console.log(item)
  return (
    <>
      {item && (
      <>
        <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>        
        </Head>
        <Item item={item} />
      </>
    )}
    </> 
  )
}

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return { 
    props: { 
      item: data, 
    }
  }
}