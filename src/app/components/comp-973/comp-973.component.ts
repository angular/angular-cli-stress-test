/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service973Service } from '../../services/service-973.service';

@Component({
  selector: 'app-comp-973',
  templateUrl: './comp-973.component.html',
  styleUrls: ['./comp-973.component.css']
})
export class Comp973Component implements OnInit {

  constructor(private _service: Service973Service) { }

  ngOnInit() {
  }

}
