/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service244Service } from '../../services/service-244.service';

@Component({
  selector: 'app-comp-244',
  templateUrl: './comp-244.component.html',
  styleUrls: ['./comp-244.component.css']
})
export class Comp244Component implements OnInit {

  constructor(private _service: Service244Service) { }

  ngOnInit() {
  }

}
