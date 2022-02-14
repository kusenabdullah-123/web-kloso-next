import Image from "next/image";
const cardBlogHome = ({ data }) => {
  if (data) {
    return (
      <div className="card col-lg-2 p-1" style={{ borderRadius: 10 }}>
        <div className="image">
          <Image
            src={data.image}
            className="card-img-top"
            width={290}
            height={190}
            alt={data.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.desc}</p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default cardBlogHome;
