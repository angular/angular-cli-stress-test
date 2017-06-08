/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service174Service } from '../../services/service-174.service';

@Component({
  selector: 'app-comp-174',
  templateUrl: './comp-174.component.html',
  styleUrls: ['./comp-174.component.css']
})
export class Comp174Component implements OnInit {

  constructor(private _service: Service174Service) { }

  ngOnInit() {
  }

}
