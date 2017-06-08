/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1932Component } from './comp-1932.component';

describe('Comp1932Component', () => {
  let component: Comp1932Component;
  let fixture: ComponentFixture<Comp1932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
