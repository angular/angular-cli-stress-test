/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service236Service } from '../../services/service-236.service';

@Component({
  selector: 'app-comp-236',
  templateUrl: './comp-236.component.html',
  styleUrls: ['./comp-236.component.css']
})
export class Comp236Component implements OnInit {

  constructor(private _service: Service236Service) { }

  ngOnInit() {
  }

}
