/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service329Service } from '../../services/service-329.service';

@Component({
  selector: 'app-comp-329',
  templateUrl: './comp-329.component.html',
  styleUrls: ['./comp-329.component.css']
})
export class Comp329Component implements OnInit {

  constructor(private _service: Service329Service) { }

  ngOnInit() {
  }

}
