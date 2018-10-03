export default function DogFetcher(props) {
  const link = `https://dog.ceo/api/breed/${props.breed}/images/random/10`;



  fetch(link)
    .then(function(res) {
      return res.json();
    })
    .then(jsonRes => {
      props.setImage(jsonRes.message);

    })
    .catch(e => console.log(e.message));
}
