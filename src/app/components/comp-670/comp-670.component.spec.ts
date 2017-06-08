/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp670Component } from './comp-670.component';

describe('Comp670Component', () => {
  let component: Comp670Component;
  let fixture: ComponentFixture<Comp670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
