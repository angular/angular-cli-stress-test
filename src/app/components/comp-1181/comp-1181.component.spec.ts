/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1181Component } from './comp-1181.component';

describe('Comp1181Component', () => {
  let component: Comp1181Component;
  let fixture: ComponentFixture<Comp1181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
