export default function Fonts(props) {
  const { icon, title } = props;
  return (
    <div className="w-40 flex flex-col items-center md:cursor-pointer p-6 border-2 md:w-80 border-blue-900 rounded-xl font-bold md:flex md:flex-col md:items-center text-lg hover:shadow-blue-500 shadow-md hover:text-blue-500 hover:border-blue-500">
      <p className="text-xl md:text-3xl">{icon}</p>
      <p>{props.title}</p>
    </div>
  );
}
