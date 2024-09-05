import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input1col(props: any) {
  return (
    <div className="w-full h-full snap-y snap-start">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full h-full flex flex-col rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>{props.title}</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3 ">
            <hr className="w-[98%]" />
            <p className="text-center w-[90%] h-12 font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
              {props.redTitle}
            </p>
          </div>
          <div className="w-[90%] h-fit tablet:h-3/5 rounded gap-4 px-4 flex flex-col tablet:justify-around p-2 tablet:flex-row self-center border mt-4">
              <div>
                {props.col1}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

