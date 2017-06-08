/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service1000Service } from '../../services/service-1000.service';

@Component({
  selector: 'app-comp-1000',
  templateUrl: './comp-1000.component.html',
  styleUrls: ['./comp-1000.component.css']
})
export class Comp1000Component implements OnInit {

  constructor(private _service: Service1000Service) { }

  ngOnInit() {
  }

}
