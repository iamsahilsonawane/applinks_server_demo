const express = require('express');
const app = express();

// Serve the assetlinks.json file at /well-known/assetlinks.json
app.get('/.well-known/assetlinks.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify([
      {
        "relation": ["delegate_permission/common.handle_all_urls"],
        "target": {
          "namespace": "android_app",
          "package_name": "com.raiinmaker.tiktok_login_flutter_example",
          "sha256_cert_fingerprints": [
            "F7:0F:E5:6C:94:38:3C:6D:06:A5:1E:A7:16:EB:BE:D8:92:1F:F9:1B:96:0F:9C:73:89:35:A1:12:43:B4:F5:DF",
            "8B:95:E7:45:DB:D0:97:38:8C:8D:5C:48:D6:26:AB:06:FD:B5:E8:A8:97:21:F9:BA:79:2A:FD:CB:D6:5D:4D:03"
          ]
        }
      }
  ], null, 2));
});

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

