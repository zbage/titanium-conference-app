exports.definition = {
	config: {
		columns: {
		    "ID": "integer",
		    "post_title": "string",
		    "post_content": "string",
		    "picture": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "crew"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};