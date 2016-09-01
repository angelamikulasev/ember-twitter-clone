export default function() {
  this.namespace = 'api';
  this.get('/users');
  this.get('/users/:id');
  this.get('/chirps');
  this.get('/chirps/:id');
};