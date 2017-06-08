/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service189Service } from '../../services/service-189.service';

@Component({
  selector: 'app-comp-189',
  templateUrl: './comp-189.component.html',
  styleUrls: ['./comp-189.component.css']
})
export class Comp189Component implements OnInit {

  constructor(private _service: Service189Service) { }

  ngOnInit() {
  }

}
