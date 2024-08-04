from nsepy import get_history
from datetime import datetime
import pandas as pd

stocks = ['RELIANCE', 'TCS', 'INFY']
investment_amount = 5000
sip_date = 1
start_date = datetime(2020, 1, 1)
end_date = datetime.today()

def fetch_stock_data(stock, start, end):
    return get_history(symbol=stock, start=start, end=end)

def calculate_sip(stock, amount, start, end, sip_date):
    data = fetch_stock_data(stock, start, end)
    sip_dates = pd.date_range(start=start, end=end, freq='MS')
    sip_dates = sip_dates[sip_dates.day == sip_date]
    print(data)
    
    sip_investments = []
    for date in sip_dates:
        if date in data.index:
            price = data.loc[date]['Close']
            units = amount / price
            sip_investments.append({'Date': date, 'Price': price, 'Units': units, 'Investment': amount})
    
    return pd.DataFrame(sip_investments)

sip_results = {}
for stock in stocks:
    sip_results[stock] = calculate_sip(stock, investment_amount, start_date, end_date, sip_date)

print("--------------")
print(sip_results)

# for stock, result in sip_results.items():
#     print(f"\nSIP Summary for {stock}:")
#     print(result)
#     print(f"Total Investment: {result['Investment'].sum()}")
#     print(f"Total Units Acquired: {result['Units'].sum()}")
#     print(f"Current Value: {result['Units'].sum() * result.iloc[-1]['Price']}")