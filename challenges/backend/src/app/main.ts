import {Container} from "inversify";
import {ILogger} from "./services/Logger/interface/ILogger";
import {Logger} from "./services/Logger/classes/Logger";
import {DependencyIdentifier} from "./DependencyIdentifiers";
import {AuctionMonitorApp} from "./AuctionMonitorApp";

const axios=require('axios');


/*
 * Create the DI container.
 */
const container = new Container({
    defaultScope: "Singleton",
});

/*
 * Register dependencies in DI environment.
 */
container.bind<ILogger>(DependencyIdentifier.LOGGER).to(Logger);


/*
 * Inject all dependencies in the application & retrieve application instance.
 */
const app = container.resolve(AuctionMonitorApp);

/*
 * Start the application
 */
(async () => {
    await app.start();
})();


const auction=async ()=>{
    const response=await axios.get('http://api-core-dev.caronsale.de/api/v2/auction/buyer/',{
    headers: {
      authtoken:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlRPS0VOLWJ1eWVyLWNoYWxsZW5nZUBjYXJvbnNhbGUuZGUiLCJ1c2VyVXVpZCI6IjA1NGQ0NTc3LTY5YTAtNGU0Yi04ZTVlLTk3NWJjZjhjNjJjNyIsImlhdCI6MTYzNDMwNTU0NiwiZXhwIjoxNjM0NTY0NzQ2fQ.ZtZcyhIcs0Jv_YeG0sTWbh54HWqpxuE_HidorR9YVzFI56MQbDnldTt9Dz_4SVNmgJ5yFpL4L6c7dg-qa9kCf0KeMfmntI4TlcAv-t3fEfx9rZW14FtobFFW0Nj1jk9Tbhv_wkvyeOg299Hphb-6GSGf8g7GBcDZRLz4O5JEITc',
      userid: 'buyer-challenge@caronsale.de'
  
   } })
   response.
   console.log(response.data)
  
  }

  auction()
  
  
