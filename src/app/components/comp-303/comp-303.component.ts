/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service303Service } from '../../services/service-303.service';

@Component({
  selector: 'app-comp-303',
  templateUrl: './comp-303.component.html',
  styleUrls: ['./comp-303.component.css']
})
export class Comp303Component implements OnInit {

  constructor(private _service: Service303Service) { }

  ngOnInit() {
  }

}
