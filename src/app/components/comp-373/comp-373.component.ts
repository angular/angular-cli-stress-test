/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service373Service } from '../../services/service-373.service';

@Component({
  selector: 'app-comp-373',
  templateUrl: './comp-373.component.html',
  styleUrls: ['./comp-373.component.css']
})
export class Comp373Component implements OnInit {

  constructor(private _service: Service373Service) { }

  ngOnInit() {
  }

}
