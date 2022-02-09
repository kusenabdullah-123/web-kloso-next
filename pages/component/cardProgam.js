import { Icon } from "@iconify/react";
const cardProgam = (props) => {
  return (
    <div className={`${props.clas} ${props.offset ? "offset-lg-1" : ""}`}>
      <div className="d-flex flex-row" style={{ height: 50 }}>
        <Icon icon={props.configIcon} width="40" height="40" inline={true} />
        <h5 className="ms-2" style={{ fontSize: 18 }}>
          {props.title}
        </h5>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};
export default cardProgam;
