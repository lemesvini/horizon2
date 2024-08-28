import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function CardComp(props: any) {
  const LessonRoute = props.route || "#";
  const DocsRoute = props.docs || "#";
  return (
    <Card className="w-80">
      <CardBody>
        <CardTitle
          className="w-full text-center p-2 rounded-lg font-bold text-white"
          style={{ backgroundColor: props.color }}
        >
          {props.title}
        </CardTitle>
        <CardText className="pb-3 pt-3 font-bold text-[#0A3153]">
          <FontAwesomeIcon
            icon={faFeatherPointed}
            className="pr-2 text-[#5271ff]"
          />
          {props.description}
        </CardText>
        <hr />
        <p className="pt-3 pb-3 text-[#0A3153]">
          <FontAwesomeIcon
            icon={faSquarePlus}
            className="pr-2 text-[#5271ff]"
          />
          {props.content}
        </p>
        <div className="flex justify-between">
          <Link href={DocsRoute} target="_blank" className="w-[48%]">
            <Button
              variant="outline-success"
              className="p-2 rounded-lg hover:text-white w-full"
            >
              Revisar
            </Button>
          </Link>
          <Link href={LessonRoute} className="w-[48%]">
            <Button
              className="p-2 rounded-lg hover:text-white w-full"
              variant="outline-primary"
            >
              {props.link}
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardComp;
