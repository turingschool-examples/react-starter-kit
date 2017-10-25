// Create an Author component
<div className='story-author-info'>
  <img src={props.authImg} className='story-author-image' />
  <div className='story-author-text'>
    <h4>{props.authName}</h4>
    <h4>{props.estTime} read</h4>
  </div>
</div>
