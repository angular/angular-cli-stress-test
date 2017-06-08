/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service311Service } from '../../services/service-311.service';

@Component({
  selector: 'app-comp-311',
  templateUrl: './comp-311.component.html',
  styleUrls: ['./comp-311.component.css']
})
export class Comp311Component implements OnInit {

  constructor(private _service: Service311Service) { }

  ngOnInit() {
  }

}
