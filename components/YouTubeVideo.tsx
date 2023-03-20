export interface YouTubeVideoData {
  link: string;
  thumbnail: string;
  title: string;
}

interface Props {
  data: YouTubeVideoData;
}

export const YouTubeVideo: React.FC<Props> = (props): JSX.Element => {
  return (
    <a
      className="w-full overflow-hidden transition duration-300 ease-in-out transform bg-white rounded-lg shadow lg:w-1/3 hover:scale-105"
      href={props.data.link}
      target="_blank"
    >
      <img className="w-full bg-center bg-cover" src={props.data.thumbnail} />
      <div className="px-4 py-5 sm:p-6">
        <h4 className="font-bold text-gray-900">{props.data.title}</h4>
      </div>
    </a>
  );
};
