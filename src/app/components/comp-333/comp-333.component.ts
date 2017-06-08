/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service333Service } from '../../services/service-333.service';

@Component({
  selector: 'app-comp-333',
  templateUrl: './comp-333.component.html',
  styleUrls: ['./comp-333.component.css']
})
export class Comp333Component implements OnInit {

  constructor(private _service: Service333Service) { }

  ngOnInit() {
  }

}
