/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service453Service } from '../../services/service-453.service';

@Component({
  selector: 'app-comp-453',
  templateUrl: './comp-453.component.html',
  styleUrls: ['./comp-453.component.css']
})
export class Comp453Component implements OnInit {

  constructor(private _service: Service453Service) { }

  ngOnInit() {
  }

}
