/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service123Service } from '../../services/service-123.service';

@Component({
  selector: 'app-comp-123',
  templateUrl: './comp-123.component.html',
  styleUrls: ['./comp-123.component.css']
})
export class Comp123Component implements OnInit {

  constructor(private _service: Service123Service) { }

  ngOnInit() {
  }

}
