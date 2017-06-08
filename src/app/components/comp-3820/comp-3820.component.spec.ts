/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3820Component } from './comp-3820.component';

describe('Comp3820Component', () => {
  let component: Comp3820Component;
  let fixture: ComponentFixture<Comp3820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
