import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model'
import { Customer } from '../customer.model'
import { Deliverer } from '../deliverer.model'
import { FoodCart } from '../food-cart.model'
import { DataService } from '../data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})


export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router, private dataService: DataService) {

  }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

  loginWithEmail(email,password) {
    this.authService.loginWithEmail(email,password).then((data) => {
      console.log('success');
      this.router.navigate(['']);
    })
  }

  signupWithEmail(email,password,accountType) {
    this.authService.signupWithEmail(email,password).then((data) => {
      var newUser = new User(email, accountType);
      this.dataService.addUser(newUser);

      switch(newUser.partnerType){
        case "c":
          let newCustomer = new Customer;
          newCustomer.email = newUser.email;
          var promise = this.dataService.addCustomer(newCustomer);
          promise.then((success) => {
            this.dataService.getCustomerByEmail(newUser.email).subscribe((customer) => {
              this.router.navigate(['customer-edit/', customer[0].$key])
            });
          });
          break;
        case "d":
          let newDeliverer = new Deliverer;
          newDeliverer.email = newUser.email;
          var promise = this.dataService.addDeliverer(newDeliverer);
          promise.then((success) => {
            this.dataService.getDelivererByEmail(newUser.email).subscribe((deliverer) => {
              this.router.navigate(['deliverer-edit/', deliverer[0].$key])
            });
          });
          break;
        case "f":
        let newFoodCart = new FoodCart;
        newFoodCart.email = newUser.email;
        var promise = this.dataService.addFoodCart(newFoodCart);
        promise.then((success) => {
          this.dataService.getFoodCartByEmail(newUser.email).subscribe((cart) => {
            this.router.navigate(['edit-cart/', cart[0].$key])
          });
        });
          break;
        default:
          console.log('no account type found');
      }

    })
  }


}
