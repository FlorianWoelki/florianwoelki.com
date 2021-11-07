import { NextPage } from 'next';
import Tag from '../components/Tag';

enum ProgrammingLanguageTag {
  JavaScript,
  TypeScript,
  Go,
  Python,
  Java,
  Swift,
  SQL,
  Solidity,
}

enum TechnologyTag {
  Vue,
  Nuxt,
  GraphQL,
  gRPC,
  Tailwind,
  Redis,
  PostgreSQL,
  React,
  Node,
  Docker,
  SpringBoot,
  MySQL,
  MongoDB,
  Tensorflow,
  Scikitlearn,
  Blockchain,
}

const ProjectsPage: NextPage = (): JSX.Element => {
  const programmingLanguageTags = Object.values(ProgrammingLanguageTag).filter(
    (v) => isNaN(Number(v)),
  );
  const technologyTags = Object.values(TechnologyTag).filter((v) =>
    isNaN(Number(v)),
  );

  return (
    <div className="container max-w-6xl px-8 pt-24 pb-32 mx-auto break-words lg:pt-32 md:px-16">
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Projects</h1>

      <p className="mt-6 mb-1 text-sm text-gray-500">
        Filter by programming languages:
      </p>
      <ul className="flex flex-wrap">
        {programmingLanguageTags.map((tag, index) => (
          <li key={index}>
            <Tag selected={false}>{tag}</Tag>
          </li>
        ))}
      </ul>
      <p className="mt-4 mb-1 text-sm text-gray-500">Filter by technologies:</p>
      <ul className="flex flex-wrap">
        {technologyTags.map((tag, index) => (
          <li key={index}>
            <Tag selected={false}>{tag}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
