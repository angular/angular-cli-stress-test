/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1293Component } from './comp-1293.component';

describe('Comp1293Component', () => {
  let component: Comp1293Component;
  let fixture: ComponentFixture<Comp1293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
