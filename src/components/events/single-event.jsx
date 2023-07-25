import Image from "next/image";

const SingleEvent = ({ data }) => {
  return (
    <div>
      <Image src={data.image} width={1000} height={500} als={data.title} />
      <h1> {data.title} </h1>
      <p> {data.description} </p>
    </div>
  );

}

  export default SingleEvent;