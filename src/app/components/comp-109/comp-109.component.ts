/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service109Service } from '../../services/service-109.service';

@Component({
  selector: 'app-comp-109',
  templateUrl: './comp-109.component.html',
  styleUrls: ['./comp-109.component.css']
})
export class Comp109Component implements OnInit {

  constructor(private _service: Service109Service) { }

  ngOnInit() {
  }

}
