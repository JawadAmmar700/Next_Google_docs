import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/client'
import Button from '@material-tailwind/react/Button'
import Avatar from '@material-ui/core/Avatar'
import TextEditor from '../../components/Editor'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'
import Link from 'next/link'

export const getServerSideProps = async context => {
  return {
    props: {
      id: context.params.id,
    },
  }
}

const docId = ({ id }) => {
  const [session] = useSession()
  const [snapshot] = useDocumentOnce(
    db
      .collection('users')
      .doc(session?.user.email)
      .collection('documents')
      .doc(id)
  )

  return (
    <div>
      <nav className="w-full h-16 bg-gray-200 flex justify-between items-center">
        <div className="flex ">
          <Link href="/">
            <Image
              src="/GoogleDocs.png"
              className="cursor-pointer"
              width={40}
              height={40}
            />
          </Link>
          <div className="flex flex-col ml-2">
            <h2 className="ml-1">{snapshot?.data()?.name}</h2>
            <div className="flex">
              <p className="ml-1 lg:ml-4 text-sm cursor-pointer text-gray-500">
                File
              </p>
              <p className="ml-1 lg:ml-4 text-sm cursor-pointer text-gray-500">
                Edit
              </p>
              <p className="ml-1 lg:ml-4 text-sm cursor-pointer text-gray-500">
                View
              </p>
              <p className="ml-1 lg:ml-4 text-sm cursor-pointer text-gray-500">
                Insert
              </p>
              <p className="ml-1 text-sm cursor-pointer text-gray-500">
                Format
              </p>
              <p className="ml-1 text-sm cursor-pointer text-gray-500">Tools</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-2">
          <Button
            color="lightBlue"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            className="mr-2"
            onClick={signIn}
          >
            Share
          </Button>
          <Avatar
            src={session?.user?.image}
            onClick={signOut}
            className="cursor-pointer"
          />
        </div>
      </nav>

      <TextEditor id={id} snapshot={snapshot} />
    </div>
  )
}

export default docId
