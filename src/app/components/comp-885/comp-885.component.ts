/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service885Service } from '../../services/service-885.service';

@Component({
  selector: 'app-comp-885',
  templateUrl: './comp-885.component.html',
  styleUrls: ['./comp-885.component.css']
})
export class Comp885Component implements OnInit {

  constructor(private _service: Service885Service) { }

  ngOnInit() {
  }

}
