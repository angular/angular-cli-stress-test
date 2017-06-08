/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service499Service } from '../../services/service-499.service';

@Component({
  selector: 'app-comp-499',
  templateUrl: './comp-499.component.html',
  styleUrls: ['./comp-499.component.css']
})
export class Comp499Component implements OnInit {

  constructor(private _service: Service499Service) { }

  ngOnInit() {
  }

}
