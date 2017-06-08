/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service525Service } from '../../services/service-525.service';

@Component({
  selector: 'app-comp-525',
  templateUrl: './comp-525.component.html',
  styleUrls: ['./comp-525.component.css']
})
export class Comp525Component implements OnInit {

  constructor(private _service: Service525Service) { }

  ngOnInit() {
  }

}
