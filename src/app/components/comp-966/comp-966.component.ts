/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service966Service } from '../../services/service-966.service';

@Component({
  selector: 'app-comp-966',
  templateUrl: './comp-966.component.html',
  styleUrls: ['./comp-966.component.css']
})
export class Comp966Component implements OnInit {

  constructor(private _service: Service966Service) { }

  ngOnInit() {
  }

}
