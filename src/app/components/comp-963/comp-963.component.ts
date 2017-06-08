/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service963Service } from '../../services/service-963.service';

@Component({
  selector: 'app-comp-963',
  templateUrl: './comp-963.component.html',
  styleUrls: ['./comp-963.component.css']
})
export class Comp963Component implements OnInit {

  constructor(private _service: Service963Service) { }

  ngOnInit() {
  }

}
