self.addEventListener('fetch', function(event) {
   // Tell browser we will handle this event ouselves.
   // event.respondWith takes a repsonse object or a promise that resolve with a repsonse
   /*event.respondWith(
       // can take blob, buffer string or other data
       new Response('Hello <b class="a-winner-is-me">World!</b>', {
           // change the headers and content type
           headers: { 'Content-Type': 'text/html; charset=utf-8' }
       })       
   );*/
 
   // respond to request if ends in .jpg
   if ( event.request.url.endsWith('.jpg') ) {
        // Fetch an image with fetch API
        event.respondWith(
            fetch('/imgs/dr-evil.gif')
        );
    }

   console.log(event.request);

});
