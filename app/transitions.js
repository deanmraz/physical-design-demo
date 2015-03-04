
export default function() {
  var duration = 500;

  this.transition(
    this.fromRoute('emberconf.speakers'),
    this.toRoute('emberconf.speaker'),
    this.use('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration }]
    }, {
      use: ['toLeft', { duration }]
    }),
    this.reverse('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration }]
    }, {
      use: ['toRight', { duration }]
    })
  );

  this.transition(
    this.childOf('.speaker-icons'),
    this.use('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration, easing: [250, 15] } ]
    })
  );


  this.transition(
    this.childOf('.xsponsors-footer'),
    this.use('explode', {
      matchBy: 'data-sponsor-id',
      use: ['flyTo', { duration, easing: [250, 15] } ]
    })
  );
}
