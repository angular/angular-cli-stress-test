/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service708Service } from '../../services/service-708.service';

@Component({
  selector: 'app-comp-708',
  templateUrl: './comp-708.component.html',
  styleUrls: ['./comp-708.component.css']
})
export class Comp708Component implements OnInit {

  constructor(private _service: Service708Service) { }

  ngOnInit() {
  }

}
