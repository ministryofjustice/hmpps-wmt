# Docker file defining a minimal PySpark instance for development

FROM ubuntu:14.04
MAINTAINER Tom Swann "t.swann@kainos.com"
ARG SPARK_VERSION="2.1.0-bin-hadoop2.7"

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get -y install curl
RUN apt-get -y install software-properties-common python-software-properties

# JAVA
RUN add-apt-repository ppa:webupd8team/java
RUN apt-get update
RUN echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | sudo debconf-set-selections
RUN apt-get -y install oracle-java8-installer
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

# Install Python 2.7 (PySpark is supported for 2.6 +, version 3+ is not currently supported)
RUN sudo apt-get -y install python python-pip

# Install PySpark
ADD http://d3kbcqa49mib13.cloudfront.net/spark-${SPARK_VERSION}.tgz /opt/spark.tgz
RUN cd opt && tar xzf spark.tgz && mv spark-*/ spark/ && rm spark.tgz
RUN cp /opt/spark/conf/log4j.properties.template /opt/spark/conf/log4j.properties

WORKDIR /opt/spark

# Reduce verbose logging in interactive mode
RUN sed -i "s/INFO/WARN/g" /opt/spark/conf/log4j.properties
EXPOSE 4040

## Clean up
RUN apt-get -y autoremove && rm -rf /var/lib/apt/lists/*

## 
ENV SPARK_HOME /opt/spark
ENV PYSPARK_PYTHON python
ENV PYSPARK_DRIVER_PYTHON ipython
ENV LOCAL_CORES *

CMD ["/opt/spark/bin/pyspark"]