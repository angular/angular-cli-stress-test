/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1403Component } from './comp-1403.component';

describe('Comp1403Component', () => {
  let component: Comp1403Component;
  let fixture: ComponentFixture<Comp1403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
