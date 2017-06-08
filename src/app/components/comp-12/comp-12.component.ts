/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service12Service } from '../../services/service-12.service';

@Component({
  selector: 'app-comp-12',
  templateUrl: './comp-12.component.html',
  styleUrls: ['./comp-12.component.css']
})
export class Comp12Component implements OnInit {

  constructor(private _service: Service12Service) { }

  ngOnInit() {
  }

}
