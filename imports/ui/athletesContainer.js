import { Athletes } from '../api/athletes.js';

import './athletesContainer.html';

Template.athletesContainer.helpers({
	athletes(){
		return Athletes.find({});
	}
})

Template.athletesContainer.events({
	'click .container'(event){
		console.log(event);
		twttr.widgets.createVideo(
		  '560070183650213889',
		  document.getElementbyId('container')
		);
	},

})