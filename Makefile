build:
	make -C frontend build

run:
	npx start-server -s ./frontend/dist/