/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service225Service } from '../../services/service-225.service';

@Component({
  selector: 'app-comp-225',
  templateUrl: './comp-225.component.html',
  styleUrls: ['./comp-225.component.css']
})
export class Comp225Component implements OnInit {

  constructor(private _service: Service225Service) { }

  ngOnInit() {
  }

}
