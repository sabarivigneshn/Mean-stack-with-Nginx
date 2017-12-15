var Issue = require('./../models/issue');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended:false});


module.exports = function(app) {
  function getIssues(res) {
    Issue.find(function(err,issues){
      if(err) {
        res.json(err);
      }else {
        res.json(issues);
      }
    });
  };
  //create an Issue
  app.post('/create', urlencodeParser,function(req,res){
      var response = Issue.create({
        tracker: req.body.tracker,
        subject: req.body.subject,
        status: req.body.status,
        assignee: req.body.assignee,
        priority: req.body.priority
      }, function(err, resp) {
          if (err){
            res.end(err);
          }else{
            res.json(resp);
          }
      });
  });

  // Get all issues
  app.get('/all_issues',urlencodeParser,function(req,res){
      getIssues(res);
  });

  //Edit issue
  app.post('/edit/:issue_id', function (req, res) {
      Issue.find({_id: req.params.issue_id}, function(err, issue) {
        if (err){
          res.send(err);
        }else{
          res.json(issue);
        }

      });
  });

  app.put('/update/:issue_id', urlencodeParser, function (req,res) {
      console.log(req.body);
      Issue.findById(req.params.issue_id, function(err, issue) {
        if(err)
          res.send(err);

        issue.tracker =  req.body.tracker;
        issue.subject = req.body.subject;
        issue.status =  req.body.status;
        issue.assignee =  req.body.assignee;
        issue.priority =  req.body.priority;

        issue.save(function(err) {
                  if (err)
                      res.send(err);

                  res.json({ message: 'Issue updated!' });
              });

      });
  });

  // Delete an issue
  app.delete('/issues/:issue_id', function (req, res) {
          Issue.remove({
              _id: req.params.issue_id
          }, function (err, todo) {
              if (err)
                  res.send(err);

              getIssues(res);
          });
  });

  return app;
}
