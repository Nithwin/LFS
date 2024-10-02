import React from 'react'

const Learning = () => {

  const styles = {
    box:'my-2 lg:w-64 lg:h-64 lg:m-3 lg:rounded-xl lg:flex lg:justify-center lg:pt-3 m-auto bg-darkPurple text-lightWhite h-52 rounded-3xl flex justify-center p-3 w-auto m-5'
  }
  return (
    <div className='flex flex-col justify-between px-5 pb-10 lg:flex lg:flex-col lg:px-5 lg:w-svw w-svw ms-10'>

      <div className={`rounded-full lg:rounded-full lg:p-3 lg:flex bg-darkPurple text-lightWhite justify-center flex`}>
      <p className='p-5 text-3xl lg:p-3'>Learning Plan</p>
      </div>

      <div className='items-center justify-center lg:grid-cols-3 lg:justify-center lg:grid'>

          <div className={styles.box}>Grammar</div>
          <div className={styles.box}>Listing</div>
          <div className={styles.box}>Reading</div>
          <div className={styles.box}>Writing</div>
          <div className={styles.box}>Speaking</div>
      </div>

    </div>
  )
}

export default Learning
