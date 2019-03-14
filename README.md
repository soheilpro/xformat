# xformat
Simple templating for the command line.

## How It Works
Reads a [Mustache](https://mustache.github.io/) template from the input and renders it using values passed as arguments.

## Installation

```
npm install -g @soheilpro/xformat
```

## Usage
```
echo 'My name is {{ name }}.' | xformat --name Soheil

# Output:
# My name is Soheil.
```

## Version History
+ **1.0**
	+ Initial release.

## Author
**Soheil Rashidi**

+ http://soheilrashidi.com
+ http://twitter.com/soheilpro
+ http://github.com/soheilpro

## Copyright and License
Copyright 2019 Soheil Rashidi.

Licensed under the The MIT License (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

http://www.opensource.org/licenses/mit-license.php

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
