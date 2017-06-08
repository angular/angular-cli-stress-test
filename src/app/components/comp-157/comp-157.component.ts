/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service157Service } from '../../services/service-157.service';

@Component({
  selector: 'app-comp-157',
  templateUrl: './comp-157.component.html',
  styleUrls: ['./comp-157.component.css']
})
export class Comp157Component implements OnInit {

  constructor(private _service: Service157Service) { }

  ngOnInit() {
  }

}
