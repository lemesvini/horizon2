import Button from "react-bootstrap/Button";
import { Card, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function WPComp(props: any) {
  const WPLink = props.link || "#"; 
  
  return (
    <Card>
      <Card.Body className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center w-[90%] gap-6">
          <p
            className="font-bold text-white p-2 rounded-lg text-center text-nowrap"
            style={{ backgroundColor: props.color }}
          >
            {props.title}
          </p>
          <p className="text-wrap">{props.text}</p>
        </div>
        <Link href={WPLink} target="_blank">
          <Button variant="success" className="w-10 h-10">
            <FontAwesomeIcon icon={faFileArrowDown} />
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default WPComp;
