// react-loading
import { default as ReactLoading } from 'react-loading';

const Loading = () => {
  return (
    <ReactLoading
      type="spokes"
      width={50}
      color={'rgb(107 125 125 / 0.3)'}
      className="bg-no-repeat"
    />
  );
};

export default Loading;
