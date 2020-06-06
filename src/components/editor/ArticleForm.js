import React from 'react';

function ArticleForm({onTitleHandler, onDescriptionHandler, onBodyHandler, onTagListHandler, onPublishHandler}) {


  return (
    <div className="col-md-10 offset-md-1 col-xs-12">
      <form>
        <fieldset>
          <fieldset className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Article Title"
                   onChange={onTitleHandler}/>
          </fieldset>
          <fieldset className="form-group">
            <input type="text" className="form-control" placeholder="What's this article about?"
                   onChange={onDescriptionHandler}/>
          </fieldset>
          <fieldset className="form-group">
            <textarea className="form-control" rows="8" placeholder="Write your article (in markdown)"
                      onChange={onBodyHandler}/>
          </fieldset>
          <fieldset className="form-group">
            <input type="text" className="form-control" placeholder="Enter tags" onChange={onTagListHandler}/>
            <div className="tag-list">
            </div>
          </fieldset>
          <button className="btn btn-lg pull-xs-right btn-primary"
                  onClick={(event) => onPublishHandler(event)}>
            Publish Article
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ArticleForm;