/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1317Component } from './comp-1317.component';

describe('Comp1317Component', () => {
  let component: Comp1317Component;
  let fixture: ComponentFixture<Comp1317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
