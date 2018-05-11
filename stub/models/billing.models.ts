interface Term {
  id: string;
  startDate: Date;
  endDate: Date | null;
  amount: Number | null;
}

interface BillingStatement {
  id: string;
  terms: Term[] | null;
}
