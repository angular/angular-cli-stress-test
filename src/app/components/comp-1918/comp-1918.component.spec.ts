/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1918Component } from './comp-1918.component';

describe('Comp1918Component', () => {
  let component: Comp1918Component;
  let fixture: ComponentFixture<Comp1918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
