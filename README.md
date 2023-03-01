# hello wasm

## source code

- RUST: `rs_lib/src/lib.rs`
- DENO: `main.js`
- WEB: `index.html`
- GENERATED: `lib/*`
- UT: `test.js`

```sh
╰─$ tree . -L 2
.
├── Cargo.toml
├── index.html
├── lib
│   ├── rs_lib.d.ts
│   ├── rs_lib.js
│   ├── rs_lib_bg.js
│   ├── rs_lib_bg.wasm
│   └── rs_lib_bg.wasm.d.ts
├── main.js
├── rs_lib
│   ├── Cargo.toml
│   └── src
│       └── lib.rs
└── test.js
```

### cargo

```toml
[lib]
crate_type = ["cdylib"]

[dependencies]
wasm-bindgen = "=0.2.84"
```

## build & run

```sh
## build wasm
# rustup self update
# rustup target add wasm32-unknown-unknown --toolchain nightly
# export PATH="$HOME/.cargo/bin:$PATH"
cargo +nightly build --target wasm32-unknown-unknown

## build webpack
# cargo install wasm-bindgen-cli
# <https://rustwasm.github.io/wasm-bindgen/reference/deployment.html>
wasm-bindgen target/wasm32-unknown-unknown/debug/rs_lib.wasm --target deno --out-dir lib

## run js
deno run --allow-read=. main.js
```

The output should be `3`.

## browser

```sh
$ deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts
Listening on http://localhost:4507/
```

Then navigate to the link shown and open the browser console. You should see `3`
logged to the console.

## unit test

```sh
deno test --allow-read=.
```
