import pandas as pd
from sqlalchemy import create_engine

db = create_engine('postgresql://wmt:wmt@192.168.99.100/wmt_db')
WORKBOOK_FILEPATH = './data/WMT_Extract_sample.xlsx'
SUMMARY_SHEET = 'WMT_Extract'
COURT_REP_SHEET = 'Court_Reports'

WORKBOOK = pd.ExcelFile(WORKBOOK_FILEPATH)

dataframes = {}
for sheet in WORKBOOK.sheet_names:
    dataframes[sheet] = WORKBOOK.parse(sheet)
    df = dataframes[sheet]
    df.to_sql('stg_' + sheet.lower(), db, if_exists='replace')
