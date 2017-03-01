import pandas as pd

WORKBOOK_FILEPATH = './data/WMT_Extract_sample.xlsx'
SUMMARY_SHEET = 'WMT_Extract'
COURT_REP_SHEET = 'Court_Reports'

WORKBOOK = pd.ExcelFile(WORKBOOK_FILEPATH)

dataframes = {}
for sheet in WORKBOOK.sheet_names:
    dataframes[sheet] = WORKBOOK.parse(sheet)


