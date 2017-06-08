/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service649Service } from '../../services/service-649.service';

@Component({
  selector: 'app-comp-649',
  templateUrl: './comp-649.component.html',
  styleUrls: ['./comp-649.component.css']
})
export class Comp649Component implements OnInit {

  constructor(private _service: Service649Service) { }

  ngOnInit() {
  }

}
