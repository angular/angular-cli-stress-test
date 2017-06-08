/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service556Service } from '../../services/service-556.service';

@Component({
  selector: 'app-comp-556',
  templateUrl: './comp-556.component.html',
  styleUrls: ['./comp-556.component.css']
})
export class Comp556Component implements OnInit {

  constructor(private _service: Service556Service) { }

  ngOnInit() {
  }

}
