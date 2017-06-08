/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1389Component } from './comp-1389.component';

describe('Comp1389Component', () => {
  let component: Comp1389Component;
  let fixture: ComponentFixture<Comp1389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
