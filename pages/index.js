import React, { useState, useEffect } from "react"
import Head from "next/head"
import Header from "../components/Header"
import MyDocs from "../components/MyDocs"
import Login from "../components/login"
import { signIn, signOut, getSession } from "next-auth/client"
import AddIcon from "@material-ui/icons/Add"
import Model from "../components/Model"
import { db, firebase } from "../firebase"
import { useCollection } from "react-firebase-hooks/firestore"

export const getServerSideProps = async context => {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}

export default function Home({ data, session }) {
  const [dataState, setDataState] = useState(data)
  const [showModal, setShowModal] = React.useState(false)
  const [input, setInput] = useState("")

  useEffect(() => {
    db.collection("users")
      .doc(session?.user?.email)
      .collection("documents")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot =>
        setDataState(
          snapshot?.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])

  if (!session) {
    return <Login />
  }

  const addtodb = () => {
    db.collection("users")
      .doc(session?.user?.email)
      .collection("documents")
      .add({
        name: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })

    setInput("")
    setShowModal(false)
  }

  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/googleDocs.png" />
      </Head>

      <Header />

      <div className="w-full h-64 bg-gray-200">
        <div className="ml-24 h-64 relative top-2 lg:ml-72">
          <p>Start a new Document </p>
          <div
            onClick={e => setShowModal(true)}
            className="w-32 h-44 mt-2  bg-white flex items-center justify-center cursor-pointer border-4  hover:border-blue-400 border-opacity-75"
          >
            <AddIcon className="text-green-500 text-4xl" />
          </div>
          <p className="ml-2 mt-2">Blank</p>
        </div>
        <Model
          input={input}
          setInput={setInput}
          addtodb={addtodb}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>

      <MyDocs data={dataState} />
    </div>
  )
}
