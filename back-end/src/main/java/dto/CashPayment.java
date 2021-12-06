package dto;

import org.bson.Document;

public class CashPayment extends BasePaymentDto {

  private String type = "cash";
  String from;
  String to;

  public String getFrom() {
    return from;
  }

  public String getTo() {
    return to;
  }

  public CashPayment() {
  }

  public CashPayment(String from, String to, String type, double amount){
    this.from = from;
    this.to = to;
    this.type = type;
    this.amount = amount;
  }

  public CashPayment(String uniqueId, Double amount) {
    super(uniqueId);
    this.amount = amount;
  }

  public CashPayment(Double amount) {
    super();
    this.amount = amount;
  }

  @Override
  public Document toDocument() {
    return new Document("amount", amount)
        .append("type", type);
  }

  public Document toCashDocument(){
    return new Document("from", from).append("to",to).append("type",type).append("amount",amount);
  }

  public static CashPayment fromDocument(Document document) {
    var payment = new CashPayment(document.getDouble("amount"));
    payment.setUniqueId(document.getObjectId("_id").toHexString());
    return payment;
  }
}
