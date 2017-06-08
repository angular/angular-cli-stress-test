/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service52Service } from '../../services/service-52.service';

@Component({
  selector: 'app-comp-52',
  templateUrl: './comp-52.component.html',
  styleUrls: ['./comp-52.component.css']
})
export class Comp52Component implements OnInit {

  constructor(private _service: Service52Service) { }

  ngOnInit() {
  }

}
