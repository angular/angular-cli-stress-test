/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service206Service } from '../../services/service-206.service';

@Component({
  selector: 'app-comp-206',
  templateUrl: './comp-206.component.html',
  styleUrls: ['./comp-206.component.css']
})
export class Comp206Component implements OnInit {

  constructor(private _service: Service206Service) { }

  ngOnInit() {
  }

}
