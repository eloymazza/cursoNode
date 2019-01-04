const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', () => {

        let siguiente = ticketControl.siguiente();
        console.log(siguiente);
    })

});