/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service193Service } from '../../services/service-193.service';

@Component({
  selector: 'app-comp-193',
  templateUrl: './comp-193.component.html',
  styleUrls: ['./comp-193.component.css']
})
export class Comp193Component implements OnInit {

  constructor(private _service: Service193Service) { }

  ngOnInit() {
  }

}
