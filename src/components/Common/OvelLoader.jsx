import { Oval } from 'react-loader-spinner'

const OvelLoader = () => {
  return (
    <div className="justify-center items-center flex h-100">
      <Oval
        height={80}
        width={80}
        color="#BD1F1F"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#BD1F1F"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  )
}

export default OvelLoader