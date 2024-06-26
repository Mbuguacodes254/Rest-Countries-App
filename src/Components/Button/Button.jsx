/* eslint-disable no-unused-vars */
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link} from 'react-router-dom';

const Button = () => {
  return (
    <div>
       <button className="bg-[#FAFAFA] flex items-center gap-2 bg dark:bg-[#2B3844] py-2 px-3 justify-center rounded-md shadow-lg">
          <div className="back__btn">
            <Link to={'/'}>
              <MdKeyboardBackspace className="h-8 w-6 dark:text-white" />
            </Link>
          </div>
          <Link to={'/'}>
            <div className="font-light leading-10 mobile:text-[14px] tablet:text-[18px] dark:text-white">Back</div>
          </Link>
        </button>
    </div>
  )
}

export default Button