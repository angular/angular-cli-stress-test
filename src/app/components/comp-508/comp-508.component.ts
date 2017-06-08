/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service508Service } from '../../services/service-508.service';

@Component({
  selector: 'app-comp-508',
  templateUrl: './comp-508.component.html',
  styleUrls: ['./comp-508.component.css']
})
export class Comp508Component implements OnInit {

  constructor(private _service: Service508Service) { }

  ngOnInit() {
  }

}
