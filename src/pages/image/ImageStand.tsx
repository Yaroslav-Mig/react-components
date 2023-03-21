import Image from './Image';

const ImageStand = () => {
  return (
    <>
      <div>
        <h3>1. Base image placeholder:</h3>
        <Image />
      </div>

      <div>
        <h3>2. Image placeholder with setting:</h3>
        <Image width={50} height={50} />
        <Image width={150} height={150} />
        <Image width={200} height={200} />
      </div>

      <div>
        <h3>3. Rounded images with setting: </h3>
        <Image title='avatar' radius='rounded' width={50} height={50} />
        <Image title='avatar' radius='circle' width={50} height={50} />
        <Image title='avatar' radius='oval' width={50} height={50} />
      </div>

      <div>
        <h3>4. Image with src and alt attribute: </h3>
        <Image src='https://cdn-icons-png.flaticon.com/512/1752/1752772.png' alt='pokemon' />
        <Image
          src='https://cdn-icons-png.flaticon.com/512/10118/10118929.png'
          alt='dog'
          width={120}
        />
      </div>
    </>
  );
};

export default ImageStand;
