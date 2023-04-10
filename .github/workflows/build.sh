#! /bin/bash

set -x

ls -a

git checkout -b gh-pages

git clone https://github.com/oneapi-src/oneDNN.git --branch dev-graph --recursive
cd oneDNN
mkdir build
cd build

# build latest
cmake ..
make doc
cd ../..

rm -rf ./latest
mkdir latest
cp -r ./oneDNN/build/reference/html/* ./latest/

# build beta-4
cd oneDNN
git checkout origin/dev-graph-beta-4
git submodule update --recursive
cd build
rm -rf ./*
cmake ..
make doc
cd ../..

rm -rf ./beta-4
mkdir beta-4
cp -r ./oneDNN/build/reference/html/* ./beta-4/

# build beta-3
cd oneDNN
git checkout origin/dev-graph-beta-3
git submodule update --recursive
cd build
rm -rf ./*
cmake ..
make doc
cd ../..

rm -rf ./beta-3
mkdir beta-3
cp -r ./oneDNN/build/reference/html/* ./beta-3/

# build beta-2
cd oneDNN
git checkout origin/dev-graph-beta-2
git submodule update --recursive
cd build
rm -rf ./*
cmake ..
make doc
cd ../..

rm -rf ./beta-2
mkdir beta-2
cp -r ./oneDNN/build/reference/html/* ./beta-2/

# build alpha
cd oneDNN
git checkout origin/dev-graph-alpha
git submodule update --recursive
cd build
rm -rf ./*
cmake ..
make doc
cd ../..

rm -rf ./alpha
mkdir alpha
cp -r ./oneDNN/build/reference/html/* ./alpha/

# build preview4
cd oneDNN
git checkout origin/dev-graph-preview4
git submodule update --recursive
cd build
rm -rf ./*
cmake ..
make doc
cd ../..

rm -rf ./preview4
mkdir preview4
cp -r ./oneDNN/build/reference/html/* ./preview4/

# build preview3
cd oneDNN
git checkout origin/dev-graph-preview3
git submodule update --recursive
cd build
rm -rf ./*
cmake ..
make doc
cd ../..

rm -rf ./preview3
mkdir preview3
cp -r ./oneDNN/build/reference/html/* ./preview3/

# build preview2
cd oneDNN
git checkout origin/dev-graph-preview2
git submodule update --recursive
cd build
rm -rf ./*
cmake ..
make doc
cd ../..

rm -rf ./preview2
mkdir preview2
cp -r ./oneDNN/build/reference/html/* ./preview2/

echo "finished document build"

ls -a

# publish the document
git add latest
git add beta-4
git add beta-3
git add beta-2
git add alpha
git add preview4
git add preview3
git add preview2

git config user.name "Lv, Tao A"
git config user.email "tao.a.lv@intel.com"

git commit -m "deploy document weekly"
git push origin gh-pages -f

