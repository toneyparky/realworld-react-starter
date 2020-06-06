import React, {useEffect, useState} from "react";
import UserInfoCard from "../components/profile/UserInfoCard";
import ArticlePreviewTemplate from "../components/article/ArticlePreviewTemplate";

const Profile = ({match}) => {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([])
  let articlePreviewTemplate;

  const userName = match.params.username

  useEffect(() => {
    const loadUser = async () => {
      console.log("1111")
      const response = await fetch(`https://conduit.productionready.io/api/profiles/${userName}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      const profile = await response.json()
      setUser(profile)
    }
    loadUser()

  }, [])

  useEffect(() => {
    if (!user) {
      return
    }
    console.log("2222")

    const loadArticles = async () => {
      const response = await fetch(`https://conduit.productionready.io/api/articles?author=${user.profile.username}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        },
      });
      const content = await response.json();
      console.log(content)
      setArticles(content.articles);
    }
    loadArticles()
  }, [user])

  articlePreviewTemplate = articles.map((article, index) => ArticlePreviewTemplate({article, index}));

  return (user &&
    <div className="profile-page">
      <UserInfoCard profile={user.profile}/>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">My Articles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Favorited Articles</a>
                </li>
              </ul>
            </div>
            {articlePreviewTemplate}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile;
