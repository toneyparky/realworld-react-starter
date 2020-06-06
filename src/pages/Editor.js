import React, {useState} from "react";
import ArticleForm from "../components/editor/ArticleForm";

const Editor = () => {
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [body, setBody] = useState(null)
  const [tagList, setTagList] = useState([])

  const onTitleHandler = (event) => {
    setTitle(event.target.value)
    console.log(title)
  }

  const onDescriptionHandler = (event) => {
    setDescription(event.target.value)
    console.log(description)
  }

  const onBodyHandler = (event) => {
    setBody(event.target.value)
  }

  const onTagListHandler = (event) => {
    setTagList(event.target.value.split(","))
  }

  const onPublishHandler = async (event) => {
    event.preventDefault()
    const data = {
      "article": {
        "title": title,
        "description": description,
        "body": body,
        "tagList": tagList
      }
    }

    const response = await fetch("https://conduit.productionready.io/api/articles", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        ...data
      })
    })

    const article = await response.json()
    console.log(article + "@@")
  }


  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <ArticleForm
            onTitleHandler={onTitleHandler}
            onDescriptionHandler={onDescriptionHandler}
            onBodyHandler={onBodyHandler}
            onTagListHandler={onTagListHandler}
            onPublishHandler={onPublishHandler}
          />
        </div>
      </div>
    </div>)
};

export default Editor;
