import { Rings } from './LoaderImg.jsx'
const LoaderIcon = () => {
    const ringsProps = {
  height: 500,
  width: 500,
      color: "green",
  radius: 6,
  label: "audio-loading"
};
    return (
      <div className='LoadMoreIcon'><Rings props={ringsProps} /></div>
           )
};

export default LoaderIcon;