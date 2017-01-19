import { Router } from 'meteor/iron:router';
import { Athletes } from '../imports/api/athletes.js';

Router.route('/', function(){
	this.render('athletesContainer');
});

Router.route('/admin', function(){
	this.render('admin');
});