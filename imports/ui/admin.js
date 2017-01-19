import { Athletes } from '../api/athletes.js';

import './admin.html';

Template.admin.helpers({
	athletes(){
		return Athletes.find({});
	}
});

Template.admin.events({
	'click .xout'(event){
		Athletes.remove(this._id);
	},
})