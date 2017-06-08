/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service684Service } from '../../services/service-684.service';

@Component({
  selector: 'app-comp-684',
  templateUrl: './comp-684.component.html',
  styleUrls: ['./comp-684.component.css']
})
export class Comp684Component implements OnInit {

  constructor(private _service: Service684Service) { }

  ngOnInit() {
  }

}
