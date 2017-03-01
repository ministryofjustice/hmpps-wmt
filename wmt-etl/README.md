# WMT Alpha Data Integration Prototype

This section of the prototype illustrates how we will implement data integration.

Apache Spark [PySpark](http://spark.apache.org/docs/latest/) is a flexible open source general-purpose data processing engine which can be either run interactively or as a service.

It can integrate with a wide range of data sources and sinks, supporting both batch and real-time, interactive workflows and the ability to scale out to run on a cluster as data volumes increase.

### Install Spark
To run Spark on OSX, simply install via homebrew (requires Java):

```
brew update
brew cask install java
brew install apache-spark
```

### Set-up Python Dev environment
Python development uses [virtualenvwrapper](http://virtualenvwrapper.readthedocs.io/en/latest/index.html) to provide dependency isolation.

To set up Python and VirtualEnv install as follows:

`brew install python`
`pip install virtualenvwrapper`

Add the following lines to your `~/.bash_profile`:

```
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

From the base project directory execute the following command to set up your environment:

`mkvirtualenv -a wmt-spark -r wmt-spark/requirements.txt wmt-spark` 

All subsequent times you want to work on this project you should just need to type:

`workon wmt-spark`

And it will switch to this virtualenv and take you to the ./wmt-spark directory.

### Running the ETL Job

Launch PySpark as follows:

`pyspark --master local[4]`

To run the example ETL file, first ensure that the local development DB is running and execute the following script to submit it for execution:

`spark-submit etl.py`
