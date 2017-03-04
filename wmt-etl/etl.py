import pandas as pd
from sqlalchemy import create_engine
import config

DB_CONNECTION_STRING = 'postgresql://{0}:{1}@{2}/{3}'.format(config.DB_USERNAME, config.DB_PASSWORD, config.DB_SERVER, config.DB_NAME)

db = create_engine(DB_CONNECTION_STRING)
WORKBOOK_FILEPATH = './data/WMT_Extract_sample.xlsx'
SUMMARY_SHEET = 'WMT_Extract'
COURT_REP_SHEET = 'Court_Reports'

WORKBOOK = pd.ExcelFile(WORKBOOK_FILEPATH)

dataframes = {}
for sheet in WORKBOOK.sheet_names:
    dataframes[sheet] = WORKBOOK.parse(sheet)
    df = dataframes[sheet]
    df.to_sql('stg_' + sheet.lower(), db, if_exists='replace')
