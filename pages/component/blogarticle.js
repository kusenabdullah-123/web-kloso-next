import Image from "next/image";
const blogArticle = (props) => {
  return (
    <article className="row p-0 mt-3">
      <figure className="col-lg-4 col-md-4 col-sm-4 mb-3">
        <Image
          src={`/${props.image}`}
          height={181}
          width={181}
          alt="image article"
        />
      </figure>
      <div className="col-lg-8 col-md-8 col-sm-8 isi">
        <h2 className="mb-0">{props.title}</h2>
        <small>Berita - 2 days ago</small>
        <p className="mt-2">{props.desc}</p>
      </div>
    </article>
  );
};
export default blogArticle;
