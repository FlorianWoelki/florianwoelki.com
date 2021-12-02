import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import projects, {
  ProgrammingLanguageTag,
  TechnologyTag,
} from '../components/projects';
import Tag from '../components/Tag';

const ProjectsPage: NextPage = (): JSX.Element => {
  const programmingLanguageTags = useCallback(
    () => Object.values(ProgrammingLanguageTag).filter((v) => isNaN(Number(v))),
    [],
  );
  const technologyTags = useCallback(
    () => Object.values(TechnologyTag).filter((v) => isNaN(Number(v))),
    [],
  );

  const [filter, setFilter] = useState<
    string | typeof TechnologyTag | typeof ProgrammingLanguageTag | null
  >(null);

  const setFilterTag = (
    tag: string | typeof TechnologyTag | typeof ProgrammingLanguageTag | null,
  ): void => {
    if (filter === tag) {
      setFilter(null);
    } else {
      setFilter(tag);
    }
  };

  const filteredProjects = useMemo(
    () =>
      filter
        ? projects.filter((project) => project.tags.includes(filter))
        : projects,
    [filter],
  );

  return (
    <div className="container max-w-6xl px-8 pt-24 pb-32 mx-auto break-words lg:pt-32 md:px-16">
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Projects</h1>
      <p className="mt-6 mb-1 text-sm text-gray-500">
        Filter by programming languages:
      </p>
      <ul className="flex flex-wrap">
        {programmingLanguageTags().map((tag, index) => (
          <li key={index} onClick={() => setFilterTag(tag)}>
            <Tag selected={tag === filter}>{tag}</Tag>
          </li>
        ))}
      </ul>
      <p className="mt-4 mb-1 text-sm text-gray-500">Filter by technologies:</p>
      <ul className="flex flex-wrap">
        {technologyTags().map((tag, index) => (
          <li key={index} onClick={() => setFilterTag(tag)}>
            <Tag selected={tag === filter}>{tag}</Tag>
          </li>
        ))}
      </ul>

      <ul className="mt-10 space-y-10 border-t border-gray-200 divide-y divide-gray-200">
        {filteredProjects.map((project, index) => (
          <li key={index} className="pt-10">
            <div className="grid space-y-2 xl:gap-4 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <ul className="flex flex-wrap mt-4 xl:mt-0">
                {project.tags.map((tag) => (
                  <li key={tag.toString()}>
                    <Tag selected={tag === filter}>{tag}</Tag>
                  </li>
                ))}
              </ul>
              <div className="row-start-1 space-y-5 xl:col-span-3 xl:row-start-auto">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <div className="text-base text-gray-500 max-w-none">
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="text-base font-medium">
                  <Link href={project.link} passHref>
                    <a
                      target="_blank"
                      className="inline-flex items-center space-x-2 text-gray-900 transition duration-100 ease-in-out hover:text-gray-700"
                    >
                      <span>{project.linkTitle}</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
