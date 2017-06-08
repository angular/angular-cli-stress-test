/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service20Service } from '../../services/service-20.service';

@Component({
  selector: 'app-comp-20',
  templateUrl: './comp-20.component.html',
  styleUrls: ['./comp-20.component.css']
})
export class Comp20Component implements OnInit {

  constructor(private _service: Service20Service) { }

  ngOnInit() {
  }

}
