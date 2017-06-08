/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service489Service } from '../../services/service-489.service';

@Component({
  selector: 'app-comp-489',
  templateUrl: './comp-489.component.html',
  styleUrls: ['./comp-489.component.css']
})
export class Comp489Component implements OnInit {

  constructor(private _service: Service489Service) { }

  ngOnInit() {
  }

}
