# Dicebear

I'm just playing around with dicebear. Pretty cool avatar builder. This test was using HTTP Api

## Resources

https://www.dicebear.com/

## Local Development

1. Clone the repo

   ```
   git clone git@github.com:jekiquin/play-dicebear.git play-dicebear
   ```

2. Install dependencies

   ```
   yarn
   ```

3. Run local server

   ```
   yarn dev
   ```

## Environment Variable

I'm currently using the default endpoint but you can always self [host dicebear HTTP Api](https://www.dicebear.com/guides/host-the-http-api-yourself)

1. Create .env file in the root of your folder and copy the text below

```
NEXT_PUBLIC_BACKEND_URL=https://api.dicebear.com/6.x/adventurer/svg
```
