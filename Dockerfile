FROM node:14.16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app/numerical

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app/numerical
RUN npm install
RUN npm install react-scripts -g

EXPOSE 3000

CMD [ "npm", "start" ]
# docker build . -t narutchai/numercial-frontend:latest
#docker run -it --rm -d -p 3000:3000 narutchai/numercial-frontend:latest