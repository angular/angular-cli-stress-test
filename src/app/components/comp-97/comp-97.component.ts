/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service97Service } from '../../services/service-97.service';

@Component({
  selector: 'app-comp-97',
  templateUrl: './comp-97.component.html',
  styleUrls: ['./comp-97.component.css']
})
export class Comp97Component implements OnInit {

  constructor(private _service: Service97Service) { }

  ngOnInit() {
  }

}
