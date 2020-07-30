# Dashboard Example

This example shows the dashboard running in read-only mode.

Please follow instructions here to boot and run the dashboard: https://www.npmjs.com/package/@module-federation/dashboard-plugin

```
docker run -p 3000:3000 -it scriptedalchemy/mf-dashboard:latest
```

# Running Demo

Run the Dashboard Docker container as per [instructions](https://www.npmjs.com/package/@module-federation/dashboard-plugin).

Then run `yarn build` and reload the dashboard to see the end result

Run `yarn start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/)
- [localhost:3002](http://localhost:3002/)

Notice that `app1` will asynchronously load `app2`'s button and vice versa.