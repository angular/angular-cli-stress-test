/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service184Service } from '../../services/service-184.service';

@Component({
  selector: 'app-comp-184',
  templateUrl: './comp-184.component.html',
  styleUrls: ['./comp-184.component.css']
})
export class Comp184Component implements OnInit {

  constructor(private _service: Service184Service) { }

  ngOnInit() {
  }

}
