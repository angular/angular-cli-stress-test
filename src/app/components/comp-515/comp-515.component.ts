/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service515Service } from '../../services/service-515.service';

@Component({
  selector: 'app-comp-515',
  templateUrl: './comp-515.component.html',
  styleUrls: ['./comp-515.component.css']
})
export class Comp515Component implements OnInit {

  constructor(private _service: Service515Service) { }

  ngOnInit() {
  }

}
