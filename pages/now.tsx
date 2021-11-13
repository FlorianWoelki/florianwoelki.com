import { NextPage } from 'next';

const NowPage: NextPage = (): JSX.Element => {
  return (
    <div className="container max-w-6xl px-8 pt-24 pb-32 mx-auto space-y-10 break-words lg:pt-32 md:px-16">
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Now</h1>

      <p className="text-lg text-gray-700">What I am doing now.</p>

      <div className="space-y-4 text-lg text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Creating a Game
        </h2>
        <p>
          Right now, I am trying to create a roguolike platformer game in Go
          with the help of Raylib. This is a side project and I don't think that
          I will finish it this year.
        </p>
        <p>
          The reason being is, that I try to improve my knowledge about the
          programming language Go. In addition, I like games and, therefore, I
          am trying to create a game I would play myself.
        </p>
        <p>
          The challenge is that everything is randomly generated and I already
          had a lot of challenges with the level generation.
        </p>
      </div>

      <div className="space-y-4 text-lg text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Creating a course
        </h2>
        <p>
          In addition to developing a game, I am also trying to create a course
          about Vue.js 3 and better component design. This course included a lot
          of research about the best practices of component design in Vue.
        </p>
        <p>
          This course is still in progress and I am still writing the scripts
          for it.
        </p>
      </div>

      <div className="space-y-4 text-lg text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Publishing other projects
        </h2>
        <p>
          I have some projects that I have never published. Right now, I am
          working to release some of them. Obviously, everything is open source
          and always will be.
        </p>
      </div>

      <p>Last update: 13 November 2021</p>
    </div>
  );
};

export default NowPage;
