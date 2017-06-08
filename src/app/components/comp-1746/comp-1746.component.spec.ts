/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1746Component } from './comp-1746.component';

describe('Comp1746Component', () => {
  let component: Comp1746Component;
  let fixture: ComponentFixture<Comp1746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
