/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service521Service } from '../../services/service-521.service';

@Component({
  selector: 'app-comp-521',
  templateUrl: './comp-521.component.html',
  styleUrls: ['./comp-521.component.css']
})
export class Comp521Component implements OnInit {

  constructor(private _service: Service521Service) { }

  ngOnInit() {
  }

}
