import {Component, OnInit} from '@angular/core';
import {ToastService} from '../toast/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toastService: ToastService) {
  }

  ngOnInit() {
    this.toastService.changeMessage(
      {
        showErrorToast: false,
        showSuccessToast: false,
        showInfoToast: false,
      }
    );
  }
}
