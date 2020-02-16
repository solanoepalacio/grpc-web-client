import React from 'react';

import {GreeterClient} from '../messages/webapp_grpc_web_pb';
import {HelloRequest} from '../messages/webapp_pb';

export default function IndexPage() {
    console.log("index page!")
    const greeterService = new GreeterClient(`http://grpc.api.localhost:5000`);
    const sayHi = new HelloRequest();
    sayHi.setName("Solano");
    const call = greeterService.sayHello(sayHi, {}, (error, response) => {
      console.log('error', error);
      console.log('response', response);
    });
  
    call.on('status', (status) => {
      console.log('status update', status)
    });
    return <div>Hello World!!!</div>
}