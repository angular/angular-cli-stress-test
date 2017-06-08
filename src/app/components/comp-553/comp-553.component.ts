/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service553Service } from '../../services/service-553.service';

@Component({
  selector: 'app-comp-553',
  templateUrl: './comp-553.component.html',
  styleUrls: ['./comp-553.component.css']
})
export class Comp553Component implements OnInit {

  constructor(private _service: Service553Service) { }

  ngOnInit() {
  }

}
