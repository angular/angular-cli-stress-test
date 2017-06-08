/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service19Service } from '../../services/service-19.service';

@Component({
  selector: 'app-comp-19',
  templateUrl: './comp-19.component.html',
  styleUrls: ['./comp-19.component.css']
})
export class Comp19Component implements OnInit {

  constructor(private _service: Service19Service) { }

  ngOnInit() {
  }

}
