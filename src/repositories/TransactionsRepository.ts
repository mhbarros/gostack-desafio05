import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    let income = 0;
    let outcome = 0;

    this.transactions.forEach((t) => {
      if(t.type === 'income'){
        income += t.value;
      }else{
        outcome += t.value;
      }
    })

    return {
      income,
      outcome,
      total: income - outcome
    }
  }

  public create(title: string, value: number, type: 'income'|'outcome'): Transaction {
    const transaction = new Transaction({title, value, type});

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
