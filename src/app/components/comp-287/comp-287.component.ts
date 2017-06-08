/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service287Service } from '../../services/service-287.service';

@Component({
  selector: 'app-comp-287',
  templateUrl: './comp-287.component.html',
  styleUrls: ['./comp-287.component.css']
})
export class Comp287Component implements OnInit {

  constructor(private _service: Service287Service) { }

  ngOnInit() {
  }

}
