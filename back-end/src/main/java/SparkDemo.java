import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import dto.CashPayment;
import org.bson.Document;
import org.eclipse.jetty.server.Authentication;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.mongodb.client.model.Filters.eq;
import static spark.Spark.*;

// use to convert between Java Object and Json
class UserDto{
  public String username;
  public String password;
  public double amount;

  public UserDto(String username, String password, double amount) {
    this.username = username;
    this.password = password;
    this.amount = amount;
  }

  public UserDto(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public double getAmount() {
    return amount;
  }

  public void setAmount(double amount) {
    this.amount = amount;
  }

  public Document toDocument() {
    return new Document("username", username)
            .append("password", password).append("amount",amount);
  }
}

class SignUpResultDto{
  Boolean isSuccess;
  String error;

  public SignUpResultDto(Boolean isSuccess, String error) {
    this.isSuccess = isSuccess;
    this.error = error;
  }
}

public class SparkDemo {

  public static Gson gson = new Gson();
  public static List<UserDto> userCollection = new ArrayList<>();

  public static void main(String[] args) throws IOException {
    port(1234);
    MongoClient mongoClient = new MongoClient("localhost", 27017);
    System.out.println("Connected to mongodb");
    MongoDatabase db = mongoClient.getDatabase("MyDatabase");
    MongoCollection<Document> myCollection = db.getCollection("Users"); // myDatabase/Users

    MongoCollection<Document> myTransactions = db.getCollection("Transactions");

        post("/api/SignUp", (req, res) -> {   // "SignUp" is case sensitive
      String body = req.body();
      //System.out.println("This is the body: " + body);
      UserDto userDto = gson.fromJson(body, UserDto.class);
//          System.out.println(userDto.getUsername());
//          System.out.println(userDto.getPassword());
//          System.out.println(userDto.getAmount());
          userDto.setAmount(1000.0); // give a default amount of 1000.0 to every new user
//          System.out.println(userDto.getUsername());
//          System.out.println(userDto.getPassword());
//          System.out.println(userDto.getAmount());

      // handle duplicates
          Document potentialUser = myCollection.find(eq("username",userDto.getUsername())).first();
          if(potentialUser != null){
            System.out.println("Username duplicate found, this account will not be created.");
            var result = new SignUpResultDto(false,"username duplicate found");
            return gson.toJson(result);
          }
      userCollection.add(userDto);
      myCollection.insertOne(userDto.toDocument());
          System.out.println("Sign-up succeed");
      var result = new SignUpResultDto(true, null);
      return gson.toJson(result); // must turn java object to json string before sending
 });

        post("/api/cashPayment", (req,res) -> {
          String body = req.body();
          System.out.println("This is the body: " + body);
          System.out.println("hello1");
          CashPayment cashDto = gson.fromJson(body, CashPayment.class);
          System.out.println(cashDto.getFrom());
          System.out.println(cashDto.getTo());
          System.out.println("hello2");

          myTransactions.insertOne(cashDto.toCashDocument());

          return null;
        });

//    //connect "MyDatabase/Users" in Robot 3T
//    MongoCollection<Document> userCollection = db.getCollection("Users");
//    ServerSocket ding;
//    Socket dong = null;
//    try {
//      ding = new ServerSocket(1299);
//      System.out.println("Opened socket " + 1299);
//      while (true) {
//        // keeps listening for new clients, one at a time
//        try {
//          dong = ding.accept(); // waits for client here
//        } catch (IOException e) {
//          System.out.println("Error opening socket");
//          System.exit(1);
//        }
//
//        InputStream stream = dong.getInputStream();
//        BufferedReader in = new BufferedReader(new InputStreamReader(stream));
//        String firstLine = null;
//
//        try {
//          // read the first line to get the request method, URI and HTTP version
//          String line = in.readLine();
//          firstLine = line;
//          System.out.println("----------REQUEST START---------");
//          System.out.println(line);
//          // read only headers
//          line = in.readLine();
//          while (line != null && line.trim().length() > 0) {
//            int index = line.indexOf(": ");
//            if (index > 0) {
//              System.out.println(line);
//            } else {
//              break;
//            }
//            line = in.readLine();
//          }
//          System.out.println("----------REQUEST END---------\n\n");
//        } catch (IOException e) {
//          System.out.println("Error reading");
//          System.exit(1);
//        }
//
//        BufferedOutputStream out = new BufferedOutputStream(dong.getOutputStream());
//        PrintWriter writer = new PrintWriter(out, true);  // char output to the client
//
//        // every response will always have the status-line, date, and server name
//        writer.println("HTTP/1.1 200 OK");
//        writer.println("Server: TEST");
//        writer.println("Connection: close");
//        writer.println("Content-type: text/html");
//        writer.println("");
//        if(firstLine != null){
//          String path = firstLine.split(" ")[1];
//          String[] parts = path.split("\\?");
//
//          // in hw1 this is factory
//          ///getUser?username=user123&password=123
//          Map<String,String> queryArgs =  Arrays.stream(parts[1].split("&"))
//                  .map(keyValueString -> keyValueString.split("="))
//                  .collect(Collectors.toMap(array -> array[0], array -> array[1]));// stream of array of strings
//          if(parts[0].equals("/getUser")) {
//            String username = queryArgs.get("username");
//            String password = queryArgs.get("password");
//            System.out.println("Username " + username + " password: " + password);
//
//            Document potentialuser = userCollection.find(eq("username",username)).first();
//            if(potentialuser == null) {
//              writer.println("<h1>User Not Found</h1>");
//            } else{
//              if(potentialuser.getString("password").equals(password)) {
//                writer.println("<h1>UserFound</h1>");}
//              else{
//                writer.println("<h1>Invalid password! </h1>");
//              }
//
//            }
//
//          }else if(parts[0].equals("/createUser")){
//            String username = queryArgs.get("username");
//            String password = queryArgs.get("password");
//            System.out.println("Username " + username + " password: " + password);
//            Document potentialUser = userCollection.find(eq("username",username)).first();
//
//            // can not make 2 users with same username
//            if(potentialUser != null) {
//              writer.println("<h1>Username already taken</h1>");
//            } else{
//              // create brand new user
//              Document newUser = new Document().append("username",username)
//                      .append("password", password);
//              userCollection.insertOne(newUser);
//              System.out.println("<h1>User has been created</h1>");
//
//            }
//
//          }else{
//            writer.println("<h1>404<h1>");
//          }
//        }else{
//          // fallback
//          writer.println("<h1>Hello World</h1>");
//        }
//
//        dong.close();
//      }
//
//    } catch (IOException e) {
//      System.out.println("Error opening socket");
//      System.exit(1);
//
//    }
  }
}