// var React = require('react');
// var DefaultLayout = require('./layouts/default');

// var CourseCard = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h3>{this.props.course.title}</h3>
//         <p>{this.props.course.semester}</p>
//         <p>{this.props.course.description}</p>
//       </div>
//     );
//   }
// });

// var Index = React.createClass({
//   render: function() {
//     return (
//       <DefaultLayout>
//         <div>
//           <h1>Note Stream</h1>
//           <h2>Courses</h2>
//             {this.props.courses.map(function(course) {
//               return <CourseCard course={course}/>;
//             })}
//         </div>
//       </DefaultLayout>
//     );
//   }
// });

// module.exports = Index;
var Alert = require('react-bootstrap/lib/Alert');
var React = require('react');
var DefaultLayout = require('./layouts/default');

var SearchFrame = React.createClass({
  render: function() {
    return (
      <div className="row" id="rowsearch">
          <div id="searchdiv" className="col-md-12">
            <div id="searchinput" className="col-md-12">
              <input id="searchbox" type="text" name="search" ></input>
            </div>
            <div id="serachbtn" className="col-md-12">
              <button id="btn1" type="button">Go!</button>
            </div>
          </div>
      </div>
    );
  }
});

// var PickDetail = React.createClass({
//   render: function() {
//     return (
//       <div class="modal fade" id="project1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//         <div class="modal-dialog">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h4 class="modal-title" id="myModalLabel">Favorite App Page</h4>
//                 </div>
//                 <div class="modal-body">
//                     <img class="img-responsive" src="http://placehold.it/555x300"></img>
//                     This was my first project in this class. I learned a lot about HTML and CSS.
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
//   }
// });

var DetailBtn = React.createClass({
  render: function(){
    return(
      <button onClick={this.props.onMagicClick}> Launch demo modal
      </button>
    );
  }
});

var EditorPick = React.createClass({
  render: function() {
    return (
      <div className="editorContainer">
          <div id="subtitle" className="row">
            <h2>Editor's Pick</h2>
          </div>
          <div id="rowpics" className="row">
            <div className="col-md-4">
              <img id="imgPicks1" src="css/bbq.jpg"></img>
              <h3>BBQ Lamb</h3>
            </div>
            <div className="col-md-4">
              <img id="imgPicks2" src="css/shuizhuyu.jpg"></img>
              <h3>Boiling Fish</h3>
            </div>
            <div className="col-md-4">
              <img id="imgPicks3" src="css/huiguorou.jpg"></img>
              <h3>Spicy Porkbelly</h3>
            </div>
          </div>
      </div>
    );
  }
});


var Index = React.createClass({
  showDetail: function(){
    console.log("!!!!!!!");
  alert('TAADAH!');
  },

  render: function() {
    return (
      <DefaultLayout>
        <div className="titleContainer">
          <div className="title">
            <h1>SPICY FINDER</h1>
            <h4>Searching for hot chinese cuisine</h4>
            <SearchFrame/>
          </div>
        </div>
        <EditorPick/>
        <DetailBtn onMagicClick={this.showDetail} />
      </DefaultLayout>
    );
  }
});

module.exports = Index;