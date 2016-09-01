export default function() {
  this.namespace = 'api';
  this.get('/users/:id');
  this.get('/chirps');
};