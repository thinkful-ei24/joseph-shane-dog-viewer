export default function DogFetcher(props) {
  const link = `https://dog.ceo/api/breed/${props.breed}/images/random`;
  // console.log(link);
  fetch(link)
    .then(function(res) {
      return res.json();
    })
    .then(jsonRes => {
      props.setImage(jsonRes.message);
      // console.log(jsonRes.message);
      // console.log(props);
    })
    .catch(e => console.log(e.message));
}
