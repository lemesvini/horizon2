import DocsHeader from "../Header";
import Image from "next/image";
import LpImg from "../../../public/src/docslp.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function DocsLp() {
  return (
    <>
      <div className="flex flex-col bg-white">
        <DocsHeader />
        <div className="w-full items-center flex flex-col  p-3">
          <br />
          <p className="text-3xl text-blue-600 font-bold">
            Material Didático Digital
          </p>
          <hr className="my-2" />
          <div className="max-w-[700px]  p-3 rounded">
            <p className="text-justify leading-relaxed text-gray-500">
              O Material Didático Digital da Horizon foi criado com báse no que
              funciona na prática para que o seu aluno consiga chegar aos seus
              objetivos da forma mais rápida e confortável possível.
            </p>
            <br />
            <p className="text-justify leading-relaxed text-gray-500 mt-1">
              Temos como objetivo respeitar a autonomia do Teacher durante as
              suas aulas. Para isso, contamos com{" "}
              <strong>cronogramas personalizáveis</strong> que se adaptam ao
              planejamento do Teacher para cada aluno, respeitando suas
              necessidades e flexibilizando suas práticas e revisões. Com isso,
              o Teacher pode extrair o máximo do material de uma forma que faça
              sentido para a jornada individual de cada um dos seus alunos.
            </p>
            <br />
            <p className="text-justify leading-relaxed text-gray-500 mt-1">
              O CEFR é importante:
            </p>
            <span className="w-full bg-purple-500 text-white justify-center font-bold text-lg flex flex-col my-4 p-3 rounded-xl">
              <p className="text-center text-xl">
                Common European Framework of Reference (CEFR)
              </p>
              <hr className="my-2" />
              <p className="font-light text-justify">
                O CEFR conta com níveis para indicar a capacidade de uso da
                língua estrangeira do falante não nativo. Seus níveis vão do{" "}
                <strong>A1</strong> {"("}
                basic user{")"} ao <strong>C2</strong> {"("}Independent User
                {")"} e regram quais capacidades são necessárias para que alguém
                atinja a fluência.
              </p>
              <p className="font-light text-center text-sm mt-1">
                Veja mais:{" "}
                <a
                  href="https://www.cambridgeenglish.org/br/exams-and-tests/cefr/"
                  target="_blank"
                  className="border-b"
                >
                  https://www.cambridgeenglish.org/br/exams-and-tests/cefr/
                </a>
              </p>
            </span>
            <br />
            <p className="text-justify leading-relaxed text-gray-500">
              O Material Didático Digital da Horizon separa as lições por
              módulo, seguindo o CEFR para garantir o resultado que os alunos
              esperam das aulas regulares de Inglês.
            </p>
            <br />
            <p className="text-justify leading-relaxed text-gray-500">
              Os módulos são separados por nível: módulo A1-A2, B1, B2 e
              Conversation.
            </p>
          </div>
          <br />
          <div id="mdda1a2" className="max-w-[700px] border p-3 rounded">
            <p className="text-xl font-bold text-blue-600">
              Módulo A1-A2 -{" "}
              <span className="font-light">18 Lessons + Practices</span>
            </p>
            <hr className="my-2" />
            <div className="w-full flex flex-row gap-3 my-3">
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Student's Access
              </span>
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Student's E-Book
              </span>
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Written Practice
              </span>
            </div>
            <p className="text-justify leading-relaxed">
              O Módulo A1-A2 foi pensado para levar o seu aluno mais longe em
              menos tempo.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Ele conta com todos os tópicos gramaticais básicos para que o seu
              aluno consiga menter conversas em Inglês, seja falando sobre si
              mesmo, contando histórias ou planejando o futuro. O Teacher
              consegue personalizar o módulo base com aulas de revisão e de
              conversação conforme a necessidade de cada aluno, garantindo
              autonomia em aula e cronograma focado em resultado.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Com o Student's Access, o aluno consegue acessar todo o material a
              qualquer momento através de seu Login, onde ele encontra o
              material usado durante as aulas, o Student's E-book e seus Written
              Practices.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Sabemos também a importância de uma rotina de estudos na
              trajetória até a fluência, por isso todas as Lessons de conteúdo
              do módulo seguem o mesmo padrão de organização:{" "}
              <strong>Warm-Up, Vocabulary, Input</strong> e{" "}
              <strong>Conversation Starter</strong>.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Todas as Lessons possuem uma <i>sugestão de fluxo de aula</i>,
              onde trazemos formas de trabalhar com o material durante a aula
              que foram testadas e aprovadas pelos professores membros da
              Horizon.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Para saber mais sobre o primeiro módulo do Material Didático
              Digital, agende uma demonstração!
            </p>

            {/* <p className="text-justify leading-relaxed">
              Acesse a página <a href="#" className="text-blue-500 border-b">A1-A2 / Module Preview</a> para ver exemplos!
            </p> */}
          </div>
          <br />
          <div id="mddb1" className="max-w-[700px] border p-3 rounded">
            <p className="text-xl font-bold text-blue-600">
              Módulo B1 - <span className="font-light">30 Lessons</span>
            </p>
            <hr className="my-2" />
            <div className="w-full flex flex-row gap-3 my-3">
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Student's Access
              </span>
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Student's E-Book
              </span>
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Written Practice
              </span>
            </div>
            <p className="text-justify leading-relaxed">
              O Módulo B1 marca o início da fluência do seu aluno. O objetivo
              principal é que suas aulas aqui aconteçam em Inglês, buscando
              extrair do aluno sua conexão com a Língua e instigando a expressão
              de pensamentos e opiniões a partir da conversação durante a aula.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Para que isso seja possível, contamos com 30 Lessons: 18 aulas de
              conteúdo, 9 aulas de conversação e 3 aulas de revisão distribuídas
              em três unidades de 10 aulas.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Dentro do módulo, há uma expansão constante dos conteúdos
              aprendidos e dos vocabulários usados, abrangendo tópicos
              gramaticais que trazem pra realidade do aluno aquilo que será
              útil, seja qual for seu objetivo: viagens, trabalho, negócios...
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              O módulo segue o mesmo padrão apresentado no A1-A2, mantendo a
              familiaridade que o seu aluno tem com o material e a rotina de
              estudos definida.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Para saber mais sobre o segundo módulo do Material Didático
              Digital, agende uma demonstração!
            </p>
          </div>
          {/* <br />
          <div id="mddb2" className="max-w-[700px] border p-3 rounded">
            <p className="text-xl font-bold text-blue-600">
              Módulo B2 - <span className="font-light">30 Lessons</span>
            </p>
            <hr className="my-2" />
            <div className="w-full flex flex-row gap-3 my-3">
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Student's Access
              </span>
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Student's E-Book
              </span>
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Written Practice
              </span>
            </div>
            <p className="text-justify leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div> */}
          <br />
          <div id="mddConv" className="max-w-[700px] border p-3 rounded">
            <p className="text-xl font-bold text-blue-600">
              Módulos de Conversação{" "}
              {/* <span className="font-light">Novas aulas todo mês</span> */}
            </p>
            <hr className="my-2" />
            <div className="w-full flex flex-row gap-3 my-3">
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Choose From Gallery
              </span>
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                Monthly Updated
              </span>
              <span className="flex grow  justify-center py-2 px-1 text-blue-500 font-bold text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />
                All Modules
              </span>
            </div>
            <p className="text-justify leading-relaxed">
              Os módulos de conversação são separados em duas categorias:{" "}
              <strong>Conversation A1-A2</strong> e{" "}
              <strong>Conversation B1+</strong>.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              O <strong>Conversation A1-A2</strong> é focado nos alunos que
              ainda não conseguem manter conversas em Inglês durante as aulas -
              em muitos casos, seus alunos do Módulo A1-A2.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              O <strong>Conversation B1+</strong> é focado nos alunos que já 
              conseguem manter conversas em Inglês e que querem praticar diferentes tópicos. 
              Estes alunos não necessariamente precisam estar vinculados à algum outro módulo do MDD.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Os módulos de conversação não possuem cronograma definido e podem ser utilizados
              conforme a necessidade de cada aluno ou conforme a organização do cronograma de cada Teacher.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
