import os

DB_SERVER = os.getenv('WMT_DB_SERVER', 'localhost')
DB_NAME = os.getenv('WMT_DB_NAME', 'wmt_db')
DB_USERNAME = os.getenv('WMT_DB_USERNAME', 'wmt')
DB_PASSWORD = os.getenv('WMT_DB_PASSWORD', 'wmt')
