
module.exports = {
    save: function(req, res) {
        if (req.body._id) {
            if (req.body._id != "" && sails.ObjectID.isValid(req.body._id)) {
                volunteer();
            } else {
                res.json({
                    value: "false",
                    comment: "Volunteers-id is incorrect"
                });
            }
        } else {
            volunteer();
        }

        function volunteer() {
            var print = function(data) {
                res.json(data);
            }
            Volunteers.save(req.body, print);
        }
    },
    delete: function(req, res) {
        if (req.body._id && req.body._id != "" && sails.ObjectID.isValid(req.body._id)) {
            var print = function(data) {
                res.json(data);
            }
            Volunteers.delete(req.body, print);
        } else {
            res.json({
                value: "false",
                comment: "Volunteers-id is incorrect"
            });
        }
    },
    find: function(req, res) {
        function callback(data) {
            res.json(data);
        };
        Volunteers.find(req.body, callback);
    },
    findone: function(req, res) {
        if (req.body._id && req.body._id != "" && sails.ObjectID.isValid(req.body._id)) {
            var print = function(data) {
                res.json(data);
            }
            Volunteers.findone(req.body, print);
        } else {
            res.json({
                value: "false",
                comment: "Volunteers-id is incorrect"
            });
        }
    },
    findlimited: function(req, res) {
        function callback(data) {
            res.json(data);
        };
        Volunteers.findlimited(req.body, callback);
    }
};