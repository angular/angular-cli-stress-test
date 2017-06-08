/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service330Service } from '../../services/service-330.service';

@Component({
  selector: 'app-comp-330',
  templateUrl: './comp-330.component.html',
  styleUrls: ['./comp-330.component.css']
})
export class Comp330Component implements OnInit {

  constructor(private _service: Service330Service) { }

  ngOnInit() {
  }

}
