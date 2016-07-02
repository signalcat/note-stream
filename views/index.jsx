var React = require('react');
var DefaultLayout = require('./layouts/default');

var Index = React.createClass({
  render: function() {
    return (
      <DefaultLayout>
        <div>
          <h1>Note Stream</h1>
          <h2>Courses</h2>
          <ul>
            {this.props.courses.map(function(course) {
               return <li key={course.id}>{course.title}</li>;
            })}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = Index;