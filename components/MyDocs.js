import React from 'react'
import FolderIcon from '@material-ui/icons/Folder'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Link from 'next/link'

const MyDocs = ({ data }) => {
  return (
    <>
      <div className="w-10/12 lg:w-3/6 p-2  h-10 bg-gray-200 flex items-center justify-between mt-4 mx-auto">
        <p>My Documents</p>
        <div className="flex items-center mr-4">
          <p className="mr-4"> Date Created</p>
          <FolderIcon className="text-gray-500" />
        </div>
      </div>
      {data?.map(item => (
        <Link key={item?.id} href={`/editor/${item.id}`}>
          <div className="w-9/12 p-2  mx-auto mt-4 border-2 hover:border-blue-400 rounded cursor-pointer  h-10 bg-gray-200 flex items-center justify-between ">
            <p>{item?.data?.name}</p>
            <div className="flex items-center mr-4">
              <p className="mr-4">
                {item?.data?.timestamp?.toDate().toDateString()}
              </p>
              <MoreVertIcon className="text-gray-500" />
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default MyDocs
