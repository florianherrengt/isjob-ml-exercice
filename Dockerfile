FROM continuumio/anaconda3:4.2.0

RUN mkdir /code

WORKDIR /code

COPY . /code

ENV TINI_VERSION v0.6.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /usr/bin/tini
RUN chmod +x /usr/bin/tini

RUN pip install --upgrade pip
RUN pip install --upgrade scikit-learn
RUN pip install --upgrade jupyter
RUN pip install dropbox

ENTRYPOINT ["/usr/bin/tini", "--"]

EXPOSE 8888

CMD ["jupyter", "notebook", "--port=8888", "--no-browser", "--ip=0.0.0.0"]
